const http = require('http');
const router = require('./router/router');
const { handlerGet, handlerPost } = require('./util/handler');
const { homeController } = require('./controllers/homeController');
const { breedControllerGET, breedControllerPOST } = require('./controllers/breedController');
const port = 3000;

router.get('/', homeController);
router.get('/home', handlerGet);
router.get('/addBreed', breedControllerGET);
router.get('/addCat', handlerGet);
router.get('/catShelter', handlerGet);
router.get('/edit', handlerGet);
router.post('/addBreed', breedControllerPOST);
router.post('/addCat', handlerPost);
//router.post('/edit', edit);

http.createServer(router.match).listen(port);   