import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  const tareas = [
    { id: 1, descripcion: 'Tarea 1', completado: false },
    { id: 2, descripcion: 'Tarea 2', completado: true },
    { id: 3, descripcion: 'Tarea 3', completado: false }
  ];

  res.render('index', { tareas });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
