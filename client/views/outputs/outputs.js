Template.output.helpers({
	title: function() {
		return "t'output"
	},
	output_elements: function() {
		return Outputs.find();
	}
});