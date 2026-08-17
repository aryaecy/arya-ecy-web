import {createClient} from '@supabase/supabase-js';

const env=import.meta.env||{};
const url=String(env.VITE_SUPABASE_URL||'').trim();
const key=String(env.VITE_SUPABASE_PUBLISHABLE_KEY||env.VITE_SUPABASE_ANON_KEY||'').trim();

export const configured=Boolean(url&&key);
export const supabase=configured?createClient(url,key):null;
export const supabaseConfigStatus={
  hasUrl:Boolean(url),
  hasKey:Boolean(key),
  mode:key.startsWith('sb_publishable_')?'publishable':key?'anon-or-legacy':'missing'
};
