//サービスワーカー
if (navigator.serviceWorker) {
    navigator.serviceWorker.register ('./service_worker.js')
}

//ハンバーガー.
$(function () {
	$('.btn-gNav').on("click", function () {
		$('.gNav').toggleClass('open');  // メニューにopenクラスをつけ外しする.
	});
});