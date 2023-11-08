const form = document.getElementById('form-contatos');
let linhas = '';


const nomes = [ ];
const contatos= [ ];


form = addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
   
});

function adicionaLinha(){
    const input_nome = document.getElementById('nome');
    const input_contato = document.getElementById('contato');


    console.log(nomes);
    console.log(contatos);
    if((nomes.includes(input_nome.value)) || (contatos.includes(input_contato.value))){
        alert(`Nome ou Telefone ja esta inserido na agenda, tente outro.`);
    }else{
        nomes.push(input_nome.value);
        contatos.push((input_contato.value));
        

        let linha = '<tr>';
        linha += `<td>${input_nome.value}</td>`;
        linha += `<td>${input_contato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    

   

    input_contato.value = '';
    input_nome.value = '';
}

function atualizaTabela(){
    const corpo_tabela = document.querySelector('tbody');
    corpo_tabela.innerHTML = linhas;

    const resultados = document.querySelector('.resultados');
    resultados.innerHTML = 'Quantidade de registros: ' + nomes.length;
}

