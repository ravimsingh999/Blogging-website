const mongoose=require('mongoose');

const Post=require('./database/models/Post');

mongoose.connect('mongodb://localhost/node-js-test-blog',{useNewUrlParser: true, useUnifiedTopology: true});

// Post.findById("5f6b5232ecc5e335a0e2b593",(err,data)=>{
//     console.log(err,data);
// })

// Post.find({
//     title: 'MY SECOND BLOG POST'
// },(error,data)=>{
//     console.log(error,data);
// });

Post.findByIdAndUpdate('5f6b5232ecc5e335a0e2b593',{
    title: 'this is updated one'
},(error,data)=>{
    console.log(error,data);
})


// Post.create({
//     title: 'MY SECOND BLOG POST',
//     description: 'second description',
//     content: 'this is second content',
// },(error,post)=>{
//     console.log(error,post)
// })
// login.create({
//     username:'ravi',
//     password:'ravi1234',
// },(error,post)=>{
//     console.log(error,post)
// })