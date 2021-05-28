import $ from 'jquery';

$(function () {
	const width = $('body').width();
	if (width < 768) {
		$('#mini').on('click', function (e) {
			e.preventDefault();
			$('#mini-toggle').slideToggle('slow');
		});
		$('#studio').on('click', function (e) {
			e.preventDefault();
			$('#studio-toggle').slideToggle('slow');
		});
		$('#balcony').on('click', function (e) {
			e.preventDefault();
			$('#balcony-toggle').slideToggle('slow');
		});
		$('#firepit').on('click', function (e) {
			e.preventDefault();
			$('#firepit-toggle').slideToggle('slow');
		});
		$('#firepit-balcony').on('click', function (e) {
			e.preventDefault();
			$('#firepit-balcony-toggle').slideToggle('');
		});
	} else {
		$(
			'#mini-toggle, #studio-toggle, #balcony-toggle, #firepit-toggle, #firepit-balcony-toggle'
		).removeAttr('style');
	}

	const navBtn = $('.checkbox-toggle');
	navBtn.on('click', function (e) {
		$('body').toggleClass('overflow-hidden');
	});

	const pageNoHero = $('#page-no-hero');
	if (pageNoHero.length) {
		const navbar = $('#top-navbar');
		navbar.addClass('add-bg');
	} 
});
