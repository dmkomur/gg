const wrap = document.getElementById("modalWrap");
const backdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("modalClose");

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        openModal();
    });
});

function openModal() {
    wrap.classList.add("show");
    wrap.setAttribute("aria-hidden", "false");

    closeBtn.focus();
    document.addEventListener("keydown", onKeyDown);
}

function closeModal() {
    wrap.classList.remove("show");
    wrap.setAttribute("aria-hidden", "true");
    document.removeEventListener("keydown", onKeyDown);
}

function onKeyDown(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal();
    }
}

backdrop.addEventListener("click", () => {
    closeModal();
});

closeBtn.addEventListener("click", () => {
    closeModal();
});

const modal = wrap.querySelector(".modal");
modal.addEventListener("click", (e) => {
    e.stopPropagation();
});

const getBtn = document.getElementById("get");

getBtn.addEventListener("click", () => {
    console.log("Запрос");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
            console.log("Вilдповiдь:", data);
        })
        .catch((error) => {
            console.error("Помилка:", error);
        });
});
