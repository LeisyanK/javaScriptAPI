// 1 часть
// Определение текущего размера окна браузера:
//  Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

const windowWidthElement = document.querySelector('.windowWidth');
const windowHeightElement = document.querySelector('.windowHeight');

windowWidthElement.textContent = window.innerWidth;
windowHeightElement.textContent = window.innerHeight;

window.addEventListener('resize', (event) => {
    windowWidthElement.textContent = window.innerWidth;
    windowHeightElement.textContent = window.innerHeight;
    console.log(window.innerHeight);
    console.log(window.innerWidth);
})

// 2 часть
// Подтверждение закрытия страницы:
//  Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.
window.addEventListener("beforeunload", (event) => {
    // Отмените событие, как указано в стандарте
    event.preventDefault();
    // Chrome требует установки возвратного значения
    event.returnValue = "";
    
})

// 3 часть
//  Управление историей переходов:
// ○ Используйте объект history для управления историей переходов на веб - странице.Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

const backBtn = document.querySelector('.backBtn');
const forwardBtn = document.querySelector('.forwardBtn');
backBtn.addEventListener('click', () => {
    window.history.back();
});
forwardBtn.addEventListener('click', () => {
    window.history.forward();
})
