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
	if (jQuery('.mobile-menu nav').meanmenu) {
		jQuery('.mobile-menu nav').meanmenu({
			meanScreenWidth: "768",
		});
	}


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


	//Single page scroll js for main menu and FAQ links
	$(document).on('click', '.menu_scroll ul li a, .faq-link', function (e) {
		var href = $(this).attr('href');

		// Handle both "0" and "#0" formats
		var sectionId = href;
		if (href.indexOf('#') === 0) {
			sectionId = href.substring(1);
		}

		var target = $('[section-scroll=' + sectionId + ']');
		if (!target.length && href.indexOf('#') === 0) {
			target = $(href);
		}

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
	if (typeof WOW === 'function') {
		new WOW().init();
	}

	/*----------------------------
	5. owl active
	------------------------------ */

	//testimonial Slider
	if ($.fn.owlCarousel) {
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
	}

	/*--------------------------
	6. jarallax active
	---------------------------- */
	if ($.fn.jarallax) {
		$('.jarallax').jarallax({
			speed: 0.5
		});
	}

	/*----------------------------
	7. magnific Popup active
	------------------------------ */
	if ($.fn.magnificPopup) {
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
	}

	/*--------------------------
	8. bxslider active
	---------------------------- */
	//Home slider     
	/*
	if ($.fn.bxSlider) {
		$('.slider_home').bxSlider({
			mode: 'fade',
			speed: 3000,
			auto: true
		});
	}
	*/

	/*--------------------------
	 9. counterdown
	---------------------------- */
	function e() {
		var futureFormattedDate = '06/07/2026 17:00:00';
		return futureFormattedDate;
	}

	if ($.fn.downCount) {
		$('.counter-list').downCount({
			date: e(),
			offset: 2
		});
	}

	/*--------------------------
	10. masonry active
	---------------------------- */
	if ($.fn.masonry) {
		$('#blog').masonry({
			itemSelector: '.bitem'
		});
	}

	/*--------------------------
	11. scrollUp
	---------------------------- */
	if ($.scrollUp) {
		$.scrollUp({
			scrollText: '<i class="fas fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});
	}

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
		Event Tab Switching Logic
	---------------------------------------*/
	// Event day switching
	$('.event-link').on('click', function (e) {
		e.preventDefault();
		const target = $(this).data('target');

		// Toggle active link style
		$('.event-link').css('color', '#666');
		$(this).css('color', 'var(--color-terracotta)');

		// Show target content
		$('.event-day-content').hide();
		$('#' + target).fadeIn(500);
	});

	// Attire section toggle (Subtle)
	$('.attire-trigger').on('click', function () {
		$('#attire-content').fadeToggle(500);
	});
	$('.event-tab-link').on('click', function (e) {
		e.preventDefault();
		const targetEvent = $(this).data('event');

		// Update active tab link styling
		$('.event-tab-link').removeClass('active').css('border-bottom', '2px solid transparent');
		$(this).addClass('active').css('border-bottom', '2px solid #8b7355');

		// Toggle panes
		$('.event-detail-pane').hide();
		$('#' + targetEvent + '-details').fadeIn(400);
	});

	// Initialize first tab border
	$('.event-tab-link.active').css('border-bottom', '2px solid #8b7355');

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
		if ($card.hasClass('attendance-card') || $card.hasClass('transport-card') || $card.hasClass('diet-card') || $card.hasClass('diet-friday-card') || $card.hasClass('diet-saturday-card')) {
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

	// RSVP Form Submission -- Delegated Event for Robustness
	$(document).on('click', '#rsvp-submit-btn', function (e) {
		e.preventDefault(); // Prevent default if it's a submit button
		console.log('RSVP Submit Clicked');

		const _this = $(this);
		// Check if checking a form ID string or object
		const formId = 'rsvp-experience-form';
		const targetForm = $('#' + formId);
		const errroTarget = targetForm.find('.response');

		console.log('Target Form:', targetForm.length);
		console.log('Error Target:', errroTarget.length);

		// INLINE VALIDATION (More Robust)
		var check = 0;
		errroTarget.html(''); // Clear previous errors

		// 1. Check Name
		var nameInput = targetForm.find('input[name="guest_1_name"]');
		if (nameInput.val().trim() === '') {
			nameInput.addClass('error');
			errroTarget.html('<span style="color:red">Please enter your name.</span>');
			check = 1;
		} else {
			nameInput.removeClass('error');
		}

		// 2. Check Attendance (only if name is ok, or check both)
		if (check === 0) {
			if (!targetForm.find('input[name="attendance"]:checked').length) {
				errroTarget.html('<span style="color:red">Please let us know if you can attend.</span>');
				check = 1;
			}
		}

		// 3. Check Email (if it exists and is required)
		// Current form doesn't have email visible, but if it did:
		var emailInput = targetForm.find('input[name="email"]');
		if (emailInput.length && emailInput.hasClass('require') && emailInput.val().trim() !== '') {
			var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			if (!emailRegex.test(emailInput.val())) {
				emailInput.addClass('error');
				errroTarget.html('<span style="color:red">Please enter a valid email.</span>');
				check = 1;
			} else {
				emailInput.removeClass('error');
			}
		}

		console.log('Validation Check Result:', check);

		if (check == 0) {
			const originalBtnText = _this.text();
			_this.text('Sending...');
			_this.prop('disabled', true);

			// Gather all data
			var selectedEvents = [];
			targetForm.find('input[name="event_attendance"]:checked').each(function () {
				selectedEvents.push($(this).val());
			});

			// Robust value retrieval
			function getVal(name) {
				var $el = targetForm.find('[name="' + name + '"]');
				if ($el.length && ($el.is('select') || $el.attr('type') === 'text' || $el.attr('type') === 'email' || $el.is('textarea'))) {
					return $el.val();
				}
				// Handle hidden/missing inputs gracefully
				if (!$el.length) return '';

				return targetForm.find('[name="' + name + '"]:checked').val();
			}

			// Gather all dietary restrictions
			var selectedDiet = [];
			targetForm.find('input[name="diet_details"]:checked').each(function () {
				selectedDiet.push($(this).val());
			});
			var dietDetailsStr = selectedDiet.join(', ');
			if ($('#diet_other').is(':checked') && getVal('diet_details_other')) {
				dietDetailsStr += ' (Other: ' + getVal('diet_details_other') + ')';
			}

			const rsvpData = {
				fullName: getVal('guest_1_name'),
				email: getVal('email'),
				phone: getVal('phone'),
				attendance: getVal('attendance'),
				plus_one: getVal('plus_one'),
				guest2: getVal('guest_2_name'),
				hotel: getVal('hotel_name'),
				shuttle: getVal('shuttle'),
				transport: getVal('shuttle'), // Alias for user's script
				song: getVal('song'),
				notes: getVal('notes'),
				fridayDinner: getVal('dietary_friday') === 'Other' ? ('Other: ' + getVal('dietary_friday_other')) : getVal('dietary_friday'),
				saturdayDinner: getVal('dietary_saturday') === 'Other' ? ('Other: ' + getVal('diet_details_extra')) : getVal('dietary_saturday'),
				plusOneFriday: getVal('plus_one_diet_friday') === 'Other' ? ('Other: ' + getVal('plus_one_diet_friday_other')) : getVal('plus_one_diet_friday'),
				plusOneSaturday: getVal('plus_one_diet_saturday') === 'Other' ? ('Other: ' + getVal('plus_one_diet_saturday_other')) : getVal('plus_one_diet_saturday'),
				dietDetails: dietDetailsStr,
				events: selectedEvents.join(', ')
			};

			console.log('Sending Data:', rsvpData);

			$.ajax({
				url: 'https://script.google.com/macros/s/AKfycbydfsF1jVfvNQEMV1bWETmf3ISzil8JXMQK65TVSImjeIrfMqZyEdaMm8hfgcAGIqjemw/exec',
				method: 'POST',
				crossDomain: true,
				data: JSON.stringify(rsvpData),
				contentType: 'text/plain;charset=utf-8',
				success: function (response) {
					console.log('AJAX Response:', response);
					var res = typeof response === 'string' ? JSON.parse(response) : response;
					if (res && res.success) {
						$('#rsvp-form-wrapper').fadeOut(400, function () {
							$('#rsvp-confirmation').fadeIn(400);

							$('html, body').animate({
								scrollTop: $('.rsvp-container').offset().top - 50 // adjusted for container
							}, 500);
						});
					} else {
						// Logic to handle Apps Script returning non-stringifiable error objects
						var errorDetail = res && res.error;
						var errorMsg = 'Submission failed.';

						if (errorDetail) {
							var errorStr = JSON.stringify(errorDetail);
							if (errorStr === '{}' || errorStr === '[]') {
								errorMsg = 'Error: Received empty error object from script. (Check "New Deployment" and Sheet permissions)';
							} else {
								errorMsg = 'Error: ' + errorStr;
							}
						}

						console.error('RSVP logic failure:', res);
						errroTarget.html('<p style="color:red; margin-top:10px;">' + errorMsg + '</p>');
						_this.text(originalBtnText); // Reset text on logical failure
						_this.prop('disabled', false);
					}
				},
				error: function (xhr, status, error) {
					console.error('RSVP AJAX Error:', { status: status, error: error, response: xhr.responseText });
					errroTarget.html('<p style="color:red; margin-top:10px;">Error submitting (Connection issue). Please try again.</p>');
					_this.text(originalBtnText); // Reset text on error
					_this.prop('disabled', false);
				}
			});
		}
	});

})(jQuery);
