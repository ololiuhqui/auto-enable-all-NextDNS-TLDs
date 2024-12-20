let TLDs = document.querySelectorAll(".modal-content .list-group-item");
let names = document.querySelectorAll(".modal-content .list-group-item .notranslate");
let buttons = document.querySelectorAll(".modal-content .list-group-item button");

for (let i = 0; i <= TLDs.length; i++){
setTimeout(function timer() {
    if (buttons[i].classList.contains("btn-primary")){
    buttons[i].click();
    console.log(`new TLD ${names[i].innerHTML} disabled!`);
    } else {
        console.log(`${names[i].innerHTML} already disabled, skipping to next, do not close the page...`)
    }
  }, i * 300);
}
