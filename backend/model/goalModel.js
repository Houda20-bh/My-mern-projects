const mongoose= require('mongoose');
const goalSchema= mongoose.Schema(
    {
        user:{
              type:mongoose.Schema.ObjectId,
              required:true,
              ref:'User'
        },
        text:{
            type:String,
            required:[true, 'Please add a tex value']
        },
    },
    {
        timestamps:true,
    })
    module.exports= mongoose.model('Goal',goalSchema);