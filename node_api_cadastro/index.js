const express = require('express');

const server = express();
server.use(express.json());
const port = 8080;

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'bd_api'
    }
});

server.listen(port, ()=>{
    console.log(`My app listening at http://localhost:${port}`);
})

server.get('/alunos', function (req, res) {
    knex('aluno').then((dados) => {
        res.send(dados);
    })
});

server.get('/aluno/:id', function (req, res, next) {
    const { id } = req.params;
    knex('aluno')
    .where('codigo', id)
    .first()
    .then((dados) => {
        if(!dados) return res.send('O aluno não foi encontrado')
        res.send(dados);
    }, next)
});

server.post('/alunos', function (req, res, next){
    knex('aluno')
    .insert(req.body)
    .then((dados) => {
        res.send(dados);
    }, next)
});

server.put('/aluno/:id', function (req, res, next){
    const { id } = req.params;
    knex('aluno')
    .where('codigo', id)
    .update(req.body)
    .then((dados) => {
        if(!dados) return res.send('Não foi possível atualizar os dados do aluno.')
        res.send('Dados do aluno atualizados.');
    }, next)
});

server.delete('/aluno/:id', function (req, res, next){
    const { id } = req.params;
    knex('aluno')
    .where('codigo', id)
    .delete()
    .then((dados) => {
        if(!dados) return res.send('Não foi possível excluir o aluno.')
        res.send('Aluno excluído.');
    }, next)
});
