import { seedCourses, seedUsers } from './seed.js'
const KEY='arya-akademi-v1'
const now=()=>new Date().toISOString()
const initial={
  currentUser: seedUsers[0],
  courses: seedCourses,
  users: seedUsers,
  companies:[{id:'co1',name:'ARYA ECY',sector:'Çevre Danışmanlığı',status:'Aktif'},{id:'co2',name:'Demo Sanayi A.Ş.',sector:'Üretim',status:'Aktif'}],
  assignments:[
    {id:'a1',courseId:'c2',userId:'u3',assignedAt:now(),dueDate:'2026-09-15',progress:100,status:'Tamamlandı',score:90,completedAt:now()},
    {id:'a2',courseId:'c1',userId:'u3',assignedAt:now(),dueDate:'2026-09-30',progress:55,status:'Devam Ediyor',score:null},
    {id:'a3',courseId:'c3',userId:'u4',assignedAt:now(),dueDate:'2026-09-20',progress:0,status:'Başlamadı',score:null},
    {id:'a4',courseId:'c10',userId:'u5',assignedAt:now(),dueDate:'2026-09-25',progress:20,status:'Devam Ediyor',score:null}
  ],
  certificates:[{id:'ARYA-2026-0001',userId:'u3',courseId:'c2',issuedAt:'2026-08-10',validUntil:'2027-08-10',score:90}],
  notifications:[{id:'n1',title:'Yeni eğitim atandı',body:'Çevre Bilinci ve Farkındalık eğitimi Ayşe Kaya kullanıcısına atandı.',date:now(),read:false}],
  settings:{organization:'ARYA Entegre Çevre Yönetimi ve Mühendislik',certificatePrefix:'ARYA',defaultPassScore:70,reminderDays:7}
}
export function loadStore(){ try{return JSON.parse(localStorage.getItem(KEY))||initial}catch{return initial} }
export function saveStore(data){localStorage.setItem(KEY,JSON.stringify(data))}
export function resetStore(){localStorage.removeItem(KEY);return structuredClone(initial)}
