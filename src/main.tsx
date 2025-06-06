import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { z } from 'zod';
import './index.css';
import App from './App.tsx';

const envSchema = z.object({
  VITE_API_BASE_URL: z.string(),
  VITE_API_TOKEN: z.string(),
  // TEST_TEST: z.string(),
});

console.log({ envs: import.meta.env });
try {
  envSchema.parse(import.meta.env);
} catch (error) {
  console.log('Env vars error: ', JSON.stringify(error, null, 2));
  throw new Error('Missing env vars, check browser console for more details');
  // process.exit(1);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
