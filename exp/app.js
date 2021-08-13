const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//exemplo de middleware para aceitar req tipo json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('|| Bem vindo à aplicação ||');
});

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});