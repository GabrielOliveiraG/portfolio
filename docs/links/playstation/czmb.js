_czmbConfig = {
	img_path: "",
	// img_path: "campanhas/2020/second/sony_ps_ghost_of_tsushima_wide_vs3/",
	bannerType: 1,
	css: '#czmb-b-bg{position:absolute;left:0;bottom:0;width:730px;height:50px;z-index:1}#czmb-b-ghost{position:absolute;left:483px;bottom:-1px;width:238px;height:98px;z-index:2}#czmb-b-t3{position:absolute;left:156px;bottom:12px;width:309px;height:17px;z-index:2}#czmb-b-t2{position:absolute;left:226px;bottom:12px;width:149px;height:21px;z-index:3}#czmb-b-logo2{position:absolute;left:287px;bottom:5px;width:139px;height:39px;z-index:4}#czmb-b-bg-logo{position:absolute;left:0;bottom:2px;width:133px;height:48px;z-index:5}#czmb-b-logo{position:absolute;left:8px;bottom:26px;width:62px;height:13px;z-index:6}#czmb-b-cd{position:absolute;left:640px;bottom:7px;width:71px;height:83px;z-index:7}#czmb-t-bg{position:absolute;left:0;bottom:4px;width:1000px;height:556px;z-index:1}#czmb-t-mask{position:absolute;left:0;bottom:0;width:1000px;height:370px;z-index:2;overflow:hidden}#czmb-t-logo2{position:absolute;left:107px;bottom:129px;width:349px;height:98px;z-index:3}#czmb-t-video{position:absolute;left:541px;bottom:318px;width:401px;height:226px;z-index:4}#czmb-t-cd{position:absolute;left:637px;bottom:58px;width:211px;height:258px;z-index:4}#czmb-t-bg-logo{position:absolute;left:0;bottom:298px;width:213px;height:76px;z-index:5}#czmb-t-logo{position:absolute;left:28px;bottom:335px;width:73px;height:18px;z-index:6}#czmb-t-low{position:absolute;left:810px;bottom:139px;width:190px;height:88px;z-index:7}#czmb-t-t-low{position:absolute;left:843px;bottom:173px;width:155px;height:20px;z-index:8}#czmb-t-barra{position:absolute;left:531px;bottom:307px;width:420px;height:250px;z-index:8}#czmb-t-btn{position:absolute;left:179px;bottom:43px;width:205px;height:43px;z-index:10}#czmb-t-o3{position:absolute;left:63px;bottom:43px;width:48px;height:34px;z-index:11}#czmb-t-o2{position:absolute;left:23px;bottom:44px;width:33px;height:33px;z-index:12}#czmb-t-t-legal{position:absolute;left:420px;bottom:41px;width:549px;height:23px;z-index:13}.czmb-t-momiji{position:absolute;width:15px;height:15px;background:url(top/czmb-t-momiji.png);background-size:100% 100%;z-index:13}#czmb-t-video{position:absolute;z-index:14;width:100%;height:200%;left:0;bottom:-50%;pointer-events:none}#czmb-t-video-mask{position:absolute;left:541px;bottom:318px;width:401px;height:226px;z-index:14;overflow:hidden}#czmb-wide{overflow:visible;position:fixed;z-index:2147483647 !important;bottom:0;left:50%;margin-left:-365px;width:730px;height:50px;cursor:pointer}#czmb-b{overflow:visible;position:absolute;left:0;bottom:0;width:730px !important;height:50px !important;font-size:35px;color:#fff;text-shadow:2px 2px 10px #004a69;cursor:pointer;line-height:50px;text-align:center;z-index:1 !important}#czmb-t{position:absolute;margin-left:-135px;left:0;width:1000px !important;height:600px !important;cursor:pointer;bottom:0;background-color:#fff;z-index:2 !important;overflow:hidden;background:0}#czmb-t-close{position:fixed;left:50%;margin-left:475px;bottom:-100px;z-index:2147483646 !important;width:50px;height:50px}#czmb-expansion-load{position:absolute;left:0;bottom:0;height:3px;background-color:#00f;z-index:90000;width:0}',
	bot_images: ['bg','ghost','t3','t2','logo2','bg-logo','logo','cd'],
	top_images: ['bg','barra'],
	videoId : "Ol42ay55tJY"
};

