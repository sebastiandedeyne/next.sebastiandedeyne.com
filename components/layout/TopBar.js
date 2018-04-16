import Link from 'next/link';
import { Component, createRef } from 'react';
import { baseline, color, fontSize } from '../../lib/style';

function calculateOpacity({ scrollY, fadeOutPosition }) {
  if (scrollY > fadeOutPosition) {
    return 0;
  }

  return 1 - scrollY / fadeOutPosition;
}

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.headerRef = createRef();
    this.fadeOutPosition = 0;
    this.updateOpacityRequest = null;

    this.state = { sections: [], currentSection: {} };
  }

  static getDerivedStateFromProps(nextProps) {
    const sections = [
      { href: '/', title: 'Home', prefetch: true },
      { href: '/posts', title: 'Posts' },
      { href: '/talks', title: 'Talks' },
      { href: '/about', title: 'About' }
    ];

    const currentSection =
      sections.find(({ href }) => href === nextProps.section) || sections[0];

    return { sections, currentSection };
  }

  updateOpacity() {
    const opacity = calculateOpacity({
      scrollY: window.scrollY,
      fadeOutPosition: this.fadeOutPosition
    });

    const currentOpacity = parseFloat(
      this.headerRef.current.style.opacity || 1
    );

    if (Math.abs(opacity - currentOpacity) > 0.01) {
      this.headerRef.current.style.opacity = opacity;
      this.headerRef.current.style.display = opacity === 0 ? 'none' : '';
    }

    this.updateOpacityRequest = window.requestAnimationFrame(
      this.updateOpacity.bind(this)
    );
  }

  componentDidMount() {
    this.fadeOutPosition = this.headerRef.current.clientHeight;

    this.updateOpacity();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.updateOpacityRequest);
  }

  render() {
    return (
      <header className="wrapper" ref={this.headerRef}>
        <strong className="caps">
          <Link href="/" prefetch>
            <a className="title">Sebastian De Deyne</a>
          </Link>
          {this.state.currentSection.href !== '/' && (
            <span className="breadcrumb">
              <span className="separator">/</span>
              <Link
                href={this.state.currentSection.href}
                prefetch={this.state.currentSection.prefetch}
              >
                <a>{this.state.currentSection.title}</a>
              </Link>
            </span>
          )}
        </strong>
        <nav>
          <ul>
            {this.state.sections.map(({ href, title, prefetch = false }) => (
              <li
                key={href}
                className={
                  href === this.state.currentSection.href ? 'active' : null
                }
              >
                <Link href={href} prefetch={prefetch}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <style jsx>{`
          header {
            align-items: flex-end;
            display: flex;
            justify-content: space-between;
            padding-bottom: ${baseline(0.5)};
            padding-top: ${baseline(0.5)};
            width: 100%;
            position: fixed;
            transform: translate3d(calc(50vw - 50%), 0, 0);
          }

          strong {
            font-weight: bold;
          }

          .title {
            color: ${color.red};
          }

          .breadcrumb {
            color: ${color.gray};
            font-weight: normal;
          }

          .separator {
            display: inline-block;
            margin: 0 0.75em;
          }

          nav {
            color: ${color.gray};
            font-size: ${fontSize.xs};
          }

          ul {
            display: flex;
            justify-content: flex-end;
          }

          li {
            margin-left: ${baseline(0.75)};
          }

          nav .active a {
            color: ${color.black};
          }
        `}</style>
      </header>
    );
  }
}
