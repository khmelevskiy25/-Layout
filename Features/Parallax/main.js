function parallax(event) {
    ;
    this.querySelectorAll('.layer').forEach(layer => {
        let speed =  layer.getAttribute('data-speed');// Получаем атрибут data-speed
        // console.log(layer.getAttribute('data-speed'));
        layer.style.transform = `translateX(${event.clientX*speed/900}px)` //Применяем свойство transform к layer
    });
}

document.addEventListener('mousemove', parallax) //функция для отслеживания движения мыши 