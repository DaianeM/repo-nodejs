// Utilizando Async Await

//retorna uma promessa/promise
function soma(x){
    return new Promise((resolve, reject) => {       //Promessa criada
        //suponhamos que precise demorar um pouco para ir buscar os dados no banco de dados;
        setTimeout(()=>{    
            if(Number(x) === NaN || Number(x) === undefined || typeof x !== 'number'){
                reject(` Olá ${process.env.USERNAME}, verifique o argumento informado.`);
            }

            let resultadoSoma =  x + 100;
            resolve(resultadoSoma);
        }, 3000);
    })
}


async function calculoDaSoma(){
    try {
        const resultado = await soma(2); //teste com soma('x') para visualizar o catch
        console.log(`O RESULTADO DA SOMA É: ${resultado}`);
    } catch (error) {
        console.log(`Oops algo deu errado: ${error}`);
    }
}

calculoDaSoma();
