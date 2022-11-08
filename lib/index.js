"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//errorMessage: `Post server has to be secure (https). '${urlChecker.protocol}' is not allowed`
function authenticationPopup(post_server, socket_id) {
    try {
        var urlChecker = new URL(post_server);
        if (urlChecker.protocol !== "https:") {
            return {
                error: false
            };
        }
    }
    catch (err) {
        return {
            error: true,
            errorMessage: "Invalid URL"
        };
    }
    // Fixes dual-screen position                             Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    var url = "https://auth.gruzservices.com/auth?website=".concat(post_server, "&key=").concat(socket_id);
    var width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : screen.width;
    var height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : screen.height;
    var systemZoom = width / window.screen.availWidth;
    var left = (width - 520) / 2 / systemZoom + dualScreenLeft;
    var top = (height - 570) / 2 / systemZoom + dualScreenTop;
    window.open(url, "Authenticate", "\n        scrollbars=yes,\n        width=".concat(520 / systemZoom, ", \n        height=").concat(570 / systemZoom, ", \n        top=").concat(top, ", \n        left=").concat(left, "\n        "));
    return {
        error: false
    };
}
exports.default = authenticationPopup;
