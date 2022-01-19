function () { //document ready

	
	const result = {
		light: [
			{
				title: 'Maker Pizza',
				price: '$$'
			},
			{
				title: 'Pizza Libretto',
				price: '$$'
			},
			{
				title: 'Dominoes',
				price: '$'
			}
		],
		dark: [
			{
				title: 'Pizzaiolo',
				price: '$$'
			},
			{
				title: 'North of Brooklyn',
				price: '$$'
			},
			{
				title: 'Pizza Pizza',
				price: '$'
			},
			{
				title: 'King Slice',
				price: '$'
			}
		]
	};

	// Random Result Function to randomize the results
	const randomResult = arr => {
		const randomNumber = Math.floor(Math.random() * arr.length);
		return arr[randomNumber];
	};

	//Adding an Event Listener for when the form is submitted
	$('form').on('submit', function (event) {
		event.preventDefault();
		//These cannot be cached, because they may change due to the advanced selector of :checked
		// const userTempSelection = $("input[name=temp]:checked").val();
		// const userBrightnessSelection = $('input[name=brightness]:checked').val();

		//Selecting the specific array inside of the Pizza Data Object that reflects user choice of size
		const tempOptions = result[userTempSelection];

		//Filtering the options in that size for the user choice of price
		const filteredOptions = tempOptions.filter((restaurant) => {
			return (restaurant.price === userPriceSelection);
		});

		//Randomly selection of one of the options that match users choices
		const theOne = randomResult(filteredOptions);

		//Adding the result to the page
		const finalHTML = `<h2>You should go to <span class="restaurant">${theOne.title}</span></h2>`;
		$('.results').html(finalHTML);
	});
	
});