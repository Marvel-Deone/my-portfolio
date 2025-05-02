document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-inner");

    if (!cursor) {
        console.error("Element '.cursor-inner' not found!");
        return;
    }

    document.addEventListener("click", () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });
});

window.addEventListener("scroll", function () {
    var nav = document.querySelector(".my-nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});