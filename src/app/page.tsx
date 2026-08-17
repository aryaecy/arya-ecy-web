import Navbar from '@/components/Navbar';import Hero from '@/components/Hero';import Footer from '@/components/Footer';import {AnnouncementTicker,HomeAbout,ImportantPopup} from '@/components/LiveContent';
export default function Home(){return <main className="site-shell v24-shell"><Navbar/><div className="v24-home"><Hero/><HomeAbout/><Footer/></div><ImportantPopup/><AnnouncementTicker/></main>}
