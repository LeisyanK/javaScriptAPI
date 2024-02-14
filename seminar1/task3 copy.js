function loadArticles(data) {
    const articles = document.querySelector('.articles');
    data.forEach((element) => {
        const article = document.createElement('article');
        const delButton = document.createElement('button');
        delButton.className = 'delete';
        delButton.innerText = "Удалить";
        // delButton.addEventListener('click', () => {
        //     data.splice(index, 1);
        // })

        const editButton = document.createElement('button');
        editButton.innerText = "Редактировать";
        const h2 = document.createElement('h2');
        h2.innerText = element.title;
        const p = document.createElement('p');
        p.innerHTML = element.text;
        article.appendChild(delButton);
        article.appendChild(editButton);
        article.appendChild(h2);
        article.appendChild(p);
        article.style.border = 'solid 1px gray';
        article.style.marginBottom = '8px'
        articles.appendChild(article);
    });  

    const delButtons = document.querySelectorAll('.delete');
    const allArticles = document.querySelectorAll('article');
    delButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            console.log(index);
            data.splice(index, 1);
            allArticles[index].remove();
        })
    })
}


let articles = [
    {
        title: "Первая статья",
        text: "Текст первой статьи"
    },
    {
        title: "Вторая статья",
        text: "Текст второй статьи"
    },
    {
        title: "Третья статья",
        text: "Текст третьей статьи"
    }
]

loadArticles(articles);

const addButton = document.querySelector('.addButton');
addButton.addEventListener();