import express from 'express';                                                  
import userRoutes from './src/routes/userRoutes.js';
import playerRoutes from './src/routes/playerRoutes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao craque ou bagre!');
});

app.use(express.json());
app.use('/users', userRoutes);
app.use('/players', playerRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});

console.log(process.env.DATABASE_URL);