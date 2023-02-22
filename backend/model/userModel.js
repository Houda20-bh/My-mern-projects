const mongoose= require('mongoose');
const userSchema= mongoose.Schema({

name:{
    type:String,
    require:[true,'Please enter a name']
},
email:{
    type:String,
    require:[true,'Please enter an email'],
    unique: true
},
password:{
    type:String,
    require:[true,'Please enter a password']
},

},
{
    timestamps:true,
}
);

module.exports= mongoose.model('User',userSchema);