_czmbWide = new function() {
	this.anim;
	this.momiji;
	this.bottomText;
	this.player;
	this.banner;
	this.cztk;
	this.click_url;
	this.clickThrottle;

	this.start = function() {
				
		czQuery("head").append("<style type='text/css'>" + _czmbConfig.css + "</style>");

		this.anim = new TimelineMax();
		this.momiji = new TimelineMax();
		this.bottomText = new TimelineMax();
		this.clickThrottle = false;
		this.cztk = _czmb.getCpnI(_czmbConfig.bannerType, 'tid');
		this.click_url = _czmb.getCpnI(1, "ucl").replace("[timestamp]", _czmb.gtt());
		this.banner = _czmbWide.createBanner();

		var app =
			"<div id='czmb-b'>" +
				"<div id='czmb-expansion-load'></div>" +
			"</div>" +
			"<div id='czmb-t'>" + 
				"<div id='czmb-t-mask'></div>" +
				"<div id='czmb-t-video-mask'>" +
					"<div id='czmb-t-video'></div>" +
				"</div>" +
			"</div>";
		this.banner.append(app);
		this.banner.append('<img id="czmb-t-close" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIGZpbGw9IiMzQjNCM0IiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0Mi4yNiIvPgo8cGF0aCBmaWxsPSIjQzlDOUM5IiBkPSJNMjU2LjAwMSw2My43NGMxMDYuMTg0LDAsMTkyLjI2LDg2LjA3OCwxOTIuMjYsMTkyLjI2YzAsMTA2LjE4NC04Ni4wNzYsMTkyLjI2LTE5Mi4yNiwxOTIuMjYKCWMtMTA2LjE4MiwwLTE5Mi4yNi04Ni4wNzYtMTkyLjI2LTE5Mi4yNkM2My43NDEsMTQ5LjgxOCwxNDkuODE5LDYzLjc0LDI1Ni4wMDEsNjMuNzQgTTI1Ni4wMDEsNDMuNzQKCWMtMjguNjQ2LDAtNTYuNDQ2LDUuNjE1LTgyLjYyNywxNi42ODhjLTI1LjI3OCwxMC42OTEtNDcuOTc2LDI1Ljk5My02Ny40NjMsNDUuNDhjLTE5LjQ4NywxOS40ODctMzQuNzg5LDQyLjE4NS00NS40ODEsNjcuNDYzCglDNDkuMzU2LDE5OS41NTUsNDMuNzQxLDIyNy4zNTQsNDMuNzQxLDI1NmMwLDI4LjY0Niw1LjYxNSw1Ni40NDcsMTYuNjg4LDgyLjYyOWMxMC42OTIsMjUuMjc3LDI1Ljk5NCw0Ny45NzUsNDUuNDgxLDY3LjQ2MwoJYzE5LjQ4NywxOS40ODYsNDIuMTg1LDM0Ljc4OSw2Ny40NjMsNDUuNDhjMjYuMTgxLDExLjA3Miw1My45ODEsMTYuNjg4LDgyLjYyNywxNi42ODhjMjguNjQ2LDAsNTYuNDQ2LTUuNjE1LDgyLjYyOC0xNi42ODgKCWMyNS4yNzctMTAuNjkxLDQ3Ljk3Ny0yNS45OTQsNjcuNDYzLTQ1LjQ4YzE5LjQ4Ny0xOS40ODgsMzQuNzg5LTQyLjE4Niw0NS40OC02Ny40NjNjMTEuMDcyLTI2LjE4MiwxNi42ODgtNTMuOTgyLDE2LjY4OC04Mi42MjkKCWMwLTI4LjY0Ni01LjYxNS01Ni40NDUtMTYuNjg4LTgyLjYyN2MtMTAuNjkxLTI1LjI3Ny0yNS45OTMtNDcuOTc2LTQ1LjQ4LTY3LjQ2M2MtMTkuNDg2LTE5LjQ4Ny00Mi4xODYtMzQuNzg5LTY3LjQ2My00NS40OAoJQzMxMi40NDYsNDkuMzU1LDI4NC42NDcsNDMuNzQsMjU2LjAwMSw0My43NEwyNTYuMDAxLDQzLjc0eiIvPgo8cG9seWdvbiBmaWxsPSIjQzlDOUM5IiBwb2ludHM9IjIwMy40MjQsMzQzLjYzOSAxNjguMzczLDMwOC41NzYgMjIwLjk0OSwyNTYgMTY4LjM3MywyMDMuNDI1IDIwMy40MjQsMTY4LjM2MSAyNTYsMjIwLjk1IAoJMzA4LjU3NywxNjguMzYxIDM0My42MjcsMjAzLjQyNSAyOTEuMDUxLDI1NiAzNDMuNjI3LDMwOC41NzYgMzA4LjU3NywzNDMuNjM5IDI1NiwyOTEuMDUxICIvPgo8L3N2Zz4=">');
	

		 /* Preparando Vídeo */
		 this.videoReady = false;
		 this.lowReady = false;

		_czmbWide.player = new _czmb.video({
			id : _czmbConfig.videoId,
			div : "czmb-t-video",
			height: '100%',
			width: '100%',
			onStart: function(){
				_czmbWide.videoReady = true;
				if (_czmbWide.lowReady) _czmbWide.go();
			}
		});
		
		_czmb.loadImage(_czmbConfig.img_path+"bottom", _czmbConfig.bot_images, "czmb-b", 'czmb-b-', 'png', function(){
			_czmbWide.go();
		});
		_czmb.loadImage(_czmbConfig.img_path+"top", _czmbConfig.top_images, "czmb-t", 'czmb-t-');
		_czmb.loadImage(_czmbConfig.img_path+"top", ['logo2','cd','bg-logo','logo','low','t-low','btn','o3','o2', 't-legal'], "czmb-t-mask", 'czmb-t-');

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
		this.anim.pause(0.5);
		this.momiji.pause(0.5);
		document.querySelectorAll(".czmb-t-momiji").forEach(e => e.parentNode.removeChild(e));
		this.bottomText.play();
		TweenMax.to("#czmb-b", .1, {autoAlpha:1})
		_czmbWide.player.stop();
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
				TweenMax.to("#czmb-b", .1, {autoAlpha:0})
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
			.addLabel("start")
			.from('#czmb-b-bg, #czmb-b-ghost, #czmb-t-mask', .7, {autoAlpha: 0, y: 100}, "start")
			.from("#czmb-b-bg-logo", .7, {autoAlpha:0, x:-20, ease:Power3.easeOut}, "start+=.5")
			.from("#czmb-b-logo", .7, {autoAlpha:0}, "start+=.7")
			.from("#czmb-b-cd", .7, {autoAlpha:0, rotationY:-90, ease:Back.easeOut}, "start+=.9")
			.addCallback(function(){
				_czmbWide.bottomText.play();
			}, "start+=1.1");
		
		_czmbWide.bottomText.pause(0);
		_czmbWide.bottomText
			.addLabel("start")
			.from("#czmb-b-logo2", .7, {autoAlpha:0}, "start")
			.to('#czmb-b-logo2', .7, {autoAlpha:0}, "start+=2.7")

			.from("#czmb-b-t2", .7, {autoAlpha:0, y:25, ease:Power2.easeOut}, "start+=3.4")
			.to("#czmb-b-t2", .7, {autoAlpha:0, y:-25, ease:Power2.easeIn}, "start+=7")

			.from("#czmb-b-t3", .7, {autoAlpha:0, y:25, ease:Power2.easeOut}, "start+=7.7")
			.to("#czmb-b-t3", .7, {autoAlpha:0, y:-25, ease:Power2.easeIn}, "start+=10")
			.repeat(-1)
	

		this.anim.pause(0);		
		this.anim
			.addLabel('start')
				.from("#czmb-t", .25, {autoAlpha:0, height:0}, "start")
				.from("#czmb-t-bg", .7, {autoAlpha:0, y: 600}, "start")
				.addCallback(function(){
					_czmbWide.momiji.play();
				}, "start")
				.from("#czmb-t-logo2", .7, {autoAlpha:0}, "start+=.5")
				
				.from("#czmb-t-bg-logo", .7, {autoAlpha:0, y:-100, x:-100, ease:Power3.easeOut}, "start+=.7")
				.from("#czmb-t-barra", .7, {autoAlpha:0, scaleX:0, transformOrigin:"left center", ease:Power3.easeOut},"start+=.9")
				.from("#czmb-t-logo", .7, {autoAlpha:0}, "start+=1.1")
				.from("#czmb-t-cd", .7, {autoAlpha:0, y:20, ease:Power3.easeOut}, "start+=1.2")
				.from("#czmb-t-video", .7, {autoAlpha:0}, "start+=1.4")
				.addCallback(function () {
					_czmbWide.player.play();
				}, "start+=1.4")
				.from("#czmb-t-low", .7, {autoAlpha:0, x:50, ease:Power3.easeOut}, "start+=1.6")
				.from("#czmb-t-t-low", .7, {autoAlpha:0, ease:Power3.easeOut}, "start+=1.8")
				.staggerFrom(["#czmb-t-o2", "#czmb-t-o3", "#czmb-t-t-legal"], .7, {autoAlpha:0, y:20, ease:Power3.easeOut}, "start+=2")
				.from("#czmb-t-btn", .7, {autoAlpha:0, scale:1.2, ease:Back.easeOut}, "start+=2.3");			

		this.momiji.pause(0);		
		this.momiji.addLabel("fall")
			.addCallback(function(){
				var falling = true;

				var total = 50;
				var czmbT = document.getElementById("czmb-t"),	w = window.innerWidth , h = window.innerHeight;
				 
				 for (i=0; i<total; i++){ 
				   var Div = document.createElement('div');
				   TweenLite.set(Div,{attr:{class:'czmb-t-momiji'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
				   czmbT.appendChild(Div);
				   animmMomiji(Div);
				 }
				 
				function animmMomiji(elm){
				   TweenMax.to(elm,R(6,15),{y:600,ease:Linear.easeNone,repeat:-1,delay:-15});
				   TweenMax.to(elm,R(4,8),{x:'+=500',repeat:-1,yoyo:true,ease:Sine.easeInOut});
				   TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
				 };

				function R(min,max) {return min+Math.random()*(max-min)};
			}, "fall+=1")

		czQuery("#czmb-t-btn").mouseenter(function(){
			TweenMax.to(czQuery(this),0.6,{scale:1.1});
		}).mouseout(function(){
			TweenMax.to(czQuery(this),0.6,{scale:1});
		});		
	};

}

/* . . . Aguardando o YouTubeIframeAPI ser totalmente carregado . . . */
if(typeof(YT) == 'undefined'){
	var youtube = document.createElement('script');
	youtube.src = "https://www.youtube.com/iframe_api";

	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(youtube, firstScriptTag);
	function onYouTubeIframeAPIReady() {
		_czmbWide.start();
		czQuery.ajaxSetup({
			cache: false
		});
	}
} else {
	_czmbWide.start();
	czQuery.ajaxSetup({
		cache: false
	});
}




