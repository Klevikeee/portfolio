document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".zoom").forEach(kep => {
        kep.addEventListener("click", () => {
            kep.classList.toggle("nagy");
        });
    });
});
