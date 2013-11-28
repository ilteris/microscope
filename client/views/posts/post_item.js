Template.postItem.helpers({ 
	domain: function() {
	var a = document.createElement('a'); 
	a.href = this.url;
	return a.hostname;
	//return an anonymous function for domain helper that returns the url form post object
	}  
});
