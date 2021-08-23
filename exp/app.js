const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const cookieParser = require('cookie-parser');

//servindo arquivos estáticos
app.use(express.static('public'));

//exemplo de middleware do express para aceitar req tipo json
app.use(express.json());
//acesso aos recursos de cookie - (função de middleware de terceiros)
app.use(cookieParser());

app.use((req, res, next)=>{
    console.log('Executando middleware em nível de aplicação');
    return next();
});

//gravando um cookie na máquina do usuário 
app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Daiane', {
        maxAge: 900000,
        httpOnly: true
    });

    res.send('Cookie gravado com sucesso.');
});
//recuperando o cookie
app.get('/getcookie', (req, res)=>{
    const user = req.cookies['user']
    if(user){
        res.json({user});
    }
});

//exemplo de criação de uma funcao de middleware
const logReq = (req, res, next) => {
    console.log('Executando a Função Middleware na rota user');
    return next();
}

// Rotas
app.get('/', (req, res) => {
    res.send('|| Bem vindo à aplicação ||');
});

app.use('/admin', adminRoutes);
app.use('/user', logReq, userRoutes);

//função de middleware para tratamento de erros

//forçar erro como exemplo
// app.get('*', (req, res, next) => {
//     setImmediate(() => {
//         next( new Error('Houve um problema.') );
//     })
// });

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({message: err.message});
});

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});