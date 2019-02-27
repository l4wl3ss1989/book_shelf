//https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md#object-proxy-configuration-is-superseded-by-srcsetupproxyjshttps://github.com/facebook/create-react-app/blob/master/CHANGELOG.md#object-proxy-configuration-is-superseded-by-srcsetupproxyjs
// Remeber to delete proxy from package.json and place this file inside Client/src/
const proxy = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(proxy('/api/', 
    { target: 'http://localhost:3001' }
  ));
};