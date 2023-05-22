// NAVBAR TOGGLE
'use strict';

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function() {
    header.classList.toggle("active");
});

// ORDER ONLINE
if (typeof ooLogError != 'function') {
    var ooLogError = function(error) {
        var req = new XMLHttpRequest();
        var payload = JSON.stringify({
            url: document.location.href,
            line: error.line,
            stack: error.stack
        });
        var params = 'message=' + encodeURIComponent(error.name) + '&payload=' + encodeURIComponent(payload) + '&type=embed&level=error';
        req.open('POST', 'https://api.orderonline.id/log', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(params);
    };
}
try {
    if (typeof ooEmbedScript != 'function') {
        var ooEmbedScript = function() {
            ! function(w, d, e, v, id, t, s) {
                if (d.getElementById(id)) return;
                t = d.createElement(e);
                t.async = !0;
                t.src = v;
                t.id = id;
                s = d.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://cdn.orderonline.id/js/embed-slim.min.js?v=6.3.5', 'oo-embed-js');
        };
    }
    if (typeof orderOnlineInit != 'function') {
        var orderOnlineInit = function(w, n) {
            if (w.ooe) return;
            n = w.ooe = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!w._ooe) w._ooe = n;
            n.push = n;
            n.loaded = !0;
            n.version = '6.3.5';
            n.queue = [];
        };
    }
    orderOnlineInit(window);
    ooe('setup', 'redirect', 'https://promohebat.orderonline.id');
    ooe('init', 'promohebat', 'interior-cleaner', null, 'oo-embed-form-interior-cleaner-1862', {
        "mode": "page",
        "action": "Klik untuk pemesanan",
        "title": "Form Pemesanan",
        "triggerPixel": false,
        "triggerGtm": false
    });
    if (!window.jQuery) {
        ! function(w, d, e, v, id, t, s) {
            if (d.getElementById(id)) return;
            t = d.createElement(e);
            t.async = !0;
            t.src = v;
            t.id = id;
            t.addEventListener('load', ooEmbedScript);
            s = d.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://cdn.orderonline.id/js/vendor/jquery.min.js', 'oo-embed-jquery');
    } else {
        ooEmbedScript();
    }
} catch (e) {
    ooLogError(e);
    throw e;
}