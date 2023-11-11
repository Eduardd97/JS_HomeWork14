const scrollToTop = document.getElementById("scroll-to-top")
const scrollToBottom = document.getElementById("scroll-to-bottom")

scrollToTop.onclick = () => {
    window.scrollTo({ top: 0});
}

scrollToBottom.onclick = () => {
    window.scrollTo({ top: document.body.scrollHeight});
}