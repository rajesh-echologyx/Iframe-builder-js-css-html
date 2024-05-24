
function mainJS(doc) {
  var $readMoreLink = $(doc).find(".read-more");

  $readMoreLink.on("click", function (e) {
    e.preventDefault();
    $(this).parent().next("div").show();
    $(this).remove();
  });

}


(function checkIframeLoaded() {

  var iframe = document.querySelector('#elx-chatbot iframe');
  if(iframe){
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // Check if loading is complete
    if (iframeDoc.readyState == 'complete') {
      mainJS(iframeDoc);
      return;
    }
  }

  window.setTimeout(checkIframeLoaded, 100);
})();