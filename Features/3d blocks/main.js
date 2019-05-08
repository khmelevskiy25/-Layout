const cards = document.querySelectorAll('.card'); // Получаем все элементы с лассом (card)

for (let i = 0; i < cards.length; i++) { //Цикл для получения все блоков
    const card = cards[i];
    card.addEventListener('mousemove', startRotate); //Отслеживаем событие наведения мыши
    card.addEventListener('mouseout', stopRotate); //Сбрасывает параметры rotate
}

function startRotate(event) { //Функция которая будет вращать блок
    const cardItem = this.querySelector('.card-item'); // Получаем элемент вложенный в card
    // cardItem.innerText = event.offsetX + ' ' + event.offsetY; //Этот параметр показывает на какой позиции находится курсор по оси X
    // console.log(cardItem.style); //Обращение к стилям
    // cardItem.style.transform = 'rotateX(20deg)' //При наведении мышью выполняется свойство rotateX
    const halfHeight = cardItem.offsetHeight / 2; //Находим высоту и разделить её на 2
    const halfWidth = cardItem.offsetWidth / 2; //Находим ширину и разделить её на 2
    cardItem.style.transform = 'rotateX('
    + - (event.offsetY - halfHeight) / 4 + 'deg) rotateY('
    + - (event.offsetX - halfHeight) / 7 + 'deg)';
} 

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item'); 
    cardItem.style.transform = 'rotateX(0)'; // Сбрасываем параметры на 0
} 
