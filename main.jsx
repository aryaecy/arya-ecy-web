import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const APP_VERSION='2.8.0';

async function resetLegacyPwa(){
  try{
    const previous=localStorage.getItem('aryaAkademiAppVersion');
    if(previous!==APP_VERSION){
      if('serviceWorker' in navigator){
        const regs=await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r=>r.unregister()));
      }
      if('caches' in window){
        const keys=await caches.keys();
        await Promise.all(keys.filter(k=>k.startsWith('arya-akademi-')).map(k=>caches.delete(k)));
      }
      localStorage.setItem('aryaAkademiAppVersion',APP_VERSION);
    }
  }catch{}
}

await resetLegacyPwa();
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js?v=2.8.0',{updateViaCache:'none'}).catch(()=>{}));
}
