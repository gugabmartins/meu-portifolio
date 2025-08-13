document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        button.textContent = "Você Pressionou o botão!";
        button.style.backgroundColor = 'green';
    });
});
export {};
//# sourceMappingURL=app.js.map