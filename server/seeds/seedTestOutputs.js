Meteor.startup(function () {
	if (Outputs.find().count() === 0) {

		var test_outputs = [

			{
				text: "Something happened, y'know.",
				place: 1,
				who: null,
				type: "event",
				time: new Date()
			},
			{
				text: "What's going on I say",
				place: 1,
				who: 'John',
				type: "speech",
				time: new Date()
			},
			{
				text: "Something happened, in place 2",
				place: 2,
				who: null,
				type: "event",
				time: new Date()
			}
		];

		test_outputs.forEach(function(t_output) {
			Outputs.insert(t_output);
		});


	}
});