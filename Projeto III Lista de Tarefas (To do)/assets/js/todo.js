let data = [];

function renderToDo(){
    document.querySelector('#to-do').innerHTML = ``;
    data.forEach(task => {
        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label></li>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e => {
            if(e.target.checked){
                li.classList.add('complete');
            }else{
                li.classList.remove('complete');
            }
        });

        li.querySelector('button').addEventListener('click', e =>{
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoID = idArray[1];
            let title = li.querySelector('label').innerText;

            if(confirm(`Deseja realmente excluir a tarefa ${title}?`)){
                data = data.filter(task => (task.id !== parseInt(todoID)));
                renderToDo();
            }
        });

        document.querySelector('#to-do').append(li);
    });
}

// Pegando o valor digitado pelo usuário
let newTask = document.querySelector('#new-task').addEventListener('keyup', e => {
    /*  Verificação se a tela Enter com clicada, caso tenha sido, ele irá pegar 
     *  o valor do target (campo).
     */ 
    if(e.key === 'Enter'){
        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = ``;

        renderToDo();
    }
});

renderToDo();