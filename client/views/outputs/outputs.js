Template.output.helpers({
	title: function() {
		return "t'output"
	},
	outputs: function() {
		return Outputs.find();
	}
});