const mongoose=require('mongoose');


const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
})

// const loginSchema=new mongoose.Schema({
//     username:String,
//     password:String
// })

const Post=mongoose.model('Post',PostSchema);
// const login=mongoose.model('login',loginSchema);

module.exports=Post;