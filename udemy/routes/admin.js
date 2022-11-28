const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

//replace app.get /app.use with router.use/ router.get
//'app.use' handles all http methods (like get,post)
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;