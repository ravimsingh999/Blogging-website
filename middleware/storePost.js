const validation=(req,res,next)=>{
    if(!req.files||!req.body.username||!req.body.title||!req.body.subtitle||!req.body.content)
    {
        res.redirect('/posts/new');
    }
    else
    next();
}

module.exports=validation;