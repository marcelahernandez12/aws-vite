
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';


import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// 2. Importa la configuración de AWS
// Si usaste `amplify init`, este archivo se crea automáticamente.
// Si no, pega la configuración de Cognito aquí.
// @ts-ignore
import awsconfig from './aws-exports'; 

// 3. Configura Amplify con tus credenciales
Amplify.configure(awsconfig);

// 4. Envuelve tu componente principal con `withAuthenticator`
// Esto le dice a Amplify que proteja tu aplicación.
const ProtectedApp = withAuthenticator(App);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>,
);