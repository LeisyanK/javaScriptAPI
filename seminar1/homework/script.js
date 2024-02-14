shedule = [
    {
        title: 'tennis',
        time: '16:00',
        maxStudentCount: 15,
        currentCountStudent: 10
    },
    {
        title: 'football',
        time: '17:00',
        maxStudentCount: 15,
        currentCountStudent: 14
    },
    {
        title: 'basketball',
        time: '18:00',
        maxStudentCount: 15,
        currentCountStudent: 12
    }
];

const sheduleBox = document.querySelector('.table tbody');

shedule.forEach(lesson => {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.className = 'title';
    td.textContent = lesson.title;
    tr.appendChild(td);

    td = document.createElement('td');
    td.className = 'time';
    td.textContent = lesson.time;
    tr.appendChild(td);

    td = document.createElement('td');
    td.className = 'maxCount';
    td.textContent = lesson.maxStudentCount;
    tr.appendChild(td);

    td = document.createElement('td');
    td.className = 'currentCount';
    td.textContent = lesson.currentCountStudent;
    tr.appendChild(td);

    let button = document.createElement('button');
    button.className = 'btn btn-success';
    button.textContent = 'Записаться';
    tr.appendChild(button);

    button = document.createElement('button');
    button.className = 'btn btn-danger';
    button.textContent = 'Отменить запись';
    tr.appendChild(button);

    sheduleBox.append(tr);
});

sheduleBox.addEventListener('click', (event) => {
    
    if (event.target.textContent === 'Записаться') {
        const maxCount = event.target.previousSibling.previousSibling; 
        let currentCount = event.target.previousSibling;
        currentCount.textContent = parseInt(currentCount.textContent) + 1;
        if (currentCount.textContent === maxCount.textContent) {
            event.target.className = "";
            event.target.setAttribute("disabled", "");
        }
    } else {
        const maxCount = event.target.previousSibling.previousSibling.previousSibling; 
        let currentCount = event.target.previousSibling.previousSibling;
        // console.log(maxCount);
        // console.log(currentCount);
        if (currentCount.textContent > 0) {
            currentCount.textContent = parseInt(currentCount.textContent) - 1;
        }
        
        if (currentCount.textContent < maxCount.textContent) {
            event.target.previousSibling.className = "btn btn-success";
            event.target.previousSibling.removeAttribute("disabled", "");
        }
    }
})
