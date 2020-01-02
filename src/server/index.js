// const path = require('path')
const React = require('react')
const express = require('express')
const compression = require('compression')
const {renderToString} = require('react-dom/server')
const App = require('./app').default

const PORT = process.env.PORT || 8090
const NODE_ENV = process.env.NODE_ENV || 8090

const server = express()



 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}
// 启用gzip
server.use(compression({ filter: shouldCompress }))
server.use('/static',express.static('./static'))

server.get('/',(req,res)=>{
  // console.log(Object.keys(req))
  const headers = req.headers
  res.send(`
    <html>
      <head>
        <title>ssr react</title>
        <script>
        window.store_client = ${JSON.stringify(headers)}
        </script>
      </head>
      <body>
        <div id="root">${renderToString(
          React.createElement(App,{headers})
        )}</div>
        <script src="/static/js/public/polyfill.7.2.5.min.js"></script>
        <script src="/static/js/public/react.production.min.js"></script>
        <script src="/static/js/public/react-dom.production.min.js"></script>
        <script src="/static/js/build/index.js"></script>
      </body>
    </html>
  `)
})

server.listen(PORT,()=>{
  console.log(PORT,NODE_ENV)
})