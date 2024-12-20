let TLDs = document.querySelectorAll(".modal-content .list-group-item");
let names = document.querySelectorAll(".modal-content .list-group-item .notranslate");
let buttons = document.querySelectorAll(".modal-content .list-group-item button");

for (let i = 0; i <= TLDs.length; i++){
setTimeout(function timer() {
    if (buttons[i].classList.contains("btn-danger")){
    buttons[i].click();
    console.log(`new TLD ${names[i].innerHTML} enabled!`);
    } else {
        console.log(`${names[i].innerHTML} already enabled, skipping to next, do not close the page...`)
    }
  }, i * 1000);
}
