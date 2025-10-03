exports.handler = async (event) => {
    const { template, to, data } = JSON.parse(event.body);

    try {
        // Llama a la Netlify Email Extension
        const response = await fetch(`${process.env.lessmas.es}/.netlify/functions/email`, {
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
