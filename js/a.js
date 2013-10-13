$(function() {
	// Year
	var d = new Date();
	var year = d.getFullYear();
	// Browser & OS
	var u = {
		init: function() {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS"
		},
		searchString: function(a) {
			for (var d = 0; d < a.length; d++) {
				var c = a[d].string;
				var b = a[d].prop;
				this.versionSearchString = a[d].versionSearch || a[d].identity;
				if (c) {
					if (c.indexOf(a[d].subString) != -1) {
						return a[d].identity
					}
				} else {
					if (b) {
						return a[d].identity
					}
				}
			}
		},
		searchVersion: function(a) {
			var b = a.indexOf(this.versionSearchString);
			if (b == -1) {
				return;
			}
			return parseFloat(a.substring(b + this.versionSearchString.length + 1))
		},
		dataBrowser: [{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		}, {
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		}, {
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		}, {
			prop: window.opera,
			identity: "Opera"
		}, {
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		}, {
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		}, {
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		}, {
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		}, {
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		}, {
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		}, {
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		}, {
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}],
		dataOS: [{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		}, {
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		}, {
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iPhone/iPod"
		}, {
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}]
	};
	u.init();
	var OS = u.OS;
	var browser = u.browser;
	var brw = browser.toLowerCase();
	var version = u.version;
    var config, getlink, betalink, compatibility, compbeta;
	if (brw === 'chrome') {
		config = 'To configure Gmelius in Chrome, go to the <a href="chrome-extension://dheionainndbbpoacpnopgmnihkcmnkl/options.html" target="_blank">options page</a> and select the <a href="../#features" title="view full list of features">features</a> you wish to activate. Don\'t forget to save your settings and check your Gmail inbox. <u>Tip</u>: To remove Gmelius icon from the Chrome toolbar, right-click on it and select "Hide Button".';
		configbeta = 'To configure Gmelius in Chrome, go to the <a href="chrome-extension://kolcknldigimoipnaaalljghaahfpgbp/options.html" target="_blank">options page</a> and select the <a href="../#features" title="view full list of features">features</a> you wish to activate. Don\'t forget to save your settings and check your Gmail inbox.';
		betalink = 'http://beta.gmelius.com/gmelius.crx';
		compatibility = 'From Chrome 20';
		compbeta = 'Compatibility | From Chrome 20';
	} else if (brw === 'firefox') {
		config = 'To configure Gmelius in Firefox, go to Tools <i class="icon-angle-right"></i> Add-ons <i class="icon-angle-right"></i> Extensions <i class="icon-angle-right"></i> Gmelius and click on "preferences". <a href="../#features" title="view full list of features">Features</a> are enabled by ticking their corresponding checkboxes. You will need to <a href="https://mail.google.com" title="reload Gmail now">reload Gmail</a> after changing your preferences.';
		getlink = 'https://addons.mozilla.org/firefox/downloads/latest/120014/addon-120014-latest.xpi?src=external-gmelius';
		betalink = 'http://beta.gmelius.com/gmelius.xpi';
		compatibility = 'From Firefox 19';
		compbeta = 'Compatibility | From Firefox 19';
	} else if (brw === 'opera') {
		config = 'To configure Gmelius in Opera, go to Extensions <i class="icon-angle-right"></i> Manage Extensions <i class="icon-angle-right"></i> Gmelius and click on the wrench icon <i class="icon-wrench"></i>. <a href="../#features" title="view full list of features">Features</a> are enabled by ticking their corresponding checkboxes. You may need to <a href="https://mail.google.com" title="reload Gmail now">reload Gmail</a> after changing your preferences.';
		getlink = 'https://addons.opera.com/extensions/download/gmelius-no-ads-and-better-ui-for-gmail/';
		betalink = 'http://beta.gmelius.com/gmelius.oex';
		compatibility = 'From Opera 11';
		compbeta = 'Not available for Opera';
	} else {
		config = 'Gmelius is not available for your browser. You can get it for <a href="https://chrome.google.com/webstore/detail/gmelius-ad-blocker-and-be/dheionainndbbpoacpnopgmnihkcmnkl" target="_blank" title="Get Gmelius for Chrome">Google Chrome</a>, <a href="https://addons.mozilla.org/firefox/addon/gmail-ad-remover/" target="_blank" title="Get Gmelius for Firefox">Mozilla Firefox</a> or <a href="https://addons.opera.com/extensions/details/gmelius-no-ads-and-better-ui-for-gmail/" target="_blank" title="Get Gmelius for Opera">Opera</a>.';
		getlink = '#';
		betalink = '../beta/#';
		compatibility = 'Browser not supported';
	}
	// Share SNS
	(function(a, e) {
		var b, d = a.getElementsByTagName(e)[0],
			c = function(g, f) {
				if (a.getElementById(f)) {
					return;
				}
				b = a.createElement(e);
				b.src = g;
				f && (b.id = f);
				d.parentNode.insertBefore(b, d)
			};
		c("https://apis.google.com/js/plusone.js");
		c("//connect.facebook.net/en_US/all.js#xfbml=1&appId=234524816574248", "facebook-jssdk");
		c("//platform.twitter.com/widgets.js", "twitter-wjs")
	}(document, "script"));
	var share = '<ul><li class="go"><div class="g-plusone" data-size="medium" data-href="http://gmelius.com"></div><li class="fb"><div class="fb-like" data-href="https://www.facebook.com/adremover" data-send="false" data-layout="button_count" data-width="105" data-show-faces="false"></div><li class="tw"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://gmelius.com">Tweet</a></ul>';
	// Scrolling
	$(".slow").on('click', function(event) {
		// Identifier le lien cliqué dans la nav puis "capitalize" la 1ère lettre
		var clicked = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(clicked).offset().top
		}, 1000);
	});
	
	// URL Parameters
	function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
	}
	
	// HTML
	$('#year').append(year);
	$('#OS').append(OS);
	$('#browser').append(browser);
	$('#brwver').append(browser + ' ' + version);
	$('#share').append(share);

	
	if($('body').hasClass('hel')) {
	var premium = getUrlVars()['v'];
	var GmVersion = getUrlVars()['version'];
	
		if (brw ==='chrome' && premium === 'premium') {
			$('#config').append(configbeta);
		} else if (brw ==='chrome' && GmVersion !== undefined){
			$('#config').append('Gmelius <span>' + GmVersion + '</span> has been successfully installed. ' + config);
		} else {
			$('#config').append(config);
		}
	}
	
	if ($('.banner').hasClass('home')) {
		$('#compatibility').append(compatibility);
		if (brw === 'chrome') {
			$("#download").click(function() {
				chrome.webstore.install()
			});
		} else {
			$('#download').prop('href', getlink);
		}
	} else if ($('.banner').hasClass('beta')) {
		$('#download').prop('href', betalink);
		$('#compbeta').append(compbeta);
	}
}); // End jQuery ready
