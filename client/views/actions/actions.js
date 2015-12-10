Template.actions.helpers({

});

Template.actions.events({
	'submit form.place-input': function(e, template){
		e.preventDefault();
		var user_place = template.$('input[name=place]').val();
		Session.set("user_place", user_place);
	}
});