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

$('[data-tab-btn]').on('click', function () {
	var ItemName = $(this).data('tab-btn')
	$('[data-tab-btn], [data-tab]').removeClass('is_active')
	$(this).addClass('is_active')
	$('[data-tab="' + ItemName + '"]').addClass('is_active');
	// $(this).hide()
});
