const email = `jeff.rib10e@gmail.com`;

console.log(`Olá mundo! ${email}`);

/* (click) acontece quando o usuário clica sobre o elemento. */
document.getElementById('btn-submit').addEventListener('click', e => {
    console.log(`O botão foi clicado`);
});


/* (mouseenter) acontece quando o mouse entrar no elemento */
document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log(`O mouse está em cima do formulário`);
});

/* (mouseleave) acontece quando o mouse sai do elemento */
document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log(`O mouse saiu do formulário.`);
});

/* (submit) quando envia algum tipo de formulário. */
document.querySelector('#form-login').addEventListener('submit', e => {
    /* Relembrando: (preventDefault()) desativa o comportamento padrão. */
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    /* Se você tem uma variavel que tem o mesmo mone da propriedade do json, não é preciso escrever dessa forma { email: email }, basta escrever a variavel { email } */
    let json = {
        email,
        password
    };

    /* console.log(json);
     *
     * Transformando JSON em string com o (JSON.stringfy())
     * let stringJSON = JSON.stringify(json);
     *
     * console.log(stringJSON);
     *
     * Convertendo em JSON novamente com (JSON.parse())
     * let jsonParse = JSON.parse(stringJSON);
     *
     *  console.log(jsonParse);
     *
     *  Também tem como obter algum dos objetos do JSON chamando ele apos a 
     *  variavel (jsonParse.email) 
     * console.log(jsonParse.email);
     */

    if(!json.email){
        console.error(`O campo e-mail deve ser preenchido`);
    }else if(!json.password){
        console.error(`O campo senha não está preenchido`);
    }else{
        console.info(`Dados validados com sucesso!`);
    }
});