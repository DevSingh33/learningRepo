const fs = require('fs');
fs.readdir('./',function (errors,results) {
   if (errors) console.log('errors:', errors);
   else console.log('results:', results);
});
fs.writeFileSync('afile.dart','data inside the file');