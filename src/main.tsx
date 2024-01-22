import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'normalize.css';
import './styles/main.scss';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <App />;

// Render application in DOM
createRoot(document.getElementById('app')).render(app);