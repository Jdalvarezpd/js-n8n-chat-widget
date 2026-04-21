# 💬 AI N8N Chat Widget Integration

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![n8n](https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white)

Un widget interactivo de chat web impulsado por Inteligencia Artificial y orquestado a través de flujos de **n8n**. Este proyecto implementa una interfaz de usuario limpia y responsiva lista para ser embebida en cualquier aplicación, conectándose de forma directa y asíncrona a un agente de inteligencia artificial (N8N).

## ✨ Características Principales

- **Conexión Directa a N8N:** Integración robusta mediante Webhooks para procesar mensajes y retornar respuestas IA en tiempo real.
- **Interfaz Premium:** Un diseño pulido (Dark Theme y variables modernas) basado en la arquitectura CSS de n8n, garantizando una excelente experiencia de usuario (UX).
- **Seguridad Escalable:** Arquitectura de variables de entorno (`.env`) inyectadas dinámicamente mediante Vite, protegiendo las credenciales y rutas de orquestación (evitando su exposición en el código fuente de GitHub).
- **Optimizado para Producción:** El bundler `Vite` minimiza los tiempos de carga y compila los módulos de forma que el peso total del script sea muy bajo.

## 🛠️ Stack Tecnológico

- **Frontend Core:** Vanilla JavaScript (`type="module"`).
- **Construcción y Bundling:** [Vite](https://vitejs.dev/) - Ofrece Hot Module Replacement en desarrollo y Rollup en producción.
- **Backend Automations:** n8n (Orquestador visual conectando el Frontend al cerebro de LLM).
- **Dependencias Base:** Librería `@n8n/chat` para la renderización de la ventana modal y persistencia de memoria.

## 🚀 Arquitectura Computacional

El flujo en tiempo real (Event-Driven) tiene lugar en la integración `main.js`:

1. El usuario inicializa una petición o saludo hacia el asistente asignado ("Scooby").
2. La carga del Chat intercepta la URL de forma segura a través de `import.meta.env.VITE_N8N_WEBHOOK_URL`.
3. n8n recibe la solicitud mediante un "Webhook Trigger", ejecuta los nodos de IA correspondientes (OpenAI via herramientas/agents) y responde en formato JSON/SSE.
4. El Frontend renderiza el texto fluido imitando la forma en que los modelos de lenguaje escriben sus paquetes de respuesta.

## ⚙️ Instalación (Entorno Local)

Sigue estos pasos para clonar la arquitectura en tu computadora y correr el entorno seguro:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Jdalvarezpd/js-n8n-chat-widget.git
   cd js-n8n-chat-widget
   ```

2. **Instala las dependencias necesarias**
   ```bash
   npm install
   ```

3. **Configura el entorno protegido (.env)**
   Crea y abre un archivo llamado `.env` en la raíz de tu proyecto. El controlador `.gitignore` está configurado para hacerlo invisible en commits públicos.
   ```env
   VITE_N8N_WEBHOOK_URL=https://[TU-URL-N8N]/webhook/[ID]/chat
   ```

4. **Despliega el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   *Dirígete as `http://localhost:5173` para probar la interfaz visual en tiempo real.*

## 🛡️ Recomendaciones de Seguridad para Producción

En un despliegue de alto nivel o productivo (Ej. Vercel, Netlify, o GitHub Pages), la variable `.env` será compilada. Por ello, el nodo del Chat dentro del flujo en tu arquitectura n8n debe configurar restricciones de Origen cruzado (CORS / *Allowed Origins*), donde indiques que la URL permitida debe coincidir estrictamente con el dominio donde esté cargado este código; de esta manera, se evitarán ataques *DDoS* por robo de Webhook.

---
*Diseñado y Desarrollado por **Juan David Alvarez**.*
