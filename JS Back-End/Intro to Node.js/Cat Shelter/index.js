const http = require('http');
const router = require('./router');
const { homeView } = require('./views/home');
const port = 3000;

router.get('/', homeView);
// router.get('/home', homeView);
// router.get('/addBreed', addBreedView);
// router.post('/addBreed', addBreed);
// router.get('/catShelter', catShelterView);
// router.get('/edit', editView);
// router.post('/edit', edit);
// router.get('/notFound', notFoundView);


http.createServer(router.match).listen(port);