$('.btn__menu, .nav__link').on('click', function () {
	window.innerWidth <= 1200 ? $('.btn__menu, .nav, body').toggleClass('is_active') : false;
})

$(document).ready(function () {
	// Укажите дату и время окончания
	var countdownDate = new Date("2025-01-01T00:00:00").getTime();

	function updateCountdown() {
		var now = new Date().getTime();
		var distance = countdownDate - now;

		if (distance <= 0) {
			// Остановить таймер, если время истекло
			clearInterval(timer);
			$("#countdown").html("<span>Конкурс Начался!</span>");
			return;
		}

		// Вычисляем дни, часы, минуты и секунды
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Обновляем значения на странице
		$("#days").text(days.toString().padStart(2, "0"));
		$("#hours").text(hours.toString().padStart(2, "0"));
		$("#minutes").text(minutes.toString().padStart(2, "0"));
		$("#seconds").text(seconds.toString().padStart(2, "0"));
	}

	// Запускаем таймер с обновлением каждую секунду
	var timer = setInterval(updateCountdown, 1000);
	updateCountdown(); // Запускаем сразу, чтобы не ждать первую секунду
});


$('.ddown-btn').on('click', function () {
	if ($(this).hasClass('is_active')) {
		$(this).removeClass('is_active')
		$(this).next().slideUp(250);
	} else {
		$(this).addClass('is_active').next().slideDown(250);
		$('.ddown-btn').not(this).removeClass('is_active')
		$('.ddown-content').not($(this).next()).slideUp(250);
	}
})


$('#inpCard').inputmask({ "mask": "9999-9999-9999-9999" });
$('#inpDate').inputmask({ "mask": "99/99" });
$('#inpCvv').inputmask({ "mask": "999" });
$('input[type="tel"]').inputmask({ "mask": "+7-999-999-99-99" });
$('input[type="tel"]').on('click', function () {
	$(this).setCursorPosition(4);
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