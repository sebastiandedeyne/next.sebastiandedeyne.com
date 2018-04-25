import Footer from './layout/Footer';
import { baseline } from '../lib/style';
import Navigation from './layout/Navigation';

const Layout = ({ children, section, title }) => (
  <div>
    <Navigation section={section} title={title} />
    <div className="holy-grail">
      <main className="wrapper">{children}</main>
      <Footer />
    </div>

    <style jsx>{`
      .holy-grail {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        flex-grow: 1;
        margin: ${baseline(5)} auto ${baseline(3)};
      }
    `}</style>
  </div>
);

export default Layout;
