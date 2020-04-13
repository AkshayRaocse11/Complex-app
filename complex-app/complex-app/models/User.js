const validator = require("validator")
let User = function(data){
    this.data = data
    this.errors =[]
    
    }
    
    User.prototype.validate = function(){
    if(this.data.username ==""){
    this.errors.push("You must provide a UserName ")
    
    }
    if(!validator.isEmail(this.data.email=="")){
        this.errors.push("You must provide a email ")
        
        }
    
        if(this.data.password ==""){
            this.errors.push("You must provide a Password ")
            
            }
            
    if(this.data.password.length >0 && this.data.password.length<12){
        this.errors.push("Password must be 12 characters")
    }
    if(this.data.password.length>100){
        this.errors.push("Password cannot exceeds 100 characters")
    
    
    }
    
    if(this.data.username.length >0 && this.data.password.length<3){
        this.errors.push("Username atleast must be 3 characters")
    }
    if(this.data.username.length>30){
        this.errors.push("username cannot exceeds 100 characters")
    
    
    }
    
    
    }
    
    
    User.prototype.register = function(){
       // step#1:   Validate User data 
       this.validate()
    
       //step 2 :Only if there are no validation errors
    
       //then save the user data into a database
    
    }
    
    module.exports = User