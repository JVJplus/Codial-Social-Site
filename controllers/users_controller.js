const User=require('../models/user');
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

module.exports.create = function(req,res){
        // if password and confirm password not matched
        if(req.body.password !=req.body.confirm_password){
                console.log('Password Not Matched! Retry');
                return res.redirect('back');
        }

        //check if user already exists
        User.findOne({email: req.body.email},(err,user)=>{
                //error in finding by email
                if(err){
                        console.log('Error in finding email');
                        return;
                }
                
                // if user already exists
                if(user){
                        console.log('User Already Exists');
                        return res.redirect('back');
                }else{
                        // Create new record

                        User.create(req.body,(err,user)=>{
                                if(err)
                                        return console.log('error in creating account in database');
                                console.log('User Created');
                        });

                        return res.redirect('/users/sign-in');
                }
        });
};

module.exports.createSession =(req,res)=>{
        //find the user
        User.findOne({email:req.body.email},(err,user)=>{
                if(err){
                        console.log("Error in finding user");
                        return;                        
                }

                //handle user not found
                if(!user){
                        console.log('User not found');
                        return res.redirect('back');
                }else{
                        //handle user password which doesn't matches
                        if(user.password != req.body.password){
                                console.log('Password doesnt matches');
                                return res.redirect('back');                               
                        }
                        else{
                                //everything fine
                                //handle session creation
                                res.cookie('user_id',user.id);
                                console.log("signned in successfully");
                                
                                return res.redirect('/users/profile');
                        }
                }
        });
};
