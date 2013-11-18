Meteor.Router.add({
    '/': 'postList',

	'/posts/:_id': {
		to: 'postPage',
		and: function(id) {Session.set('currentPostId', id); }
	}
});

