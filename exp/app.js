const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//exemplo de middleware do express para aceitar req tipo json
app.use(express.json());

app.use((req, res, next)=>{
    console.log('Executando middleware em nível de aplicação');
    return next();
});

//exemplo de criação de uma funcao de middleware
const logReq = (req, res, next) => {
    console.log('Executando a Função Middleware na rota user');
    return next();
}

app.get('/', (req, res) => {
    res.send('|| Bem vindo à aplicação ||');
});

app.use('/admin', adminRoutes);
app.use('/user', logReq, userRoutes);

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});