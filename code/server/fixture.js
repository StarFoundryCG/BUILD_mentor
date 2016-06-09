if (Sites.find().count() === 0) {
	Sites.insert({
		name: 'Bahia',
		need: 1,
		days: 'T/TH',
		time: '4pm-6pm'
	});

	Sites.insert({
		name: 'Emerson Berkeley',
		need: 2,
		days: 'T/TH',
		time: '1:45pm-3:45pm'
	});

	Sites.insert({
		name: 'Malcolm X',
		need: 5,
		days: 'T/TH',
		time: '3:15pm-5:00pm',
	});
}