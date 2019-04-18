//var mongoose = require("./mongooseconnection").db;
var mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/application", {useNewUrlParser: true});
// var db = mongoose.connection;

// db.on("error", (err)=>{
//     console.log(err);
// });

var schema = new mongoose.Schema({
    username: String,
    password: String
});

var usermodel= mongoose.model('Users',schema);

module.exports.usermodel = usermodel;