const router = require('express').Router();
const { getBreedsData, createBreed } = require('../services/processing');
const formidable = require("formidable");
const fs = require('fs');


router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.post('/add-breed', async (req, res) => {
    const { breed } = req.body;
    try {
        await createBreed(breed);
    } catch (err) {
        console.log(err);
    }

    res.redirect('/');
})


router.get('/add-cat', (req, res) => {
    const breeds = getBreedsData().map(x => { return { 'breed': x } });
    res.render('addCat', { breeds });
});

router.post('/add-cat', (req, res) => {
    const form = formidable({});
    form.parse(req, (err, fields, files) => {
        if (err !== null) {
            //handle error
        }

        //TODO.......
        console.log(files);
        console.log(files.upload);
        const pictureName = files.upload.newFilename;
        const oldPath = files.upload.filepath;
        const newPath = 'D:/Js/GitHub/SoftUni/JS Back-End/Intro to Node.js/Cat Shelter with Expres.js/static/images/' + pictureName;
        console.log(oldPath);
        console.log(newPath);
        console.log(pictureName);
        

        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                console.log(err);
                return
              //handle error
            }
            console.log('File saved successfully');
          });

        //const saveImages = fs.writeFile('/static/images/' + picturName);
        //saveImages.write(files);

    })

})

module.exports = router;