// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const intervalInput = document.getElementById("interval");
const eventHandler = document
  .getElementById("save_lincoln")
  .addEventListener("click", () =>
    saveLincoln(parseInt(intervalInput.value, 10))
  );
const foreground = document.getElementById("foreground");
const hiddenMessage = document.getElementById("hidden-message");

function saveLincoln(interval) {
  if (isNaN(interval)) {
    interval = 10000;
  }
  let opacity = 1;
  let timer = setInterval(function() {
    if (interval <= 0.1) {
      clearInterval(timer);
      foreground.style.display = "none";
    }
    foreground.style.opacity = opacity;
    opacity -= opacity * 0.01;
  }, interval);
}
