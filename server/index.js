import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Initialize MercadoPago
const client = new MercadoPagoConfig({
    accessToken: "APP_USR-1744555298989998-122412-3b8c73d14ecc9e277fdac5a21487ea27-3089802415"
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Toggle for payment requirement (Default: false as requested)
const isPaymentRequires = false;

app.get("/config", (req, res) => {
    res.json({ isPaymentRequires });
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: "Align Studio Consultation",
                    quantity: 1,
                    unit_price: 5000,
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "http://localhost:5173/",
                failure: "http://localhost:5173/",
                pending: "http://localhost:5173/",
            },
            //auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({ id: result.id, init_point: result.init_point });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating preference" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
