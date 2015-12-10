Template.output.helpers({
	title: function() {
		return "t'output"
	},
	outputs: function() {
		return Outputs.find({place: parseInt(Session.get("user_place"))});
	},

	user_place: function() {
		return Session.get("user_place");
	}
});