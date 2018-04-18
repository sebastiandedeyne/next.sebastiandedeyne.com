module.exports = function responseCache({ dev = false } = {}) {
  const cachedResponseBodies = {};

  function log(message) {
    if (dev) {
      /* eslint-disable-next-line no-console */
      console.log(message);
    }
  }

  return function(req, res, next) {
    const cachedResponseBody = cachedResponseBodies[req.originalUrl];

    if (cachedResponseBody) {
      log(`Response cache HIT:  ${req.originalUrl}`);

      res.send(cachedResponseBody);
      return;
    }

    const send = res.send.bind(res);

    res.send = body => {
      log(`Response cache MISS: ${req.originalUrl}`);

      cachedResponseBodies[req.originalUrl] = body;
      send(body);
    }

    next();
  };
};
