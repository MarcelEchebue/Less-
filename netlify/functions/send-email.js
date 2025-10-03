exports.handler = async (event) => {
    console.log("Event body:", event.body);
    
    const { template, to, data } = JSON.parse(event.body);

    try {
        // Usar URL relativa para llamar a la otra función en Netlify
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/.netlify/functions/email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                template,
                to,
                message: data
            }),
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Correo enviado correctamente" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error al enviar el correo", error: error.message }),
        };
    }
};
