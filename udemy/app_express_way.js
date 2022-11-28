//express js way

const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes =require('./routes/admin');
const shopRoutes =require('./routes/shop');
const { dirname } = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//.static By default, files in a node server are not available to the public through the browser (for security). For files we do want the browser to access ( CSS for styling pages for example) then we use express.static() to make it so
app.use(express.static(path.join(__dirname,'public'))) ;//this middleware will serve the path(passsed into it) to pages (typically the styling of our pages)

//using router object for all incoming requests
app.use(adminRoutes);

//if the url start form '/admin' then only will it go inside the 'adminRoutes' middleware
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not Found! </h1>');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(5000);