const http = require('http');
const router = require('./router');
const { handlerGet, handlerPost } = require('./handler');
const port = 3000;

router.get('/', handlerGet);
router.get('/home', handlerGet);
router.get('/addBreed', handlerGet);
router.get('/addCat', handlerGet);
router.get('/catShelter', handlerGet);
router.get('/edit', handlerGet);
router.post('/addBreed', handlerPost);
router.post('/addCat', handlerPost);
//router.post('/edit', edit);



http.createServer(router.match).listen(port);