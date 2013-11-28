Meteor.publish('posts', function() { 
	console.log(Posts.find());
    return Posts.find();
});
