function calculateTable(){
    // Obtendo do DOM o tbody da table.
    let table = document.querySelector('#table-mult tbody');
    // Pegando o valor do campo input number e convertendo em inteiro.
    let valueA = parseInt(document.querySelector('#valueA').value);

    // Limpando o tbody.
    table.innerHTML = ``;

    // Criando o laço de repetição para a tabuada.
    for(let valueB = 0; valueB <= 10; valueB++){
        // Calculando os valores da tabuada
        let result = valueA * valueB;
        // taplate das colunas da tabela.
        let template = `
                <td>${valueA}</td>
                <td>x</td>
                <td>${valueB}</td>
                <td>=</td>
                <td>${result}</td>
        `;
        // Criando o elemento tr
        let tr = document.createElement('tr');
        // Inserindo as colunas na linha
        tr.innerHTML = template;
        //  Inserindo a linha na tabela;
        table.append(tr);
    };
}

// Chamando a função.
calculateTable();

// Adiciando o evento de alteração ao campo de número.
document.querySelector('#valueA').addEventListener('change', calculateTable);