// Programação Assíncrona com Promises

//retorna uma promessa/promise
function soma(x, y){
    return new Promise((resolve, reject) => {       //Promessa criada
        //suponhamos que precise demorar um pouco para ir buscar os dados no banco de dados;
        setTimeout(()=>{                   
            console.log('Calculando a soma...');
            let resultadoSoma =  x + y;
            resolve(resultadoSoma);
        }, 3000);
    })
}

soma(30, 100)
.then((response)=>{                 //trata o resolve
    console.log(response);
})
.catch()                            //trata o reject