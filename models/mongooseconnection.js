var mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1/application", {useNewurlParser: true});
var db = mongoose.connection;

db.on("error", (err)=>{
    console.log(err);
});

module.exports.db= db;