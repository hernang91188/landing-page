export const createPreference = async () => {
    try {
        const response = await fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to create preference");
        }

        const data = await response.json();
        return data.init_point;
    } catch (error) {
        console.error("Payment error:", error);
        alert("Payment service unavailable. Please try again later.");
        return null;
    }
};
