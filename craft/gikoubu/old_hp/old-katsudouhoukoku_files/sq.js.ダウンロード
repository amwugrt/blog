var adFlg = 'sq';
var divAuFlg = false;

var url = 'http://' + document.domain+location.pathname;
var ref = document.referrer;

var siteAbsolute = false;

divAu();

function divAu() {

	if (divAuFlg) { return; }
	divAuFlg=true;

	if (!checkDisplayAd()) { return; }

	writeSqAd();

}

function checkDisplayAd() {

	if (isFrameset()) { return false; }

	if (parent.frames.length != 0) {
		if(!checkFrame()) { return false; }
	}

	return true;

}

function isFrameset() {

	var numFr = 0;
	numFr = frames.length;
	numFr = numFr - document.getElementsByTagName("iframe").length;
	isFr = (numFr > 0) ? true : false;

	return isFr;

}

function checkFrame() {

	var x = 0;
	var y = 0;

	if (document.body) { x = document.body.clientWidth; }
	if (document.body) { y = document.body.clientHeight; }

	return (x > 400 && y > 300) ? true : false;

}

// sq

function writeSqAd() {
	var cnt='<center><iframe style=\"border:none;\" width=160 height=785 border=0 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no src=\"https://bc-geocities.yahoo.co.jp/bc/sq?i=' + jps + '&u=' + encodeURIComponent(url) + '&ref=' + encodeURIComponent(ref) +'\"></iframe></center>';
	document.write("<div id=y_gc_div_adcntr class=y_gcss_ovrtr_cntr><div id=y_gc_div_mast class=y_gcss_ovrtr_msthd><img src=https://s.yimg.jp/images/clear.gif width=2 height=1><a href=\"https://rdsig.yahoo.co.jp/geo/geoguide/adsq/top/RV=1/RU=aHR0cHM6Ly9nZW9jaXRpZXMueWFob28uY28uanA-\" target=\"new\"><img src=https://s.yimg.jp/images/geo/ygeosm.gif alt=\"Yahoo!ジオシティーズ\" width=122 height=16 hspace=0 vspace=2 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=3 height=1><a href=\"https://rdsig.yahoo.co.jp/geo/geoguide/adsq/help/RV=1/RU=aHR0cHM6Ly93d3cueWFob28taGVscC5qcC9hcHAvaG9tZS9wLzU0OS8-\" target=\"new\"><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_help.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=1 height=1><a href=\"javascript:;\" onMouseDown=\"maximizeAu()\";><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_dwn_widg2.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=1 height=1><a href=\"javascript:;\" onClick=\"closeAu('y_gc_div_adcntr'); return false;\";><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_close_widg2.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=2 height=1></div><div id=y_gc_div_au1 class=y_gcss_ovrtr_au><img src=https://s.yimg.jp/images/clear.gif width=2 height=1><a href=\"https://rdsig.yahoo.co.jp/geo/geoguide/adsq/top/RV=1/RU=aHR0cHM6Ly9nZW9jaXRpZXMueWFob28uY28uanA-\" target=\"new\"><img src=https://s.yimg.jp/images/geo/ygeosm.gif alt=\"Yahoo!ジオシティーズ\" width=122 height=16 hspace=0 vspace=2 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=3 height=1><a href=\"https://rdsig.yahoo.co.jp/geo/geoguide/adsq/help/RV=1/RU=aHR0cHM6Ly93d3cueWFob28taGVscC5qcC9hcHAvaG9tZS9wLzU0OS8-\" target=\"new\"><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_help.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=1 height=1><a href=\"javascript:;\" onMouseDown=\"minimizeAu()\";><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_up_widg2.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=1 height=1><a href=\"javascript:;\" onClick=\"closeAu('y_gc_div_adcntr'); return false;\";><img src=https://s.yimg.jp/images/geo/adsq/geo_ad_close_widg2.gif width=14 height=13 hspace=0 vspace=6 border=0></a><img src=https://s.yimg.jp/images/clear.gif width=2 height=1><div class=y_gcss_ovrtr_au_cbox>"+cnt+"</div></div></div>");

	document.getElementById('y_gc_div_au1').style.visibility = "visible";
	document.getElementById('y_gc_div_au1').style.right = "0px";
	document.getElementById('y_gc_div_au1').style.visibility = "visible";
	document.getElementById('y_gc_div_mast').style.right = "0px";

	eval('setTimeout(\"minimizeAu()\", 30*1000);');

	return true;

}

function minimizeAu() {
	document.getElementById('y_gc_div_au1').style.display = "none";
}

function maximizeAu() {
	document.getElementById('y_gc_div_au1').style.display = "inline";
}

function closeAu() {
	document.getElementById('y_gc_div_au1').style.display = "none";
	document.getElementById('y_gc_div_mast').style.display = "none";
}
