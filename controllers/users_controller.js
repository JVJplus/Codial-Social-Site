module.exports.home = function(req,res){
        res.end('<h1>User Home</h1>');
};
module.exports.profile = function(req,res){
        res.end('<h1>User Profile</h1>');
};

module.exports.signIn = (req,res)=>{
        res.render('users_sign_in', {
                title: "Sign In",
                layout: 'blank_layout'
        })
};

module.exports.signUp = (req,res)=>{
        res.render('users_sign_up', {
                title: "Sign Up",
                layout: 'blank_layout'
        })
};