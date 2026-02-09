(function ($) {
	"use strict";

	// Preloader 
	jQuery(window).on('load', function () {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});

	/*----------------------------
	 2. Mobile Menu Activation
	-----------------------------*/
	jQuery('.mobile-menu nav').meanmenu({
		meanScreenWidth: "768",
	});


	/*--------------------------
	 3. Sticky Menu 
	---------------------------- */
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 750) {
			$('#sticky').addClass('sticky');
		} else {
			$('#sticky').removeClass('sticky');
		}
	});


	//Single page scroll js for main menu
	$(document).on('click', '.menu_scroll ul li a', function (e) {
		var href = $(this).attr('href');

		// Handle both "0" and "#0" formats
		var sectionId = href;
		if (href.indexOf('#') === 0) {
			sectionId = href.substring(1);
		}

		var target = $('[section-scroll=' + sectionId + ']');

		if (target.length) {
			$('.menu_scroll ul li').removeClass('active');
			$(this).parent().addClass('active');

			// If it's the mobile menu, close it after clicking
			if ($(this).closest('.mean-nav').length) {
				$('.meanmenu-reveal').trigger('click');
			}

			e.preventDefault();
			var targetHeight = target.offset().top - 70; // Adjust for sticky header
			$('html, body').animate({
				scrollTop: targetHeight
			}, 1000);
		}
	});

	$(window).scroll(function () {
		var windscroll = $(window).scrollTop();
		var target = $('.menu_scroll ul li');
		if (windscroll >= 0) {
			$('[section-scroll]').each(function (i) {
				if ($(this).position().top <= windscroll + 95) {
					target.removeClass('active');
					// Highlight both desktop and mobile items if they exist
					target.filter(':nth-child(' + (i + 1) + ')').each(function () {
						$(this).addClass('active');
					});
				}
			});
		} else {
			target.removeClass('active');
			$('.menu_scroll ul li:first-child').addClass('active');
		}

	});


	/*----------------------------
	4. wow js active
	------------------------------ */
	new WOW().init();

	/*----------------------------
	5. owl active
	------------------------------ */

	//testimonial Slider
	$(".testimonial").owlCarousel({
		autoPlay: true,
		slideSpeed: 2000,
		pagination: false,
		navigation: false,
		items: 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [992, 1],
		itemsTablet: [768, 1],
		itemsMobile: [480, 1],
	});

	//Register Slider
	$(".reg-slider").owlCarousel({
		autoPlay: true,
		slideSpeed: 2000,
		pagination: true,
		navigation: false,
		items: 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [992, 3],
		itemsTablet: [768, 2],
		itemsMobile: [480, 1],
	});

	//Gallery Slider
	$(".gallery-slider").owlCarousel({
		autoPlay: true,
		slideSpeed: 2000,
		pagination: true,
		navigation: false,
		items: 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [992, 3],
		itemsTablet: [768, 2],
		itemsMobile: [480, 1],
	});

	/*--------------------------
	6. jarallax active
	---------------------------- */
	$('.jarallax').jarallax({
		speed: 0.5
	});

	/*----------------------------
	7. magnific Popup active
	------------------------------ */
	$('.gallery-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}
	});

	// Attire Gallery Popup - Using document-level delegation for maximum reliability
	$(document).magnificPopup({
		delegate: '.popup-image',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function (element) {
				return element.find('div:first-child'); // Zoom from the card image div
			}
		}
	});

	/*--------------------------
	8. bxslider active
	---------------------------- */
	//Home slider     
	/*
	$('.slider_home').bxSlider({
		mode: 'fade',
		speed: 3000,
		auto: true
	});
	*/
	/*--------------------------
	 9. counterdown
	---------------------------- */
	function e() {
		var futureFormattedDate = '06/07/2026 12:00:00';
		return futureFormattedDate;
	}

	$('.counter-list').downCount({
		date: e(),
		offset: 16
	});

	/*--------------------------
	10. masonry active
	---------------------------- */
	$('#blog').masonry({
		itemSelector: '.bitem'
	});

	/*--------------------------
	11. scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fas fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	// Contact Form Submition
	function checkRequire(formId, targetResp) {
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
		target.find('input , textarea , select').each(function () {
			if ($(this).hasClass('require')) {
				if ($(this).val().trim() == '') {
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				} else {
					$(this).removeClass('error');
				}
			}
			if ($(this).val().trim() != '') {
				var valid = $(this).attr('data-valid');
				if (typeof valid != 'undefined') {
					if (!eval(valid).test($(this).val().trim())) {
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					} else {
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function () {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm, errroTarget);
		if (check == 0) {
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type', _this.attr('form-type'));
			if (_this.attr('form-type') === 'inquiry') {
				var rsvpData = {
					fullName: targetForm.find('input[name="full_name"]').val(),
					email: targetForm.find('input[name="email"]').val(),
					guest: targetForm.find('select[name="guest_no"]').val(),
					event: targetForm.find('select[name="event_name"]').val(),
					attendance: 'Yes'
				};

				var originalBtnText = _this.text();
				_this.text('Sending...');
				_this.prop('disabled', true);

				$.ajax({
					url: 'https://script.google.com/macros/s/AKfycbyIXl0cUpIW1thOYklDTUaERHFeajr1ptgka4yqG_ekBoFx08TuRElgtDbWdqbRcUQaNA/exec',
					method: 'POST',
					crossDomain: true,
					data: JSON.stringify(rsvpData),
					contentType: 'text/plain;charset=utf-8',
					success: function (response) {
						var res = typeof response === 'string' ? JSON.parse(response) : response;
						if (res && res.success) {
							targetForm.find('input').val('');
							targetForm.find('textarea').val('');
							errroTarget.html('');
							console.log('Showing modal via JS...');
							$('#rsvp-modal').css({
								'display': 'flex',
								'opacity': '1',
								'z-index': '2147483647'
							}).addClass('show');
						} else {
							errroTarget.html('<p style="color:red;">Submission failed. Please try again.</p>');
						}
					},
					error: function (xhr, status, error) {
						console.error('RSVP Submission Error:', { status: status, error: error, response: xhr.responseText });
						errroTarget.html('<p style="color:red;">Error submitting RSVP. Please check your connection.</p>');
					},
					complete: function () {
						_this.text(originalBtnText);
						_this.prop('disabled', false);
					}
				});

			} else if (_this.attr('form-type') === 'contact') {
				// Contact form - send to Google Sheets
				var contactData = {
					fullName: targetForm.find('input[name="full_name"]').val(),
					email: targetForm.find('input[name="email"]').val(),
					phone: targetForm.find('input[name="contact_no"]').val(),
					message: targetForm.find('textarea[name="message"]').val()
				};

				var originalBtnText = _this.text();
				_this.text('Sending...');
				_this.prop('disabled', true);

				$.ajax({
					url: 'https://script.google.com/macros/s/AKfycbx34-rA4lxgnSfrxJg5H5u99TfYcTqxgU7cgXMspWuJymvGS3W8mDVP9M1lhTKZohQjfg/exec',
					method: 'POST',
					crossDomain: true,
					data: JSON.stringify(contactData),
					contentType: 'text/plain;charset=utf-8',
					success: function (response) {
						var res = typeof response === 'string' ? JSON.parse(response) : response;
						if (res && res.success) {
							targetForm.find('input').val('');
							targetForm.find('textarea').val('');
							errroTarget.html('<p style="color:green;">Thank you! Your message has been sent successfully.</p>');
						} else {
							errroTarget.html('<p style="color:red;">Submission failed. Please try again.</p>');
						}
					},
					error: function (xhr, status, error) {
						console.error('Contact Form Error:', { status: status, error: error, response: xhr.responseText });
						errroTarget.html('<p style="color:red;">Error sending message. Please try again.</p>');
					},
					complete: function () {
						_this.text(originalBtnText);
						_this.prop('disabled', false);
					}
				});
			} else {
				// Fallback to PHP for other form types
				$.ajax({
					method: 'post',
					url: 'ajax.php',
					data: formDetail,
					cache: false,
					contentType: false,
					processData: false
				}).done(function (resp) {
					if (resp == 1) {
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					} else {
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		}
	});


	// Close Modal Logic
	$('.close-modal-btn, .close-x').on('click', function () {
		$('#rsvp-modal').removeClass('show').css('display', 'none');
	});

	// Close on click outside
	$(window).on('click', function (event) {
		if ($(event.target).is('#rsvp-modal')) {
			$('#rsvp-modal').removeClass('show').css('display', 'none');
		}
	});

	/*-------------------------------------
		24. Travel & Stay Redesign Interaction
	---------------------------------------*/
	// Tab Switching Logic
	$('.tab-btn').on('click', function () {
		const targetTab = $(this).data('tab');

		// Update buttons
		$('.tab-btn').removeClass('active');
		$(this).addClass('active');

		// Update content panes
		$('.tab-content-pane').removeClass('active');
		$('#' + targetTab).addClass('active');
	});

	// Contextual FAQ Accordion
	$('.faq-toggle').on('click', function () {
		const answerPane = $(this).next('.faq-answer-pane');
		const icon = $(this).find('.fa-chevron-down');

		// Toggle current
		answerPane.slideToggle(300);

		// Rotate icon
		if (icon.hasClass('rotated')) {
			icon.css('transform', 'rotate(0deg)').removeClass('rotated');
		} else {
			icon.css('transform', 'rotate(180deg)').addClass('rotated');
		}
	});

	// Smooth Scroll for Travel Sub-nav
	$('.travel-sub-nav a').on('click', function (e) {
		if (this.hash !== "") {
			e.preventDefault();
			const hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 150 // Offset for sticky headers
			}, 800);
		}
	});

	/*-------------------------------------
		25. RSVP Experience Interaction
	---------------------------------------*/

	// Add Guest Trigger
	$('#add-guest-btn').on('click', function () {
		$('#guest-2-container').slideDown(300);
		$(this).parent().fadeOut(200);
	});

	// Selection Card Toggle (Radio/Checkbox)
	$('.selection-card').on('click', function () {
		const $card = $(this);
		const $input = $card.find('input');
		const type = $input.attr('type');
		const $grid = $card.closest('.selection-grid');

		if (type === 'radio') {
			$grid.find('.selection-card').removeClass('active');
			$card.addClass('active');
			$input.prop('checked', true).trigger('change');
		} else {
			$card.toggleClass('active');
			$input.prop('checked', $card.hasClass('active')).trigger('change');
		}

		// Auto-scroll logic for binary/main choices
		if ($card.hasClass('attendance-card') || $card.hasClass('transport-card') || $card.hasClass('diet-card')) {
			const $nextSection = $card.closest('.rsvp-section').nextAll('.rsvp-section:visible').first();
			if ($nextSection.length) {
				setTimeout(() => {
					$('html, body').animate({
						scrollTop: $nextSection.offset().top - 100
					}, 600);
				}, 300);
			}
		}
	});

	// Conditional Logic: Attendance
	$('input[name="attendance"]').on('change', function () {
		if ($(this).val() === 'accept') {
			$('#accept-details').slideDown(400);
		} else {
			$('#accept-details').slideUp(400);
		}
	});

	// Conditional Logic: Bus Transport
	$('input[name="transport"]').on('change', function () {
		if ($(this).val() === 'yes') {
			$('#hotel-info').slideDown(300);
		} else {
			$('#hotel-info').slideUp(300);
		}
	});

	// RSVP Form Submission
	$('#rsvp-submit-btn').on('click', function () {
		const _this = $(this);
		const targetForm = $('#rsvp-experience-form');
		const errroTarget = targetForm.find('.response');

		// Use project's checkRequire helper
		var check = checkRequire(targetForm, errroTarget);

		// Extra check for attendance radio (since checkRequire might miss it)
		if (check == 0 && !targetForm.find('input[name="attendance"]:checked').length) {
			errroTarget.html('Please let us know if you can attend.');
			check = 1;
		}

		if (check == 0) {
			const originalBtnText = _this.text();
			_this.text('Sending...');
			_this.prop('disabled', true);

			// Gather all data
			const events = [];
			targetForm.find('input[name="events[]"]:checked').each(function () {
				events.push($(this).val());
			});

			const rsvpData = {
				fullName: targetForm.find('input[name="guest_1_name"]').val(),
				guest2: targetForm.find('input[name="guest_2_name"]').val(),
				attendance: targetForm.find('input[name="attendance"]:checked').val(),
				event: events.join(', '),
				dietary: targetForm.find('input[name="diet"]:checked').val(),
				dietDetails: targetForm.find('textarea[name="diet_details"]').val(),
				transport: targetForm.find('input[name="transport"]:checked').val(),
				hotel: targetForm.find('input[name="hotel_name"]').val(),
				song: targetForm.find('input[name="song_request"]').val(),
				email: targetForm.find('input[name="email"]').val(),
				phone: targetForm.find('input[name="phone"]').val(),
				notes: targetForm.find('textarea[name="notes"]').val()
			};

			$.ajax({
				url: 'https://script.google.com/macros/s/AKfycbyIXl0cUpIW1thOYklDTUaERHFeajr1ptgka4yqG_ekBoFx08TuRElgtDbWdqbRcUQaNA/exec',
				method: 'POST',
				crossDomain: true,
				data: JSON.stringify(rsvpData),
				contentType: 'text/plain;charset=utf-8',
				success: function (response) {
					var res = typeof response === 'string' ? JSON.parse(response) : response;
					if (res && res.success) {
						targetForm.fadeOut(400, function () {
							$('#rsvp-confirmation').fadeIn(400);
							$('html, body').animate({
								scrollTop: $('.rsvp-experience').offset().top - 50
							}, 500);
						});
					} else {
						errroTarget.html('<p style="color:red; margin-top:10px;">Submission failed. Please try again.</p>');
					}
				},
				error: function (xhr, status, error) {
					console.error('RSVP Submission Error:', { status: status, error: error, response: xhr.responseText });
					errroTarget.html('<p style="color:red; margin-top:10px;">Error submitting. Please check your connection.</p>');
				},
				complete: function () {
					_this.text(originalBtnText);
					_this.prop('disabled', false);
				}
			});
		}
	});

})(jQuery); 