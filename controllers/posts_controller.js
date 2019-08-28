module.exports.home = function (req, res) {
        // return res.end("<h1>Write Post Here</h1>");       
        return res.render('posts',{
                title:"Posts",
                layout: 'layout'
        });
}

module.exports.jvjplus = function (req, res) {
        return res.end("<h1>Showing Posts By JVJPlus</h1>");       
}