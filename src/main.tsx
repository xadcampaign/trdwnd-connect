
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loading...');
console.log('Root element:', document.getElementById("root"));

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Creating React root...');
  try {
    const root = createRoot(rootElement);
    console.log('React root created successfully');
    console.log('Rendering App...');
    root.render(<App />);
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error creating or rendering React app:', error);
  }
}
