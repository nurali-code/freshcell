$('.btn__menu, .nav__link').on('click', function () {
	window.innerWidth <= 1200 ? $('.btn__menu, .nav, body').toggleClass('is_active') : false;
})

$('.ddown-btn').on('click', function () {
	$(this).toggleClass('is_active').next().slideToggle(250);
	if ($(this).closest('.ddown').hasClass('is_active')) {
		$(this).removeClass('is_active');
		setTimeout(() => { $(this).closest('.ddown').removeClass('is_active'); }, 250);
	}
})

let tableLiders = new DataTable('#tableLiders', {
	searching: false,
	ordering: false,
	pageLength: 20,
	layout: {
		topStart: null,
		bottomStart: null
	},
	entries: false
});
let tableWinners = new DataTable('#tableWinners', {
	searching: false,
	ordering: false,
	pageLength: 5,
	layout: {
		topStart: null,
		bottomStart: null
	},
	entries: false
});

$('[data-tab-btn]').on('click', function () {
	var ItemName = $(this).data('tab-btn')
	$('[data-tab-btn], [data-tab]').removeClass('is_active')
	$(this).addClass('is_active')
	$('[data-tab="' + ItemName + '"]').addClass('is_active');
	// $(this).hide()
});


setTimeout(() => { $('.cookies').addClass('is_active') }, 2500);
$('.cookies .btn').on('click', function () {
	$('.cookies').removeClass('is_active')
})

$(window).scroll(function () {
	if ($(this).scrollTop() > 300) { $('.sroll_up').fadeIn(); }
	else { $('.sroll_up').fadeOut(); }
});