/* eslint-env node */
/* eslint-disable no-console */

function main(command, args) {
  const handlers = {
    'make:post': require('./makePost')
  };

  if (!handlers.hasOwnProperty(command)) {
    console.error('Command not found');
    process.exit(1);
  }

  handlers[command](...args)
    .then(result => {
      console.log('\x1b[32m', result);
    })
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

const [, , command, ...args] = process.argv;
main(command, args);
