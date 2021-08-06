//Funções de retorno Callback

//-------------EXEMPLO DE FUNÇÃO SÍNCRONA----------------//

// function soma(x){
//     console.log('Executando o calculo da soma...');
//     return x + 100;
// }

// function escreve(){
//     console.log(`RESULTADO DA SOMA: ${soma(200)}`)  
// }

// escreve();

//------------EXEMPLO DE FUNÇÃO ASSÍNCRONA SEM TRATAMENTO-----------------//

// function soma(x){
//     setTimeout(()=>{  //suponhamos que precise demorar um pouco para ir buscar os dados no banco
//de dados;
//         console.log('Executando o cálculo da soma...'); 
//         return x + 100;
//     }, 3000);
// }

// function escreve(){
//     console.log(`RESULTADO DA SOMA: ${soma(200)}`);  
// }

// escreve();

//--------------------CRIANDO UMA FUNÇÃO CALLLBACK PARA RESOLVER O PROBLEMA DA SOMA -------------//

function soma(x, funcaoCallback){
    setTimeout(()=>{
        console.log('Calculando a soma...');
        return funcaoCallback(null, x + 100);
    }, 3000);
}

//callback function
function resolveSoma(error, data){
    if(error) throw error;
    console.log(`RESULTADO DA SOMA: ${data}`);
}

soma(200, resolveSoma);

