exports.Index = function(req, res){
	res.title = 'Hey Andie.';
	res.render('index',res);
}

exports.Mock = function(req, res){
	res.render('mockup',res);
}