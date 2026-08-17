import {seed} from './seed.js';
const KEY='arya-akademi-v2-state';
export function loadStore(){try{return JSON.parse(localStorage.getItem(KEY))||structuredClone(seed)}catch{return structuredClone(seed)}}
export function saveStore(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function resetStore(){localStorage.removeItem(KEY);return structuredClone(seed)}
