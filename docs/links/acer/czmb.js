_czmbConfig = {
	img_path: "",
	// img_path:"campanhas/2024/Q4/acer_black_friday_wide_nov_v2/",
	bannerType: 1,
	css: "#czmb-b-bg{position:absolute;left:0;bottom:0;width:730px;height:50px;z-index:1}#czmb-b-pdt{position:absolute;left:599px;bottom:6px;width:131px;height:87px;z-index:2}#czmb-b-mulher{position:absolute;left:453px;bottom:-11px;width:154px;height:111px;z-index:3}#czmb-b-logo{position:absolute;left:12px;bottom:19px;width:51px;height:13px;z-index:4}#czmb-b-t1{position:absolute;left:127px;bottom:-3px;width:259px;height:48px;z-index:5}#czmb-b-t2{position:absolute;left:96px;bottom:16px;width:322px;height:9px;z-index:6}#czmb-b-t3{position:absolute;left:96px;bottom:15px;width:344px;height:13px;z-index:7}#czmb-t-bg{position:absolute;left:0;bottom:0;width:1000px;height:600px;z-index:1}#czmb-t-lgl{position:absolute;left:34px;bottom:139px;width:378px;height:26px;z-index:2}#czmb-t-cta-roleta{position:absolute;left:592px;bottom:498px;width:380px;height:46px;z-index:3}#czmb-t-ttl{position:absolute;left:168px;bottom:526px;width:332px;height:67px;z-index:4}#czmb-t-t5{position:absolute;left:526px;bottom:234px;width:206px;height:19px;z-index:5}#czmb-t-t4{position:absolute;left:526px;bottom:264px;width:205px;height:44px;z-index:6}#czmb-t-t3{position:absolute;left:460px;bottom:305px;width:152px;height:23px;z-index:7}#czmb-t-t2{position:absolute;left:454px;bottom:349px;width:249px;height:17px;z-index:8}#czmb-t-t1{position:absolute;left:454px;bottom:374px;width:242px;height:50px;z-index:9}#czmb-t-amd{position:absolute;left:454px;bottom:149px;width:278px;height:52px;z-index:10}#czmb-t-produto{position:absolute;left:28px;bottom:186px;width:383px;height:256px;z-index:11}#czmb-t-robo{position:absolute;left:267px;bottom:376px;width:78px;height:73px;z-index:12}#czmb-t-faixa{position:absolute;left:0;bottom:0;width:1000px;height:67px;z-index:13}#czmb-t-cta{position:absolute;left:715px;bottom:16px;width:233px;height:40px;z-index:14}#czmb-t-logo{position:absolute;left:28px;bottom:546px;width:111px;height:27px;z-index:15}#czmb-t-cta-roleta{position:absolute;left:574px;bottom:497px;width:397px;height:48px;z-index:15}#czmb-t-bg-roleta{position:absolute;left:0;bottom:0;width:1000px;height:600px;z-index:16}#czmb-t-cta-site{position:absolute;left:318px;bottom:46px;width:366px;height:41px;z-index:17}#czmb-t-roleta{position:absolute;left:295px;bottom:115px;width:410px;height:409px;z-index:18}#czmb-t-ponto{position:absolute;left:476px;bottom:474px;width:59px;height:73px;z-index:19}#czmb-wide{overflow:visible;position:fixed;z-index:2147483646!important;bottom:0;left:50%;margin-left:-365px;width:730px;height:50px;cursor:pointer;}#czmb-b{overflow:visible;position:absolute;left:0;bottom:0;width:730px!important;height:50px!important;font-size:35px;color:#fff;text-shadow:2px 2px 10px #004a69;cursor:pointer;line-height:50px;text-align:center;z-index:1!important}#czmb-t{position:absolute;margin-left:-135px;left:0;width:1000px!important;height:600px!important;cursor:pointer;bottom:0;background-color:#fff;z-index:2!important;overflow:hidden;background:0 0}#czmb-t-close{position:fixed;left:50%;margin-left:475px;bottom:-100px;z-index:2147483646!important;width:50px;height:50px}#czmb-expansion-load{position:absolute;left:0;bottom:0;height:3px;background-color:#7ed65b;z-index:90000;width:0}",
	bot_images: ['bg', 'pdt', 'mulher', 'logo', 't1', 't2', 't3'],
	top_images: ['bg', 'lgl', 'cta-roleta', 'ttl', 't5', 't4', 't3', 't2', 't1', 'amd', 'produto', 'robo', 'faixa', 'cta', 'logo', 'bg-roleta', 'cta-site', 'roleta', 'ponto'],
};

