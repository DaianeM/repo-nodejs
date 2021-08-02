const express = require('express');
const app = express();

//informa ao express q a ferramenta pra renderizar html é o EJS;
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    //passando objetos do javascript para o ejs;
    const items = [
        {
            letra: 'D',
            message: 'esenvolvendo com Node e EJS'
        },
        {
            letra: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            letra: 'M',
            message: 'uito fácil de usar'
        },
        {
            letra: 'A',
            message: 'morzinho'
        },
        {
            letra: 'I',
            message: 'nstall ejs'
        },
        {
            letra: 'S',
            message: 'intaxe simples'
        }
    ];

    const subtitulo = 'Uma lingugaem de modelagem para a criação de páginas HTML utilizando JavaScript';
    res.render('pages/index', 
        {
            qualidades: items,
            subtitulo: subtitulo
        }
    );
});

app.get('/about', (req, res)=>{
    res.render('pages/about');
})

app.listen(8080, ()=>{
    console.log('Server listening...');
});