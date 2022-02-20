let data = [{
    id: 1,
    title: 'Estudar HTML (HCODE)'
}, {
    id: 2,
    title: 'Estudar CSS (HCODE)'
}, {
    id: 3,
    title: 'Estudar JavaScript (Luiz Otávio)'
}];

data.forEach(task => {
    let li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.title}</label></li>
    `;

    li.querySelector('input').addEventListener("change", e => {
        if(e.target.checked){
            li.classList.add('complete');
        }else{
            li.classList.remove('complete');
        }
    });
    document.querySelector('#to-do').append(li);
});