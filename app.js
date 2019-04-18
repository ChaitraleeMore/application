var express = require ("express");
var app = express();
var bodyparser = require("body-parser");
var usermodel = require("./models/users").usermodel;

app.use(bodyparser.urlencoded( {extended:true}));

app.set("view engine", "ejs");
app.get("/login", function(req,res){
    res.render("login");
});
process.on("uncaughtException",(err)=>{
    console.log("uncaught exception exited with code 1 ");
    process.exit(1);
})


app.post("/login",(req,res)=>{
    var requestParams = req.body;
    console.log("requessst parameters" +requestParams.username);

        usermodel.find({username:requestParams.username},function(err,res){
            console.log("inside usermodel find");
        if(err){
            console.log(err);
        }else{
            checkUserNameExists(requestParams)
            .then(passwordValidation(data)
            .then(checkPasswordContainsNumber(res)
            .then((valid) =>{
                     if(valid){
                         res.send("success");
                     }else{
                        res.send("try one more time");
                     }
                    })));
             }
});
});

function checkPasswordContainsNumber(password){
    return new Promise(function(fulfill, reject){
        var n = password[0];
    if(isNaN(n)){
    reject (false);
    }else{
    fulfill(true);
    }
});}

function passwordValidation (password){
    return new Promise(function(fulfill, reject){
    if(password.length>=8){
        fulfill( password);
}
//console.error("password length should be minimum 8");
});
}

function checkUserNameExists(data){
  return new Promise(function(fulfill, reject){
    if(data){
      fulfill(data.password);
    }
   // reject (throw new Error ("name is empty"));
});
}


app.get("/", function(req,res){
    res.send("Hello ");
});


app.listen(9000);
