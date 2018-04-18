module.exports = function responseCache({
  enabled = true,
  debug = false
} = {}) {
  const cachedResponseBodies = {};

  function log(message) {
    if (debug) {
      /* eslint-disable-next-line no-console */
      console.log(message);
    }
  }

  if (!enabled) {
    return function(req, res, next) {
      next();
    };
  }

  return function(req, res, next) {
    const cachedResponseBody = cachedResponseBodies[req.originalUrl];

    if (cachedResponseBody) {
      log(`> Response cache HIT:   ${req.originalUrl}`);

      res.send(cachedResponseBody);
      return;
    }

    const send = res.send.bind(res);

    res.send = body => {
      if (res.statusCode === 200) {
        log(`> Response cache WRITE: ${req.originalUrl}`);

        cachedResponseBodies[req.originalUrl] = body;
      }

      send(body);
    };

    next();
  };
};
