const mongoose = require('mongoose');


const URI = 'mongodb://localhost/lider_db'
mongoose.connect(URI)
.then(db => console.log('DataBase is connected'))
.catch(err => console.error(err));

module.exports = mongoose;