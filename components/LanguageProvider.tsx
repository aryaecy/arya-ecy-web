'use client';
import {createContext,useContext,useEffect,useMemo,useState} from 'react';

type Lang='tr'|'en';
type Ctx={lang:Lang;setLang:(lang:Lang)=>void;toggle:()=>void};
const LanguageContext=createContext<Ctx>({lang:'tr',setLang:()=>{},toggle:()=>{}});
export function LanguageProvider({children}:{children:React.ReactNode}){
 const [lang,setLangState]=useState<Lang>('tr');
 useEffect(()=>{const saved=localStorage.getItem('arya_lang');if(saved==='en'||saved==='tr')setLangState(saved)},[]);
 const setLang=(next:Lang)=>{setLangState(next);localStorage.setItem('arya_lang',next);document.documentElement.lang=next};
 useEffect(()=>{document.documentElement.lang=lang},[lang]);
 const value=useMemo(()=>({lang,setLang,toggle:()=>setLang(lang==='tr'?'en':'tr')}),[lang]);
 return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext)}
