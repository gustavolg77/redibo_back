import express from "express";
import cors from "cors";
import helmet from "helmet";
import alertRoutes from "./routes/alertRoutes";
import carRoutes from "./routes/carRoutes";

const app = express();
const PORT = 5000;

// CORS configuracion para permitir peticiones desde el frontend
app.use(cors({
  origin: 'http://localhost:3002', // aquí va el puerto del FRONTEND
  credentials: true
}));

// Seguridad con Helmet (opcional, pero recomendable)
app.use(helmet());

app.use(express.json());

// ruta raiz opcional soluciona el "Cannot GET /'
app.get("/", (req, res) => {
  res.send("🚗 API de RediBo funcionando correctamente");
});

// Rutas de la API
app.use("/api/alerts", alertRoutes);
app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
