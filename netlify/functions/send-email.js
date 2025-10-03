// netlify/functions/send-email.js
import { send } from "@netlify/email";

export const handler = async (event) => {
    try {
        if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { template, to, data } = JSON.parse(event.body);

    await send({
      template,  // contact.html
      to,        // info@lessmas.es
      message: data, // { name, email, message }
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        console.error(error);
        return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};
