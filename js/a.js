/**
 * Gmelius Website core JS code
 * Author: Florian Bersier
 */
$(function() {
	// Year
	var d = new Date();
	var year = d.getFullYear();
	// Browser detection
	var isOpera = !! window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !! window.chrome && !isOpera; // Chrome 1+
	var isIE = /*@cc_on!@*/
	false || document.documentMode; // At least IE6
	// Browser version detection

	function get_browser_version() {
		var N = navigator.appName,
			ua = navigator.userAgent,
			tem;
		var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if (M && (tem = ua.match(/version\/([\.\d]+)/i)) !== null) M[2] = tem[1];
		M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
		return M[1];
	}
	var OS = navigator.platform,
		version = get_browser_version();
	var browser, config, getlink, betalink, compatibility, compbeta;
	var ChromeLink = 'https://chrome.google.com/webstore/detail/gmelius-ad-blocker-and-be/dheionainndbbpoacpnopgmnihkcmnkl',
		FirefoxLink = 'https://addons.mozilla.org/firefox/addon/gmail-ad-remover/',
		OperaLink = 'https://addons.opera.com/extensions/details/gmelius-no-ads-and-better-ui-for-gmail/';
	if (isChrome) {
		browser = 'Chrome';
		config = 'To configure Gmelius in Chrome, go to the ' +
					'<a href="chrome-extension://dheionainndbbpoacpnopgmnihkcmnkl/options.html" target="_blank">options page</a> ' + 
					'and select the <a href="../#features" title="view full list of features">features</a> you wish to activate. ' +
					'Don\'t forget to save your settings and check your Gmail inbox.' +
					'<h4>A few tips & tricks</h4><ul class="ti">' +
					'<li>To remove Gmelius icon from the Chrome toolbar, right-click on it and select "Hide Button";' +
					'<li>Type <code>gmelius options</code> in the address bar to go to the options page of Gmelius;' +
					'<li>Need help? Read our <a href="https://gmelius.uservoice.com/knowledgebase" target="_blank">FAQ</a> or fill in the <a href="#support" class="slow">support form</a> below.</ul>';
		configbeta = 'To configure Gmelius in Chrome, go to the ' +
						'<a href="chrome-extension://kolcknldigimoipnaaalljghaahfpgbp/options.html" target="_blank">options page</a> ' +
						'and select the <a href="../#features" title="view full list of features">features</a> you wish to activate. ' +
						'Don\'t forget to save your settings and check your Gmail inbox.';
		betalink = '#';
		compatibility = 'From Chrome 20';
		compbeta = 'Compatibility | From Chrome 20';
	} else if (isFirefox) {
		browser = 'Firefox';
		config = 'To configure Gmelius in Firefox, go to Tools ' +
					'<i class="icon-angle-right"></i> Add-ons <i class="icon-angle-right"></i> ' +
					'Extensions <i class="icon-angle-right"></i> Gmelius and click on "preferences". ' +
					'<a href="../#features" title="view full list of features">Features</a> ' +
					'are enabled by ticking their corresponding checkboxes. ' +
					'You will need to <a href="https://mail.google.com" title="reload Gmail now">reload Gmail</a> ' +
					'after changing your preferences.';
		getlink = 'https://addons.mozilla.org/firefox/downloads/latest/120014/addon-120014-latest.xpi?src=external-gmelius';
		betalink = '#';
		compatibility = 'From Firefox 19';
		compbeta = 'Compatibility | From Firefox 19';
		
	} else if (isOpera) {
		browser = 'Opera';
		config = 'To configure Gmelius in Opera, go to Extensions ' +
					'<i class="icon-angle-right"></i> Manage Extensions <i class="icon-angle-right"></i> ' +
					'Gmelius and click on the wrench icon <i class="icon-wrench"></i>. ' +
					'<a href="../#features" title="view full list of features">Features</a> ' +
					'are enabled by ticking their corresponding checkboxes. ' +
					'You may need to <a href="https://mail.google.com" title="reload Gmail now">reload Gmail</a> ' +
					'after changing your preferences.';
		getlink = OperaLink;
		betalink = 'http://beta.gmelius.com/gmelius.oex';
		compatibility = 'From Opera 11';
		compbeta = 'Not available for Opera';
	} else if (isSafari) {
		browser = 'Safari';
		config = 'Gmelius is not available for your browser. ' +
					'You can get it for ' +
					'<a href="' + ChromeLink + '" target="_blank" title="Get Gmelius for Chrome">Google Chrome</a>, ' +
					'<a href="' + FirefoxLink + '" target="_blank" title="Get Gmelius for Firefox">Mozilla Firefox</a> ' +
					'or <a href="' + OperaLink + '" target="_blank" title="Get Gmelius for Opera">Opera</a>.';
		getlink = '#';
		betalink = '../beta/#';
		compatibility = 'Browser not supported';
	} else {
		browser = 'IE';
		config = 'Gmelius is not available for your browser. ' +
					'You can get it for ' +
					'<a href="' + ChromeLink + '" target="_blank" title="Get Gmelius for Chrome">Google Chrome</a>, ' +
					'<a href="' + FirefoxLink + '" target="_blank" title="Get Gmelius for Firefox">Mozilla Firefox</a> ' +
					'or <a href="' + OperaLink + '" target="_blank" title="Get Gmelius for Opera">Opera</a>.';
		getlink = '#';
		betalink = '../beta/#';
		compatibility = 'Browser not supported';
	}
	// Share SNS
	(function(doc, script) {
 	 var js, 
      fjs = doc.getElementsByTagName(script)[0],
      frag = doc.createDocumentFragment(),
      add = function(url, id) {
          if (doc.getElementById(id)) {return;}
          js = doc.createElement(script);
          js.src = url;
          id && (js.id = id);
          frag.appendChild( js );
      };
      
    // Google+ button
    add('https://apis.google.com/js/plusone.js');
    // Facebook SDK
    add('https://connect.facebook.net/en_US/all.js#xfbml=1&appId=234524816574248', 'facebook-jssdk');
    // Twitter SDK
    add('https://platform.twitter.com/widgets.js', 'twitter-wjs');

    fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));
	var share = '<ul><li class="go">' +
				'<div class="g-plusone" data-size="medium" data-href="http://gmelius.com"></div>' +
				'<li class="fb"><div class="fb-like" data-href="https://www.facebook.com/adremover" data-send="false"' +
				' data-layout="button_count" data-width="105" data-show-faces="false"></div><li class="tw">' +
				'<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://gmelius.com">Tweet</a></ul>';
	// Scrolling
	$(".slow").on('click', function(event) {
		// Identifier le lien cliqué dans la nav
		var clicked = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(clicked).offset().top
		}, 1000);
	});
	// URL Parameters

	function getUrlVars() {
		var vars = [],
			hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	// HTML
	$('#showadav').hide();
	$('#adav').on('click', function(){
		if ( $(this).hasClass('on') ) { $('#showadav').hide();$(this).removeClass('on');$('#indic').removeClass('icon-angle-up').addClass('icon-angle-down');}
		else { $('#showadav').show();$(this).addClass('on');$('#indic').removeClass('icon-angle-down').addClass('icon-angle-up');}
	});
	$('#bitc').on('click', function(){
		$('#ppdon,#pptxt,#bitc')
			.hide()
			.addClass('none');
		$('#bitcdon,#bitctxt,#paypalbtn')
			.show()
			.removeClass('none');
	});
	$('#paypalbtn').on('click', function(){
		$('#bitcdon,#bitctxt,#paypalbtn')
			.hide()
			.addClass('none');
		$('#ppdon,#pptxt,#bitc')
			.show()
			.removeClass('none');
	});
	$('#year').append(year);
	$('#OS').append(OS);
	$('#browser').append(browser);
	$('#install-'+ browser).addClass('bold');
	$('#brwver').append(browser + ' ' + version);
	$('#share').append(share);
	if ($('body').hasClass('hel')) {
		var premium = getUrlVars()['v'];
		var thanks = getUrlVars()['note'];
		var thxpaypal = getUrlVars()['merchant_return_link'];
		var GmVersion = getUrlVars()['version'];
		
		if ( thanks === 'thanks' || typeof thxpaypal !== 'undefined' ) {
			$('#help').addClass('none');
			$('#thanks').removeClass('none');
		}
		
		if (isChrome && premium === 'premium') {
			$('#config').append(configbeta);
		} else if (isChrome && GmVersion !== undefined) {
			$('#config').append('Gmelius <span>' + GmVersion + '</span> has been successfully installed. ' + config);
		} else {
			$('#config').append(config);
		}
	}
	if ($('.banner').hasClass('home')) {
		$('#compatibility').append(compatibility);
		if (isChrome) {
			$("#download,#install-Chrome").click(function() {
				chrome.webstore.install()
			});
		} else {
			$('#download').prop('href', getlink);
			$('#install-Chrome').prop('href', ChromeLink);
		}
	} else if ($('.banner').hasClass('beta')) {
		$('#download').prop('href', betalink);
		$('#compbeta').append(compbeta);
	}
	// Donate form
	var randAmount = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
	$('#donate output').append(randAmount);
	$('#amount').val(randAmount);
	$('#amount').change(function() {
		var newValue = $(this).val();
		$("#donate output").empty().append(newValue);
	});
}); // End jQuery ready

