import express from "express";
import cors from "cors";
import alertRoutes from "./routes/alertRoutes";
import carRoutes from "./routes/carRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta raíz opcional (soluciona el "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚗 API de RediBo funcionando correctamente");
});

// Rutas de la API
app.use("/api/alerts", alertRoutes);
app.use("/api/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
