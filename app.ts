



document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button') as HTMLButtonElement;
    const text = document.getElementById('text') as HTMLParagraphElement;

    button.addEventListener('click', () => {
        button.textContent = "Você Pressionou o botão!";
        button.style.backgroundColor = 'green';
        if (text) {
        text.textContent = "Parabéns, você clicou no botão!";
        text.style.color = 'brown';
        }
    });
});