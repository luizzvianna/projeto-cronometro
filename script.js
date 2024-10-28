let cron;
let h2;
let startTime;
let elapsedTime = 0;

document.addEventListener("DOMContentLoaded", function () {
    h2 = document.getElementById("h2");

    function iniciarTime() {
        if (!cron) {
            startTime = Date.now() - elapsedTime;
            const atualizarTexto = function () {
                elapsedTime = Date.now() - startTime;
                let date = new Date(elapsedTime);
                let minutes = String(date.getUTCMinutes()).padStart(2, '0');
                let seconds = String(date.getUTCSeconds()).padStart(2, '0');
                let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

                h2.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
            };
            cron = setInterval(atualizarTexto, 10);
        }
    }

    function stop() {
        clearInterval(cron);
        cron = null;
    }

    function reset() {
        stop();
        elapsedTime = 0;
        h2.innerHTML = "00:00:000";
    }

    window.iniciarTime = iniciarTime;
    window.stop = stop;
    window.reset = reset;
});