function loadArticles(articles, data) {
    // const articles = document.querySelector('.articles');

    data.forEach((element) => {
        addArticle(articles, element);

        // const article = document.createElement('article');
        // const delButton = document.createElement('button');
        // delButton.className = 'delete';
        // delButton.innerText = "Удалить";
        // // delButton.addEventListener('click', () => {
        // //     data.splice(index, 1);
        // // })

        // const editButton = document.createElement('button');
        // editButton.innerText = "Редактировать";
        // const h2 = document.createElement('h2');
        // h2.innerText = element.title;
        // const p = document.createElement('p');
        // p.innerHTML = element.text;
        // article.appendChild(delButton);
        // article.appendChild(editButton);
        // article.appendChild(h2);
        // article.appendChild(p);
        // article.style.border = 'solid 1px gray';
        // article.style.marginBottom = '8px'
        // articles.appendChild(article);
    });  

    const delButtons = document.querySelectorAll('.delete');
    const allArticles = document.querySelectorAll('article');
    delButtons.forEach((element, index) => {
        element.addEventListener('click', () => {
            console.log(index);
            data.splice(index, 1);
            allArticles[index].remove();
        })
    });
    // const addButton = document.querySelector('.addButton');
    // addButton.addEventListener('click', () => {
    //     const popupContainer = document.querySelector('#popupContainer');
    //     popupContainer.style.display = 'flex';
    //     document.getElementById('head').textContent = 'Добавить статью';
    //     // document.getElementById('title').textContent = element.title;
    //     // document.getElementById('text').textContent = element.text;

    // });
    const editButton = document.querySelectorAll('.edit');
    editButton.forEach((element, index) => {
        element.addEventListener('click', () => {
            // data[i] = element, i = index
            console.log(element);
        })
    });
}

function addArticle(articleBox, art) {
    const article = document.createElement('article');
    const delButton = document.createElement('button');
    delButton.className = 'delete';
    delButton.innerText = "Удалить";
    // delButton.addEventListener('click', () => {
    //     data.splice(index, 1);
    // })

    const editButton = document.createElement('button');
    editButton.innerText = "Редактировать";
    editButton.className = 'edit';

    const h2 = document.createElement('h2');
    h2.innerText = art.title;
    const p = document.createElement('p');
    p.innerHTML = art.text;
    article.appendChild(delButton);
    article.appendChild(editButton);
    article.appendChild(h2);
    article.appendChild(p);
    article.style.border = 'solid 1px gray';
    article.style.marginBottom = '8px'
    articleBox.appendChild(article);
}

let articlesData = [
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

const articles = document.querySelector('.articles');
loadArticles(articles, articlesData);

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => {
    const popupContainer = document.querySelector('#popupContainer');
    popupContainer.style.display = 'flex';
    document.getElementById('head').textContent = 'Добавить статью';
    // document.getElementById('title').textContent = element.title;
    // document.getElementById('text').textContent = element.text;
    const popupBtn = document.getElementById('popupBtn');
    popupBtn.addEventListener('click', () => {
        // const artTitle = popupBtn.closest('title').textContent;
        const artTitle = document.getElementById('titlePopup').value;
        const artText = document.getElementById('textPopup').value;
        console.log(artTitle);
        if (!artTitle || !artText) {
            console.log(artTitle, artText);
            document.getElementById('errorText').textContent = "Заполните поля";
        } else {
            console.log('Верно');
            const articleObject = {};
            articleObject.title = artTitle;
            articleObject.text = artText;
            addArticle(articles, articleObject);
            popupContainer.style.display = 'none';
        }
    });
});