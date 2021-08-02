const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['React.JS', 'React Native', 'Nodejs', 'JavaScript'];

//exemplo de middleware global
server.use((req, res, next)=>{
    console.log(`URL chamada: ${req.url}`);

    return next();
})

//exemplo de middleware específico
function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "nome é obrigatório"});
    }

    return next();
}

function ckeckIdCurso(req, res, next){
    const curso = cursos[req.params.index];
    if(!curso){
        return res.status(400).json({error: "o curso não existe"});
    }
    return next();
}

server.get('/cursos', (req, res)=>{

    return res.json(cursos);
});

server.get('/cursos/:index', ckeckIdCurso, (req, res)=>{

    const { index } = req.params;

    return res.json(cursos[index])
});

server.post('/cursos', checkCurso, (req, res)=>{

    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
});

server.put('/cursos/:index', checkCurso, ckeckIdCurso, (req, res)=>{

    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

server.delete('/cursos/:index', ckeckIdCurso, (req, res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.send();
})

server.listen(3000);
