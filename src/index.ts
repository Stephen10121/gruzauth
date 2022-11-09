type ReturnVal = {
    error: boolean;
    errorMessage?: string;
    trigger?: () => boolean;
}
//errorMessage: `Post server has to be secure (https). '${urlChecker.protocol}' is not allowed`
export default function authenticationPopup(post_server: string, socket_id: string): ReturnVal {
    try {
        const urlChecker = new URL(post_server);
        if (urlChecker.protocol !== "https:") {
            return {
                error: false
            }
        }
    } catch(err) {
        return {
            error: true,
            errorMessage: "Invalid URL"
        };
    }
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const url = `https://auth.gruzservices.com/auth?website=${post_server}&key=${socket_id}`;
    const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
    const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 520) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 570) / 2 / systemZoom + dualScreenTop;

    function open() {
        window.open(url, "Authenticate", `scrollbars=yes, width=${520 / systemZoom}, height=${570 / systemZoom}, top=${top}, left=${left}`);
        return true;
    }
    return {
        trigger: open,
        error: false
    }
}