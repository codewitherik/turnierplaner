
import { HelmetProvider} from 'react-helmet';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
