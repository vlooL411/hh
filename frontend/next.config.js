const withSASS = require("@zeit/next-sass")();

module.exports = {
  withSASS,
  env: {
    PORT: 3000,
    HOST: 'http://localhost:3000',
    HOST_GRAPHQL: 'http://localhost:4000/graphql'
  }
}
