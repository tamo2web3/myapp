const routes = require('next-routes')();

 routes
  .add('/indexz', '/train/indexz')
  .add('/indexa', '/heal/indexa')
  .add('/indexb', '/play/indexb')
  .add('/indexc', '/event/indexc');

module.exports = routes;
