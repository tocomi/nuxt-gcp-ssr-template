const functions = require('firebase-functions');
const { Nuxt } = require('nuxt')
const app = require('express')()
const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/'
  },
})

app.use((request, response) => {
  nuxt.renderRoute('/', { request }).then((result) => {
    response.send(result.html)
  }).catch((error) => {
    response.send(error)
  })
})

exports.app = functions.https.onRequest(app)
