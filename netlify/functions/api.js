import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import serverless from 'serverless-http';
import { registerRoutes } from '../../server/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function createApp() {
  await registerRoutes(app);
  return app;
}

// exporta o handler que aguarda o app criado e inicializado
export const handler = async (event, context) => {
  const initializedApp = await createApp();
  const serverlessHandler = serverless(initializedApp);
  return serverlessHandler(event, context);
};
