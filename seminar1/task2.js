// Вы должны создать веб - страницу, которая позволяет пользователю динамически 
// управлять элементами на странице.Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый 
// квадратный элемент(<div>) с размерами 100x100 пикселей. Этот элемент
//     должен иметь класс .box и содержать текст, указывающий порядковый номер
//     элемента (1, 2, 3 и так далее).
//     3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
//     элемент, если таковой имеется.
//     4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
//     добавленного элемента и добавляется на страницу.
//     5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
//     6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
//     любом количестве.

const addBox = document.querySelector('#addBox');
const removeBox = document.querySelector('#removeBox');
const cloneBox = document.querySelector('#cloneBox');
const boxes = document.querySelector('.boxes');

let count = 3;
addBox.addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    count++;
    newBox.innerText = count;
    // newBox.innerHTML = `<div class="box">${count}</div>`;
    boxes.appendChild(newBox);
});

removeBox.onclick = function() {
    console.log(boxes.lastChild);
    // boxes.lastChild.remove();
    boxes.removeChild(boxes.lastChild);
    if (count > 0) {
        count--;
    }
};

cloneBox.addEventListener('click', (event) => {
    // event.target.
    const clone = boxes.lastChild.cloneNode(true);
    // clone.innerHTML = `<div class="box">${count}</div>`;
    boxes.appendChild(clone);
})