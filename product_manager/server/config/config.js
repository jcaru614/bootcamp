const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
// if you want to wipe out a DB change /myapp ^^^ the old data will still be around
// you will just have a new collection
