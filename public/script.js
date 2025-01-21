document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-inner");

    if (!cursor) {
        console.error("Element '.cursor-inner' not found!");
        return;
    }

    document.addEventListener("mousemove", e => {
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
    });

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
    console.log('hello');

})

// window.onload = function () {
//     alert('Page has fully loaded!');
//   };

// Typewritter Effect
// document.addEventListener('DOMContentLoaded', () => {
//     const texts = [
//         "DEVELOPER"
//     ]

//     let speed = 100;

//     const textElements = document.querySelector(".typewriter-text");

//     let textIndex = 0;
//     let characterIndex = 0;

//     // window.onload = typeWriter();

//     function typeWriter() {
//         console.log('Hello');
//         if (characterIndex < texts[textIndex].length) {
//             document.querySelector(".typewriter-text").innerHTML += texts[textIndex].charAt(characterIndex);
//             characterIndex++;
//             setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(eraseText, 1000);
//         }
//     }


//     function eraseText() {
//         if (textElements.innerHTML.length > 0) {
//             textElements.innerHTML = textElements.innerHTML.slice(0, -1);
//             setTimeout(eraseText, 50);
//         } else {
//             textIndex = [textIndex + 1] % texts.length;
//             characterIndex = 0;
//             setTimeout(typeWriter, 500);
//         }
//     }

//     window.onload = typeWriter;

// });