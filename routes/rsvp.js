var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};


exports.addRSVP = function(request, response){
	var rsvpEmail = request.body.rsvpEmail;
	//Print to terminal whenever post req made
	console.log(rsvpEmail);

	//Add to current data
	data.rsvp.push(rsvpEmail);

	//Send back data for browser to know it works
	response.send(rsvpEmail);
}