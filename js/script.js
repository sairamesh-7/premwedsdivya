/**
 * @author Pragada Sai Ramesh
 * Wedding Invitation — Prem & Divya, 7 May 2026
 */

(function ($) {
    "use strict";
    if ($.fn.sakura) {
        $('.sakura-falling').sakura();
    }
})(jQuery);

/* ── Play audio on first interaction ───────────────────────── */
$(document).one('click touchstart', function () {
    var audio = document.getElementById("my_audio");
    if (audio) {
        audio.play().catch(function () { /* autoplay blocked — silent fail */ });
    }
    console.log('Kalyanathinu varane');
});

/* ── Countdown Timer ──────────────────────────────────────── */
// Target: May 7, 2026 at 10:31 PM IST
var countDownDate = new Date("May 7, 2026 22:31:00").getTime();

var x = setInterval(function () {
    var now      = new Date().getTime();
    var distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(x);
        var el = document.getElementById("countdown");
        if (el) {
            el.innerHTML = "<p style='color:#e25555;font-family:Arvo,serif;font-size:clamp(1rem,3vw,1.2rem);text-align:center;padding:12px;'>🎉 The auspicious moment is here! Bless Prem &amp; Divya!</p>";
        }
        return;
    }

    function pad(n) { return n < 10 ? "0" + n : String(n); }

    var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dEl = document.getElementById("days");
    var hEl = document.getElementById("hours");
    var mEl = document.getElementById("minutes");
    var sEl = document.getElementById("seconds");

    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(minutes);
    if (sEl) sEl.textContent = pad(seconds);

}, 1000);

/* ── Console Easter Egg ───────────────────────────────────── */
var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0,0,0,0.3)',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = ['color:#FF6C37','display:block','line-height:40px','font-weight:bold','font-size:32px'].join(';');
var styles2 = ['color:teal','display:block','line-height:40px','font-weight:bold','font-size:32px'].join(';');

console.log('\n\n%c SAVE THE DATE: 7th May, 2026!', styles);
console.log('%cYour presence is requested!%c\n\nWith love: Prem & Divya', styles1, styles2);
console.log('%cKalyanathinu varane!\n\n', 'color:yellow;background:tomato;font-size:24pt;font-weight:bold');