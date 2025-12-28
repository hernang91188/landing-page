import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Load environment variables from .env file
dotenv.config();

// Initialize MercadoPago
const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || "YOUR_ACCESS_TOKEN"
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Parse IS_PAYMENT_REQUIRES as boolean
const isPaymentRequires = process.env.IS_PAYMENT_REQUIRES === 'true';

app.get("/config", (req, res) => {
    res.json({
        isPaymentRequires,
        googleCalendarUrl: process.env.GOOGLE_CALENDAR_URL
    });
});

app.get("/social-links", (req, res) => {
    res.json({
        linkedin: process.env.LINKEDIN_URL,
        twitter: process.env.TWITTER_URL,
        email: process.env.EMAIL
    });
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
