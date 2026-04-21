import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
    webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL,
    initialMessages: [
        "Hola, Soy Scooby el asistente de linkedupsales, en que puedo ayudarte"
    ],
    i18n: {
        en: {
            title: '¡Guau! Qué bueno verte. 🐾',
            subtitle: 'Aquí para ayudarte 24/7',
        }
    }
});


