

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection error'));
db.once('open', function(){
    console.log("COnnected to DB");
});

// Models:

require("./Category");
require("./Recipe")