

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button') as HTMLButtonElement;

    button.addEventListener('click', () => {
        button.textContent = "Você Pressionou o botão!";
        button.style.backgroundColor = 'green';
    });
});