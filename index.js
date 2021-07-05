const webPage = document.getElementById("webPage")
const html = document.getElementById("html")
const css = document.getElementById("css")
const js = document.getElementById("js")
const disableHtml = document.getElementById("disableHtml")
const disableCss = document.getElementById("disableCss")
const disableJavascript = document.getElementById("disableJavascript")
const disableOutput = document.getElementById("disableOutput")

disableHtml.addEventListener("click", () => {
    html.classList.toggle("show")
    disableHtml.classList.toggle("changeColor")
})
disableOutput.addEventListener("click", () => {
    webPage.classList.toggle("show")
    disableOutput.classList.toggle("changeColor")
})
disableJavascript.addEventListener("click", () => {
    js.classList.toggle("show")
    disableJavascript.classList.toggle("changeColor")
})
disableCss.addEventListener("click", () => {
    css.classList.toggle("show")
    disableCss.classList.toggle("changeColor")
})

html.value =
    `<div id="root">
<h1>Welcome to CodePlay</h1>
</div>`

css.value =
    `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

#root{
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
}`

js.value =
    `const root = document.querySelector("#root>h1");
root.style.color="red"`

const makePage = () => {
    let blob = new Blob([`<html><head><style>${css.value}</style></head><body>${html.value}<script>${js.value}</script></body></html>`], { type: "text/html" });
    const link = URL.createObjectURL(blob);
    webPage.src = link
}

makePage()
