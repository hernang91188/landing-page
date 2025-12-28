# Align Studio - Business Process Consulting Landing Page

A professional, high-performance landing page built with React, Vite, and Tailwind CSS. This project features a secure backend integration with MercadoPago for payment-gated appointment scheduling via Google Calendar.

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18 or higher.
- **npm**: v9 or higher.

### Installation

1.  Clone the repository (if applicable) or navigate to the project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```

## 🛠️ Running the Application

To run the full stack (Frontend + Backend) simultaneously:

```bash
npm run dev:full
```

-   **Frontend**: `http://localhost:5173` (Consulting Landing Page)
-   **Backend**: `http://localhost:3000` (Payment API Server)

## ⚙️ Configuration & Environment Variables

The project uses key configuration variables to manage payments and scheduling. Currently, these are defined in the code for simplicity in this development environment.

### 1. Payment Requirement Toggle (`isPaymentRequires`)
Controls whether the Google Calendar is locked behind a payment gate.

-   **Variable**: `isPaymentRequires`
-   **Location**: [`server/index.js`](file:///e:/landing-page/server/index.js)
-   **Values**:
    -   `true`: **Enabled**. User must pay $5,000 ARS to unlock the calendar.
    -   `false`: **Disabled**. Calendar is visible to everyone immediately.
    -   *Note: Can be connected to `process.env.IS_PAYMENT_REQUIRES` if receiving from an environment file.*

### 2. MercadoPago Access Token (`accessToken`)
The credential used to authenticate with MercadoPago and create payment preferences.

-   **Variable**: `accessToken` within `MercadoPagoConfig`
-   **Location**: [`server/index.js`](file:///e:/landing-page/server/index.js)
-   **Type**: Production Token (`APP_USR-...`)
-   **Security Note**: In a production deployment, this should be stored in a `.env` file key `MP_ACCESS_TOKEN` and never committed to public repositories.

### 3. Google Calendar Scheduling URL
The direct link to the Google Calendar Appointment Scheduling page embedded in the site.

-   **Location**: [`src/components/Booking.tsx`](file:///e:/landing-page/src/components/Booking.tsx) inside the `<iframe>` `src` attribute.
-   **Current Value**: `https://calendar.app.google/WXkzJuEtrcmt8hBn9?gv=true`
-   **Usage**: Shown only after successful payment (or if `isPaymentRequires` is false).

## 📂 Project Structure

-   `/src`: Frontend React application.
    -   `/components`: UI sections (Hero, Services, Booking, etc.).
    -   `/lib`: Utility functions and direct API calls.
-   `/server`: Backend Express server.
    -   `index.js`: Main server file handling MercadoPago integration.

## 💳 Payment Flow (How it works)

1.  User clicks "Secure Your Spot".
2.  Frontend calls `http://localhost:3000/create_preference`.
3.  Backend uses the `accessToken` to generate a payment link on MercadoPago.
4.  User pays (or simulates payment with Test Cards).
5.  User is redirected back to the site.
6.  `Booking.tsx` detects the Success status, unlocks the calendar, and auto-scrolls to the scheduling interface.

### Troubleshooting: PowerShell Execution Policy
If you encounter an error stating that "running scripts is disabled on this system" when running `npm`, you can bypass it by using the command prompt prefix:
```powershell
cmd /c npm run dev:full
```

## 🛑 Stopping the Servers

To stop the frontend and backend servers, you can simply press `Ctrl + C` in the terminal where they are running.

If the processes become stuck or you need to clear the ports (**3000** and **5173**) manually, use one of the following commands:

### PowerShell (Recommended)
Run this to find and stop any process listening on the development ports:
```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000, 5173 -ErrorAction SilentlyContinue).OwnProcess -Force -ErrorAction SilentlyContinue
```

### Windows Command Prompt (CMD)
If you prefer CMD, you can kill processes by their port using `taskkill`:
```cmd
for /f "tokens=5" %a in ('netstat -aon ^| findstr :3000') do taskkill /f /pid %a
for /f "tokens=5" %a in ('netstat -aon ^| findstr :5173') do taskkill /f /pid %a
```