_czmbWide = new function () {

	this.anim;
	this.bottomText;
	this.clickControl;
	this.player;
	this.banner;
	this.cztk;
	this.click_url;
	this.clickThrottle;
	this.links = ["premium13", "gamer10", "monitor15", "premium13second", "aspire12", "gamer10second", 'projetor17', 'acessorio35']
	this.sectionAngle = 360 / this.links.length;
	this.finalAngle = null;

	this.start = function () {
		czQuery("head").append("<style type='text/css'>" + _czmbConfig.css + "</style>");

		this.anim = new TimelineMax();
		this.bottomText = new TimelineMax();
		this.ctaPulse = new TimelineMax();
		this.roulette = new TimelineMax();
		this.clickThrottle = false;
		this.cztk = _czmb.getCpnI(_czmbConfig.bannerType, 'tid');
		this.click_url = _czmb.getCpnI(1, "ucl").replace("[timestamp]", _czmb.gtt());
		this.banner = _czmbWide.createBanner();
		this.clickControl = "0";

		var app =
			"<div id='czmb-b'>" +
			"<div id='czmb-expansion-load'></div>" +
			"</div>" +
			"<div id='czmb-t'>" +
			"</div>";
		this.banner.append(app);
		this.banner.append('<img id="czmb-t-close" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiMzQjNCM0IiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0Mi4yNiIvPgo8cGF0aCBmaWxsPSIjQzlDOUM5IiBkPSJNMjU2LjAwMSw2My43NGMxMDYuMTg0LDAsMTkyLjI2LDg2LjA3OCwxOTIuMjYsMTkyLjI2YzAsMTA2LjE4NC04Ni4wNzYsMTkyLjI2LTE5Mi4yNiwxOTIuMjYKCWMtMTA2LjE4MiwwLTE5Mi4yNi04Ni4wNzYtMTkyLjI2LTE5Mi4yNkM2My43NDEsMTQ5LjgxOCwxNDkuODE5LDYzLjc0LDI1Ni4wMDEsNjMuNzQgTTI1Ni4wMDEsNDMuNzQKCWMtMjguNjQ2LDAtNTYuNDQ2LDUuNjE1LTgyLjYyNywxNi42ODhjLTI1LjI3OCwxMC42OTEtNDcuOTc2LDI1Ljk5My02Ny40NjMsNDUuNDhjLTE5LjQ4NywxOS40ODctMzQuNzg5LDQyLjE4NS00NS40ODEsNjcuNDYzCglDNDkuMzU2LDE5OS41NTUsNDMuNzQxLDIyNy4zNTQsNDMuNzQxLDI1NmMwLDI4LjY0Niw1LjYxNSw1Ni40NDcsMTYuNjg4LDgyLjYyOWMxMC42OTIsMjUuMjc3LDI1Ljk5NCw0Ny45NzUsNDUuNDgxLDY3LjQ2MwoJYzE5LjQ4NywxOS40ODYsNDIuMTg1LDM0Ljc4OSw2Ny40NjMsNDUuNDhjMjYuMTgxLDExLjA3Miw1My45ODEsMTYuNjg4LDgyLjYyNywxNi42ODhjMjguNjQ2LDAsNTYuNDQ2LTUuNjE1LDgyLjYyOC0xNi42ODgKCWMyNS4yNzctMTAuNjkxLDQ3Ljk3Ny0yNS45OTQsNjcuNDYzLTQ1LjQ4YzE5LjQ4Ny0xOS40ODgsMzQuNzg5LTQyLjE4Niw0NS40OC02Ny40NjNjMTEuMDcyLTI2LjE4MiwxNi42ODgtNTMuOTgyLDE2LjY4OC04Mi42MjkKCWMwLTI4LjY0Ni01LjYxNS01Ni40NDUtMTYuNjg4LTgyLjYyN2MtMTAuNjkxLTI1LjI3Ny0yNS45OTMtNDcuOTc2LTQ1LjQ4LTY3LjQ2M2MtMTkuNDg2LTE5LjQ4Ny00Mi4xODYtMzQuNzg5LTY3LjQ2My00NS40OAoJQzMxMi40NDYsNDkuMzU1LDI4NC42NDcsNDMuNzQsMjU2LjAwMSw0My43NEwyNTYuMDAxLDQzLjc0eiIvPgo8cG9seWdvbiBmaWxsPSIjQzlDOUM5IiBwb2ludHM9IjIwMy40MjQsMzQzLjYzOSAxNjguMzczLDMwOC41NzYgMjIwLjk0OSwyNTYgMTY4LjM3MywyMDMuNDI1IDIwMy40MjQsMTY4LjM2MSAyNTYsMjIwLjk1IAoJMzA4LjU3NywxNjguMzYxIDM0My42MjcsMjAzLjQyNSAyOTEuMDUxLDI1NiAzNDMuNjI3LDMwOC41NzYgMzA4LjU3NywzNDMuNjM5IDI1NiwyOTEuMDUxICIvPgo8L3N2Zz4=">');

		_czmb.loadImage(_czmbConfig.img_path + "bottom", _czmbConfig.bot_images, "czmb-b", 'czmb-b-', 'png', function () {
			_czmbWide.go();
		});
		_czmb.loadImage(_czmbConfig.img_path + "top", _czmbConfig.top_images, "czmb-t", 'czmb-t-');

	};

	this.go = function () {
		_czmb.pushTrack(_czmbWide.cztk, 'print');
		var cztk = window._czmb.getCpnI(_czmbConfig.bannerType, 'tid');
		if (window._czmb.hasOwnProperty("checkViewability")) {
			window._czmb.checkViewability("#czmb-wide", cztk);
		}
		_czmbWide.banner.removeAttr("style");
		czQuery("#czmb-b").click(function () {
			_czmbWide.click();
			_czmbWide.banner.unbind("mouseleave");
			_czmbWide.banner.mouseenter();
		});
		czQuery("#czmb-t-close").click(function () {
			_czmbWide.close();
		});
		czQuery("#czmb-t").children().click(function (e) {
			_czmbWide.click(e);
		});
		_czmbWide.actions();
		_czmbWide.animations();
		_czmbWide.banner.show();
	};

	this.close = function () {
		this.anim.pause(0.5);
		this.ctaPulse.pause(0);
		this.roulette.pause(0);
		this.bottomText.play();
		this.clickControl = "0";
		// _czmbWide.sendExpansionTimeEvent();
		czQuery("#czmb-t-close").animate({
			bottom: -100,
			autoAlpha: 0
		});
		czQuery("#czmb-b").animate({
			right: "110%"
		}, 500);

		_czmbWide.actions();
		_czmbWide.anim.pause(0);
		TweenMax.set("#czmb-t", {
			autoAlpha: 0
		});

		czQuery("#cz-overlay").fadeOut().remove();
	};

	this.click = function (e) {
		if (_czmbWide.clickThrottle === true) {
			return false;
		}
		_czmbWide.clickThrottle = true;
		switch (_czmbWide.clickControl) {
			case "premium13":
				window.open(" https://br-store.acer.com/336?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-premium-13&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-premium-13_premium-13", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_premium13_fase2", 1);
				break;
			case "acessorio35":
				window.open("https://br-store.acer.com/277?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-acessorios-35&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-acessorios-35_acessorios-35", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_acessorio35_fase2", 1);
				break;
			case "projetor17":
				window.open(" https://br-store.acer.com/346?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-projetor-17&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-projetor-17_projetor-17", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_projetor17_fase2", 1);
				break;
			case "gamer10":
				window.open("https://br-store.acer.com/334?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-gamer-10&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-gamer-10_gamer-10", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_gamer10_fase2", 1);
				break;
			case "aspire12":
				window.open("https://br-store.acer.com/333?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-aspire-12&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-aspire-12_aspire-12", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_aspire12_fase2", 1);
				break;
			case "monitor15":
				window.open("https://br-store.acer.com/335?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-monitor-15&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-monitor-15_monitor-15", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_premium13_fase2", 1);
				break;
			case "gamer10second":
				window.open("https://br-store.acer.com/334?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-gamer-10&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-gamer-10_gamer-10", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_gamer10second_fase2", 1);
				break;
			case "premium13second":
				window.open(" https://br-store.acer.com/336?layout=grid-2&map=productClusterIds&utm_source=cazamba&utm_medium=cpc&utm_campaign=bra_mootag_acer_cupom-bf-cazamba&utm_content=czb_img_cnv__cupom-bf-cazamba_cupom-premium-13&utm_term=gdn_img_var_sta_csd_cupom-bf-cazamba_cupom-premium-13_premium-13", "_blank")
				_czmb.pushEvent("MDM3YmE1ZGF", "roleta_clicada_premium13second_fase2", 1);
				break;
			default:
				window.open(_czmbWide.click_url);
		}

		this.banner.mouseleave();
		this.banner.unbind("mouseenter");
		this.banner.unbind("mouseleave");

		_czmb.pushTrack(this.cztk, "click");
		setTimeout(function () {
			_czmbWide.close();
			_czmbWide.clickThrottle = false;
		}, 800);
	};

	this.createBanner = function () {
		if (_czmbConfig.bannerType == 1) type = "czmb-wide";
		czQuery("body").append("<div id=" + type + " style='bottom:-500px'></div>");
		var banner = czQuery("#" + type);
		if (_czmb.getCpnI(1, 'upr') != "") {
			banner.append('<img src="' + _czmb.getCpnI(1, 'upr').replace('[timestamp]', _czmb.gtt()) + '" width="1" height="1" border="0" alt="" />');
		}
		banner.hide();
		return banner;
	}

	this.actions = function () {
		this.banner.unbind("mouseenter");
		this.banner.unbind("mouseleave");

		this.banner.mouseenter(function () {
			czQuery("#czmb-expansion-load").stop().animate({
				width: "100%"
			}, 800, function () {
				_czmbWide.banner.unbind("mouseenter");
				_czmbWide.banner.unbind("mouseleave");
				_czmbWide.playBanner();
				_czmbWide.bottomText.pause();
				_czmb.pushTrack(_czmbWide.cztk, 'interaction');
				czQuery("#czmb-expansion-load").animate({
					width: "0%"
				}, 800);
				czQuery("body").append("<div id='cz-overlay'></div>");
				TweenMax.set("#cz-overlay", {
					autoAlpha: 0,
					position: "fixed",
					zIndex: 2147483640,
					width: "100%",
					height: "100%",
					backgroundColor: "black",
					top: 0,
					left: 0
				});
				czQuery("#cz-overlay").click(function () {
					_czmbWide.close();
				});
				TweenMax.to("#cz-overlay", 0.5, {
					autoAlpha: 0.5
				});
			});
		});

		this.banner.mouseleave(function () {
			czQuery("#czmb-expansion-load").stop().animate({
				width: "0%"
			}, 500);
		});
	};

	this.playBanner = function () {
		czQuery("#czmb-b").fadeIn();
		if (_czmb.getCpnI(1, 'uin') != "") {
			_czmbWide.banner.append('<img src="' + _czmb.getCpnI(1, 'uin').replace('[timestamp]', _czmb.gtt()) + '" width="1" height="1" border="0" alt="" />');
		}
		this.anim.play();
		czQuery("#czmb-t-close").animate({
			bottom: 575,
			opacity: 1
		});
	};


	this.animations = function () {
		var bottom = {
			"background": new TimelineMax(),
			"text": new TimelineMax()
		};

		bottom.background
			.staggerFrom(['#czmb-b-bg', '#czmb-b-logo', '#czmb-b-mulher'], .7, { autoAlpha: 0, y: 100, ease: Power3.easeOut }, .15, "start")
			.from("#czmb-b-pdt", .7, { autoAlpha: 0, scale: 1.2, ease: Back.easeOut }, .1, "start+=.5")
			.add(function () { _czmbWide.bottomText.play(); }, "start+=.7");

		_czmbWide.bottomText.pause(0);
		_czmbWide.bottomText.addLabel("start")
			.addLabel("start")
			.from('#czmb-b-t1', .7, { autoAlpha: 0, rotationX: 90, x: -100, ease: Power3.easeOut }, 'start')
			.to("#czmb-b-t1", .5, { autoAlpha: 0, rotationX: 0, x: 100, ease: Power3.easeIn }, "+=2")

			.from('#czmb-b-t2', .7, { autoAlpha: 0, rotationX: 90, x: -100, ease: Power3.easeOut })
			.to("#czmb-b-t2", .5, { autoAlpha: 0, rotationX: 0, x: 100, ease: Power3.easeIn }, "+=2")

			.from('#czmb-b-t3', .7, { autoAlpha: 0, rotationX: 90, x: -100, ease: Power3.easeOut })
			.to("#czmb-b-t3", .1, { autoAlpha: 0 }, "+=.5")
			.to("#czmb-b-t3", .3, { autoAlpha: 1 })
			.to("#czmb-b-t3", .3, { autoAlpha: 0 })
			.to("#czmb-b-t3", .3, { autoAlpha: 1 })
			.to("#czmb-b-t3", .3, { autoAlpha: 0 })
			.to("#czmb-b-t3", .3, { autoAlpha: 1 })
			.to("#czmb-b-t3", .5, { autoAlpha: 0, rotationX: 0, x: 100, ease: Power3.easeIn }, "+=2")

			.repeat(-1);
		//TOP	
		this.anim.pause(0);
		this.anim.addLabel("start")
			.from("#czmb-t", .25, { autoAlpha: 0, height: 0 }, "start")
			.from("#czmb-t-bg", .5, { autoAlpha: 0, y: 600, ease: Power3.easeOut }, "start")
			.from("#czmb-t-logo", .7, { autoAlpha: 0, scale: 1.2, ease: Back.easeOut }, "start+=.5")
			.from("#czmb-t-ttl", .7, { autoAlpha: 0, x: 20, ease: Back.easeOut }, "start+=.7")

			.from("#czmb-t-produto", .7, { autoAlpha: 0, y: 100, ease: Back.easeOut }, "start+=1")
			.from("#czmb-t-robo", .7, { autoAlpha: 0, scale: 0.8, ease: Power3.easeOut }, "start+=1.2")
			.from("#czmb-t-t1", .7, { autoAlpha: 0, scale: 1.2, ease: Back.easeOut }, "start+=1.3")
			.staggerFrom(["#czmb-t-t2", "#czmb-t-t3", "#czmb-t-t4", "#czmb-t-t5", "#czmb-t-amd"], .7, { autoAlpha: 0, y: -10, ease: Back.easeOut }, .1, "start+=1.5")

			.from("#czmb-t-faixa", .7, { autoAlpha: 0, y: 100, ease: Power3.easeOut }, "start+=1.7")
			.from("#czmb-t-cta", .7, { autoAlpha: 0, scale: 1.2, ease: Back.easeOut }, "start+=2")

			.from("#czmb-t-cta-roleta", .7, { autoAlpha: 0, rotationX: -90, ease: Back.easeOut }, "start+=2.2")
			.from("#czmb-t-lgl", .7, { autoAlpha: 0, y: 10, ease: Back.easeOut }, "start+=2.5")


		const rotation = Math.floor(Math.random() * 360 + 720);
		// The roulette starts on an offset of -22.5 degrees
		const initialOffset = -22.5;
		this.roulette.pause(0);
		this.roulette.addLabel("start")
			.add(() => {
				_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_fase2", 1);
			}, "start")
			.from("#czmb-t-bg-roleta", .5, { autoAlpha: 0, y: 600, ease: Power3.easeOut }, "start")
			.from("#czmb-t-roleta", 1, { autoAlpha: 0, x: -600, rotation: -230, ease: Power3.easeOut }, "-=.3")
			.from("#czmb-t-ponto", .7, { autoAlpha: 0, y: -50, ease: Back.easeOut }, "-=.7")
			.to("#czmb-t-roleta", 2, { rotation: rotation, ease: Power3.easeOut })
			.to("#czmb-t-ponto", .5, { y: -20, ease: Linear.easeNone })
			.to("#czmb-t-ponto", .5, { y: 0, ease: Power3.easeOut })
			.to("#czmb-t-ponto", .5, { y: -20, ease: Linear.easeNone })
			.to("#czmb-t-ponto", .5, { y: 0, ease: Power3.easeOut })
			.add(() => {
				_czmbWide.finalAngle = (rotation % 360) - initialOffset
				_czmbWide.finalAngle = _czmbWide.finalAngle < 0 ? 360 + _czmbWide.finalAngle : _czmbWide.finalAngle
				const selectedIdx = Math.floor(_czmbWide.finalAngle / _czmbWide.sectionAngle)
				const link = _czmbWide.links[selectedIdx];
				_czmbWide.clickControl = link;
				switch (_czmbWide.clickControl) {
					case "premium13":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_premium13_fase2", 1);
						break;
					case "acessorio35":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizadaacessorio35_fase2", 1);
						break;
					case "projetor17":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_projetor17_fase2", 1);
						break;
					case "gamer10":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_gamer10_fase2", 1);
						break;
					case "aspire12":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_aspire12_fase2", 1);
						break;
					case "monitor15":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_monitor15_fase2", 1);
						break;
					case "gamer10second":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_gamer10second_fase2", 1);
						break;
					case "premium13second":
						_czmb.pushEvent("MTY4NDIyOGR", "roleta_visualizada_premium13second_fase2", 1);
						break;
				};
			})
			.from("#czmb-t-cta-site", .7, { autoAlpha: 0, scale: 1.2, ease: Power3.easeOut }, "-=.3")

		czQuery("#czmb-t-cta-roleta").unbind("click").click(() => {
			this.roulette.play(0);
		})

		czQuery("#czmb-t-cta-roleta, #czmb-t-cta-site,#czmb-t-cta").mouseenter(function () {
			TweenMax.to(czQuery(this), 0.2, { scale: 1.05 });
		}).mouseout(function () {
			TweenMax.to(czQuery(this), 0.2, { scale: 1 });
		});
	};

}
_czmbWide.start();
czQuery.ajaxSetup({
	cache: false
});
