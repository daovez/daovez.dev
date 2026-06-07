const person = document.querySelector(".person");
const card = document.querySelector(".card");

if (person && card) {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (rect.width / 2 - x) / 45;
        const moveY = (rect.height / 2 - y) / 45;

        person.style.transform = `
            translateX(-50%)
            translate(${moveX}px, ${moveY}px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        person.style.transform = "translateX(-50%) translate(0, 0)";
    });
}