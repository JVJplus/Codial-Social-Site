module.exports.home = function (req, res) {
        return res.render('home', {
                title: 'Codial',
                layout: 'blank_layout'
        });  
}
