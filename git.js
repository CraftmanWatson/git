const result = document.querySelector(".result");
const btn = document.querySelector(".Btn");

result.textContent = "There's something i wanna say";
btn.textContent = "What is it?";

let isStatus = false

btn.addEventListener('click', function() {
    if (!isStatus) {
        isStatus = true;
        result.textContent = 'semangat!';
        btn.textContent = "Makasih!";
    } else {
        btn.classList.add("hide");
        result.classList.add('hide');
    }
})