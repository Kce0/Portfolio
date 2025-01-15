const txt = `"강채은"\n 프론트엔드 개발자`;
const span = document.querySelector(".SkySec-txt");

let i = 0;

function writeTxt() {
  if (i < txt.length) {
    let textContent = txt.charAt(i);
    span.innerHTML += textContent === "\n" ? "</br>" : textContent;
    i++;
  }
}
setInterval(writeTxt, 250);
