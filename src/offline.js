export const LOCAL_STATE_KEY='aryaAcademyState';
export const PENDING_SYNC_KEY='aryaAcademyPendingSync';
export const LAST_SYNC_KEY='aryaAcademyLastSync';
export function loadCachedState(fallback){try{return JSON.parse(localStorage.getItem(LOCAL_STATE_KEY))||fallback}catch{return fallback}}
export function cacheState(state){try{localStorage.setItem(LOCAL_STATE_KEY,JSON.stringify(state))}catch{}}
export function markPendingSync(state){cacheState(state);try{localStorage.setItem(PENDING_SYNC_KEY,JSON.stringify({state,queuedAt:new Date().toISOString()}))}catch{}}
export function getPendingSync(){try{return JSON.parse(localStorage.getItem(PENDING_SYNC_KEY)||'null')}catch{return null}}
export function clearPendingSync(){try{localStorage.removeItem(PENDING_SYNC_KEY);localStorage.setItem(LAST_SYNC_KEY,new Date().toISOString())}catch{}}
export function isOnline(){return typeof navigator==='undefined'||navigator.onLine}
