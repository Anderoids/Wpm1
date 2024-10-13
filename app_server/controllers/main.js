module.exports.index=function(req,res){
    res.render('index', { title: 'Index' });
    };
    module.exports.signin=function(req,res){
    res.render('signin', { title: 'Sign in' });
    };
    module.exports.review=function(req,res){
    res.render('review', { title: 'Review' });
    };