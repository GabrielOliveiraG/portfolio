_czmbConfig = {
	img_path: "",
	// img_path: "campanhas/2022/third//",
	bannerType: 1,
	css: "#czmb-b-bg,#czmb-wide{width:730px;height:50px}#czmb-b,#czmb-t,#czmb-wide{cursor:pointer;bottom:0}#czmb-t-close,#czmb-wide{position:fixed;left:50%;z-index:2147483646!important;height:50px}#czmb-b,#czmb-b-bg,#czmb-b-e1,#czmb-expansion-load,#czmb-t,#czmb-t-BACKGROUND,#czmb-t-faixa{position:absolute;left:0}#czmb-b-bg{bottom:0;z-index:1}#czmb-b-estrela{position:absolute;left:4px;bottom:0;width:111px;height:100px;z-index:2}#czmb-b-e1{bottom:0;width:43px;height:29px;z-index:3}#czmb-b-e2{position:absolute;left:82px;bottom:0;width:67px;height:47px;z-index:4}#czmb-b-e3{position:absolute;left:94px;bottom:0;width:63px;height:19px;z-index:5}#czmb-b-maos{position:absolute;left:664px;bottom:0;width:59px;height:100px;z-index:6}#czmb-b-czmb{position:absolute;left:540px;bottom:10px;width:124px;height:27px;z-index:7}#czmb-b-t2{position:absolute;left:255px;bottom:13px;width:174px;height:22px;z-index:8}#czmb-b-t1{position:absolute;left:150px;bottom:8px;width:370px;height:34px;z-index:9}#czmb-t-BACKGROUND{bottom:0;width:1000px;height:566px;z-index:1}#czmb-t-logo{position:absolute;left:62px;bottom:157px;width:275px;height:301px;z-index:2}#czmb-t-t5{position:absolute;left:656px;bottom:65px;width:292px;height:57px;z-index:3}#czmb-t-t4{position:absolute;left:670px;bottom:114px;width:262px;height:23px;z-index:4}#czmb-t-t3{position:absolute;left:669px;bottom:143px;width:263px;height:21px;z-index:5}#czmb-t-t2{position:absolute;left:670px;bottom:170px;width:272px;height:22px;z-index:6}#czmb-t-t1{position:absolute;left:672px;bottom:197px;width:243px;height:23px;z-index:7}#czmb-t-e1{position:absolute;left:303px;bottom:165px;width:67px;height:67px;z-index:8}#czmb-t-e2{position:absolute;left:14px;bottom:438px;width:57px;height:54px;z-index:9}#czmb-t-e3{position:absolute;left:12px;bottom:57px;width:91px;height:93px;z-index:10}#czmb-t-e4{position:absolute;left:703px;bottom:172px;width:296px;height:339px;z-index:11}#czmb-t-maos{position:absolute;left:313px;bottom:11px;width:349px;height:574px;z-index:12}#czmb-t-faixa{bottom:-1px;width:1000px;height:18px;z-index:13}#czmb-t-czmb{position:absolute;left:123px;bottom:86px;width:206px;height:44px;z-index:14}#czmb-t-fireworks{position:absolute;left:-15%;bottom:0;width:1300px;height:800px;z-index:999;pointer-events:none}#czmb-wide{overflow:visible;margin-left:-365px}#czmb-b{overflow:visible;width:730px!important;height:50px!important;font-size:35px;color:#fff;text-shadow:2px 2px 10px #004a69;line-height:50px;text-align:center;z-index:1!important}#czmb-t{margin-left:-135px;width:1000px!important;height:600px!important;z-index:2!important;background:0 0}#czmb-t-close{margin-left:475px;bottom:-100px;width:50px}#czmb-expansion-load{bottom:0;height:3px;background-image:repeating-linear-gradient(to right,#149ed1,#62a664,#d9a439,#d87c00,#d96518);z-index:90000;width:0%}",
	bot_images: ['bg','estrela','e1','e2','e3','maos','czmb','t2','t1'],
	top_images: ['BACKGROUND','logo','t5','t4','t3','t2','t1','e1','e2','e3','e4','maos','faixa','czmb'],
};

