import express, { Router } from "express";
import productsRoute from "./routes/products.route";
import dotnev from "dotenv";
import cors from "cors";
import newsBlogsRoute from "./routes/news-blogs.route";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Konfigurasi CORS
app.use(
    cors({
        origin: "http://localhost:5173", // Ganti dengan URL frontend kamu saat production
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

const router = Router();
app.use(router);


app.use(express.json());
app.use("/api/products", productsRoute); // 👈 pasangkan ke prefix untuk products
app.use("/api/news-blogs", newsBlogsRoute); // 👈 pasangkan ke prefix untuk news blogs

app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${PORT}`);
});
