import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Proffy API Rest | Powered By Express' });
});

const PORT = 3333;
app.listen(PORT, () => console.log('Listening on http://127.0.0.1:3333 ...'));