_czmbWide = new function() {

	this.anim;
	this.bottomText;
	this.lowStar;
	this.topCongrats;
	this.player;
	this.banner;
	this.fireworks;
	this.cztk;
	this.click_url;
	this.clickThrottle;

	this.start = function() {		
		czQuery("head").append("<style type='text/css'>" + _czmbConfig.css + "</style>");

		this.anim = new TimelineMax();
		this.bottomText = new TimelineMax();
		this.lowStar = new TimelineMax();
		this.topCongrats = new TimelineMax();
		this.clickThrottle = false;
		this.cztk = _czmb.getCpnI(_czmbConfig.bannerType, 'tid');
		this.click_url = _czmb.getCpnI(1, "ucl").replace("[timestamp]", _czmb.gtt());
		this.banner = _czmbWide.createBanner();

		var app =
			"<div id='czmb-b'><div id='czmb-expansion-load'></div></div>" +
			"<div id='czmb-t'><div id='czmb-t-fireworks'></div>";
		this.banner.append(app);
		this.banner.append('<img id="czmb-t-close" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiMzQjNCM0IiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0Mi4yNiIvPgo8cGF0aCBmaWxsPSIjQzlDOUM5IiBkPSJNMjU2LjAwMSw2My43NGMxMDYuMTg0LDAsMTkyLjI2LDg2LjA3OCwxOTIuMjYsMTkyLjI2YzAsMTA2LjE4NC04Ni4wNzYsMTkyLjI2LTE5Mi4yNiwxOTIuMjYKCWMtMTA2LjE4MiwwLTE5Mi4yNi04Ni4wNzYtMTkyLjI2LTE5Mi4yNkM2My43NDEsMTQ5LjgxOCwxNDkuODE5LDYzLjc0LDI1Ni4wMDEsNjMuNzQgTTI1Ni4wMDEsNDMuNzQKCWMtMjguNjQ2LDAtNTYuNDQ2LDUuNjE1LTgyLjYyNywxNi42ODhjLTI1LjI3OCwxMC42OTEtNDcuOTc2LDI1Ljk5My02Ny40NjMsNDUuNDhjLTE5LjQ4NywxOS40ODctMzQuNzg5LDQyLjE4NS00NS40ODEsNjcuNDYzCglDNDkuMzU2LDE5OS41NTUsNDMuNzQxLDIyNy4zNTQsNDMuNzQxLDI1NmMwLDI4LjY0Niw1LjYxNSw1Ni40NDcsMTYuNjg4LDgyLjYyOWMxMC42OTIsMjUuMjc3LDI1Ljk5NCw0Ny45NzUsNDUuNDgxLDY3LjQ2MwoJYzE5LjQ4NywxOS40ODYsNDIuMTg1LDM0Ljc4OSw2Ny40NjMsNDUuNDhjMjYuMTgxLDExLjA3Miw1My45ODEsMTYuNjg4LDgyLjYyNywxNi42ODhjMjguNjQ2LDAsNTYuNDQ2LTUuNjE1LDgyLjYyOC0xNi42ODgKCWMyNS4yNzctMTAuNjkxLDQ3Ljk3Ny0yNS45OTQsNjcuNDYzLTQ1LjQ4YzE5LjQ4Ny0xOS40ODgsMzQuNzg5LTQyLjE4Niw0NS40OC02Ny40NjNjMTEuMDcyLTI2LjE4MiwxNi42ODgtNTMuOTgyLDE2LjY4OC04Mi42MjkKCWMwLTI4LjY0Ni01LjYxNS01Ni40NDUtMTYuNjg4LTgyLjYyN2MtMTAuNjkxLTI1LjI3Ny0yNS45OTMtNDcuOTc2LTQ1LjQ4LTY3LjQ2M2MtMTkuNDg2LTE5LjQ4Ny00Mi4xODYtMzQuNzg5LTY3LjQ2My00NS40OAoJQzMxMi40NDYsNDkuMzU1LDI4NC42NDcsNDMuNzQsMjU2LjAwMSw0My43NEwyNTYuMDAxLDQzLjc0eiIvPgo8cG9seWdvbiBmaWxsPSIjQzlDOUM5IiBwb2ludHM9IjIwMy40MjQsMzQzLjYzOSAxNjguMzczLDMwOC41NzYgMjIwLjk0OSwyNTYgMTY4LjM3MywyMDMuNDI1IDIwMy40MjQsMTY4LjM2MSAyNTYsMjIwLjk1IAoJMzA4LjU3NywxNjguMzYxIDM0My42MjcsMjAzLjQyNSAyOTEuMDUxLDI1NiAzNDMuNjI3LDMwOC41NzYgMzA4LjU3NywzNDMuNjM5IDI1NiwyOTEuMDUxICIvPgo8L3N2Zz4=">');

		_czmb.loadImage(_czmbConfig.img_path+"bottom", _czmbConfig.bot_images, "czmb-b", 'czmb-b-', 'png', function(){
			_czmbWide.go();
		});
		_czmb.loadImage(_czmbConfig.img_path+"top", _czmbConfig.top_images, "czmb-t", 'czmb-t-');

	};

	this.go = function(){
		_czmb.pushTrack(_czmbWide.cztk, 'print');
		var cztk = window._czmb.getCpnI(_czmbConfig.bannerType, 'tid');
        if (window._czmb.hasOwnProperty("checkViewability")) {
            window._czmb.checkViewability("#czmb-wide", cztk);
        }
		_czmbWide.banner.removeAttr("style");
		czQuery("#czmb-b").click(function() {
			_czmbWide.click();
			_czmbWide.banner.unbind("mouseleave");
			_czmbWide.banner.mouseenter();
		});
		czQuery("#czmb-t-close").click(function() {
			_czmbWide.close();
		});
		czQuery("#czmb-t").children().click(function(e) {
			_czmbWide.click(e);
		});
		_czmbWide.actions();
		_czmbWide.animations();
		_czmbWide.banner.show();
	};

	this.close = function() {
		TweenMax.to("#czmb-t-fireworks", .5, {autoAlpha: 0})
		this.anim.pause(0.5);
		this.topCongrats.pause(0);
		_czmbWide.fireworks.stop()
		this.bottomText.play();
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

	this.click = function(e) {
		if (_czmbWide.clickThrottle === true){
			return false;
		}	
		_czmbWide.clickThrottle = true;
		
		this.banner.mouseleave();
		this.banner.unbind("mouseenter");
		this.banner.unbind("mouseleave");

		_czmb.pushTrack(this.cztk, "click");
		window.open(_czmbWide.click_url);
		setTimeout(function() {
			_czmbWide.close();
			_czmbWide.clickThrottle = false;
		}, 800);
	};

	this.createBanner = function() {
		if (_czmbConfig.bannerType == 1) type = "czmb-wide";
		czQuery("body").append("<div id=" + type + " style='bottom:-500px'></div>");
		var banner = czQuery("#" + type);
		if (_czmb.getCpnI(1, 'upr') != "") {
			banner.append('<img src="' + _czmb.getCpnI(1, 'upr').replace('[timestamp]', _czmb.gtt()) + '" width="1" height="1" border="0" alt="" />');
		}
		banner.hide();
		return banner;
	}

	this.actions = function() {
		this.banner.unbind("mouseenter");
		this.banner.unbind("mouseleave");

		this.banner.mouseenter(function() {
			czQuery("#czmb-expansion-load").stop().animate({
				width: "100%"
			}, 800, function() {
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
				czQuery("#cz-overlay").click(function() {
					_czmbWide.close();
				});
				TweenMax.to("#cz-overlay", 0.5, {
					autoAlpha: 0.5
				});
			});
		});

		this.banner.mouseleave(function() {
			czQuery("#czmb-expansion-load").stop().animate({
				width: "0%"
			}, 500);
		});
	};

	this.playBanner = function() {
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

	this.animations = function() {
		var bottom = {
			"background": new TimelineMax(),
			"text": new TimelineMax()
		};
		
		bottom.background
			.from('#czmb-b-bg', .7, {autoAlpha: 0, y: 100, ease: Power3.easeOut}, "start")
			.staggerFrom(['#czmb-b-e1', '#czmb-b-e2', '#czmb-b-e3', '#czmb-b-estrela'], .7, {autoAlpha: 0, y: -75, x: -15, ease: Power3.easeOut}, .15, "-=.3")
			.staggerFrom(['#czmb-b-czmb', '#czmb-b-maos'], .7, {autoAlpha: 0, y: 75, ease: Power3.easeOut}, .15, "-=.1")
			.add(function(){ _czmbWide.lowStar.play() }, "start+=1.3")
			
			.add(function(){ _czmbWide.bottomText.play() }, "start+=1");

		_czmbWide.lowStar.pause(0);
		_czmbWide.lowStar.addLabel("start")
			.to('#czmb-b-estrela', .5, {rotation: 15, ease: Power3.easeInOut})
			.to('#czmb-b-estrela', 1, {rotation: -15, ease: Power3.easeInOut})
			.to('#czmb-b-estrela', .5, {rotation: 0, ease: Power3.easeInOut})
			.repeatDelay(3)
			.repeat(-1)

		_czmbWide.bottomText.pause(0);
		_czmbWide.bottomText.addLabel("start")
			.from('#czmb-b-t1', .7, {autoAlpha: 0, rotationX: 180, ease: Power3.easeOut}, 'start')
			.to('#czmb-b-t1', .5, {autoAlpha: 0, rotationX: 180, ease: Power3.easeIn}, '+=2.5')
			
			.from('#czmb-b-t2', .7, {autoAlpha: 0, rotationX: 180, ease: Power3.easeOut})
			.to('#czmb-b-t2', .2, {scale: 1.03}, '+=2.5')
			.to('#czmb-b-t2', .2, {scale: 1})
			.to('#czmb-b-t2', .2, {scale: 1.03})
			.to('#czmb-b-t2', .2, {scale: 1})
			.to('#czmb-b-t2', .5, {autoAlpha: 0, rotationX: 180, ease: Power3.easeIn}, '+=2.5')
			.repeat(-1)

		//TOP	
 		this.anim.pause(0);
		this.anim.addLabel("start")
			.from("#czmb-t", .25, {autoAlpha:0, height:0}, "start")
			.staggerFrom(["#czmb-t-BACKGROUND", "#czmb-t-maos"], .7, {autoAlpha: 0, y: 600, ease: Power3.easeOut}, .15, "start")
			.to("#czmb-t-fireworks", .5, {autoAlpha: 1}, "start")

			.addLabel("texts", "+=.8")
			.staggerFrom(["#czmb-t-e2", "#czmb-t-logo", "#czmb-t-e1", "#czmb-t-e3", "#czmb-t-czmb"], .7, {autoAlpha: 0, x: 100, ease: Power3.easeOut}, .15, "texts")
			.staggerFrom(["#czmb-t-e4", "#czmb-t-t1", "#czmb-t-t2", "#czmb-t-t3", "#czmb-t-t4", "#czmb-t-t5"], .7, {autoAlpha: 0, x: -100, ease: Power3.easeOut}, .15, "texts")

			.add(function () { 
				_czmbWide.fireworks.start() 
				updateFireworksOptions("start")
			}, "start+=.15")


			.add(function () {
				updateFireworksOptions()
				_czmbWide.topCongrats.play(0)
			})

			
		this.topCongrats.pause(0);
		this.topCongrats.addLabel("start")
			.to('#czmb-t-t5', .5, {rotation: 5, ease: Power3.easeInOut})
			.to('#czmb-t-t5', 1, {rotation: -5, ease: Power3.easeInOut})
			.to('#czmb-t-t5', .5, {rotation: 0, ease: Power3.easeInOut})
			.repeatDelay(3)
			.repeat(-1)

			
		czQuery("#czmb-t-btn").mouseenter(function(){
			TweenMax.to(czQuery(this),0.6,{scale:1.1});
		}).mouseout(function(){
			TweenMax.to(czQuery(this),0.6,{scale:1});
		});		

		function setFireworksOptions(){
			const container = document.querySelector("#czmb-t-fireworks")
			_czmbWide.fireworks = new Fireworks(container, {
				rocketsPoint: {
					min: 45,
					max: 55
				},
				hue: {
					min: 0,
					max: 360
				},
				delay: {
					min: 5,
					max: 5
				},
				speed: 1,
				acceleration: 0.99,
				friction: 0.9,
				gravity: 0,
				particles: 90,
				trace: 7,
				explosion: 6,
				brightness: {
					min: 50,
					max: 80,
					decay: {
						min: 0.015,
						max: 0.03
					}
				},
				boundaries: {
					visible: false
				},
			})
		}
		setFireworksOptions()

		function updateFireworksOptions(start){
			if (start){
				_czmbWide.fireworks.setOptions({
					delay: {
						min: 5,
						max: 5
					},
				})
				return
			}
			_czmbWide.fireworks.setOptions({
				delay: {
					min: 120,
					max: 120
				},
			})
		}
	};

}
_czmbWide.start();
czQuery.ajaxSetup({
	cache: false
});
