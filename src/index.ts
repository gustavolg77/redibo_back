import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
///CORS 
app.use(cors({
  origin: 'http://localhost:3002', // aqui va el puerto del FRONTEND
  credentials: true
}));
/// PROBANDO CON CORS LA COMUNICACION CON EL FRONTED
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// End point para verificar la salud de la conexión de la API
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});