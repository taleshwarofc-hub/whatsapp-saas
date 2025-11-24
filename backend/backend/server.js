import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
const whatsappRoutes = require('./routes/whatsappRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WhatsApp SaaS Backend Running...");
});

app.listen(5000, () => console.log("Server live on port 5000"));
const whatsappRoutes = require("./routes/whatsappRoutes");
app.use("/api/whatsapp", whatsappRoutes);
