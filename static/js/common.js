var wap = {
    rem : function(){
        (function (doc, win) {
            var docEl = doc.documentElement, recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) {
                    return
                }
//              var w = 20 * (clientWidth / 320);
//              if (w > 46.875) {
//                  w = 46.875
//              }
             var w = 100 * (clientWidth / 750);
             if (w > 100) {
                 w = 100
             }

				// var w = 100 * (clientWidth / 640);
				//                 if (w > 117.1875) {
				//                     w = 117.1875
				// }
                docEl.style.fontSize = w + "px"
            };

            if (!doc.addEventListener) {
                return
            };

            if ("orientationchange" in window) {
                win.addEventListener("orientationchange", recalc, false)
            };

            win.addEventListener("resize", recalc, false);
            win.addEventListener("load", recalc, false);
            doc.addEventListener("DOMContentLoaded", recalc, false);
            recalc();

        })(document, window);
    },
    init : function () {
        wap.rem();
    }
};

isTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

var click = isTouch ? 'touchend' : 'click';


window.onload= function(){
    wap.init();
}
