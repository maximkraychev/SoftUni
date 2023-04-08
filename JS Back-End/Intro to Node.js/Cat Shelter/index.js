const http = require('http');
const router = require('./src/router');
const { handlerGet, handlerPost } = require('./src/handler');
const { indexHandler } = require('./src/handlers/indexHandler');
const port = 3000;

router.get('/', indexHandler);
router.get('/home', handlerGet);
router.get('/addBreed', handlerGet);
router.get('/addCat', handlerGet);
router.get('/catShelter', handlerGet);
router.get('/edit', handlerGet);
router.post('/addBreed', handlerPost);
router.post('/addCat', handlerPost);
//router.post('/edit', edit);

http.createServer(router.match).listen(port);