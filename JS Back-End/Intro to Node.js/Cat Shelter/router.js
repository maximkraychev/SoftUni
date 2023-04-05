const routes = {};

function match(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;

  let handler;

  //TODO router
  // if (routes[path] != undefined) {
  //   handler = 
  // } else if(routes[path])


}

function register(method, path, handler) {
  if (routes[path] == undefined) {
    routes[path] = {};
  }

  routes[path][method] = handler;
}

module.exports = {
  match,
  get: register.bind(null, 'GET'),
  post: register.bind(null, 'POST'),
};

/* TODO path for favicon
    /favicon.ico  */



// Working match for tests!!!

// function match(req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text/plain'
//     });

//     const url = new URL(req.url, `http://${req.headers.host}`);
//     console.log(url.pathname);

//     res.write('Hello JS World');
//     res.end();
// }
