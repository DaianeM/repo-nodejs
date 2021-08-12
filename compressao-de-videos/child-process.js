//ARQUIVO APENAS PARA EXEMPLIFICAR O USO DO CHILD_PROCESS
const { spawn } = require ('child_process'); //processos em segundo plano
const ls = spawn('ls', ['-lh', '/usr']);

//stdio
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`Processo em segundo plano finalizado com sucesso. code: ${code}`);
});
