'use client';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Calendar from '@/public/calendar.png';
import Calendar2 from '@/public/calendar2.png';
import Dashboard from '@/public/dashboard.png';
import Dashboard2 from '@/public/dashboard2.png';
import Events from '@/public/events.png';
import Events2 from '@/public/events2.png';
import Matchmaking from '@/public/matchmaking.png';
import Matchmaking2 from '@/public/matchmaking2.png';
import Meetings from '@/public/meetings.png';
import Meetings2 from '@/public/meetings2.png';
import Organizations from '@/public/organizations.png';
import Organizations2 from '@/public/organizations2.png';
import Subscription from '@/public/subscription.png';
import Subscription2 from '@/public/subscription2.png';
import Users from '@/public/users.png';
import Users2 from '@/public/users2.png';
import style from './sidebar.module.css';
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Sidebar() {
    const [activeIndex, setSelectedIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('value');
            return saved !== null ? JSON.parse(saved) : 0;
        }
        return 0;
    });
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(activeIndex));
    }, [activeIndex]);
    const router = useRouter();
    function changeOption(value) {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setSelectedIndex(newValue);
        }

        if (value == 0) {
            router.push('/dashboard')
        }
        else if (value == 1) {
            router.push('/organizations')
        }
        else if (value == 2) {
            router.push('/events')
        }
        else if (value == 3) {
            router.push('/meetings')
        }
        else if (value == 4) {
            router.push('/users')
        }
        else if (value == 5) {
            router.push('/')
        }
    }
    return (
        <div className={style.sidebar}>
            <div>
                <Image className={style.logo} src={Logo} width={150}></Image>
            </div>
            <div className={style.optionsDiv}>
                <div onClick={() => changeOption(0)} className={`${style.option} ${activeIndex == 0 ? style.activeOption : ''}`}>
                    <Image className={style.optionImage} src={activeIndex == 0 ? Dashboard2 : Dashboard} />
                    <p>Dashboard</p>
                </div>
                <div onClick={() => changeOption(1)} className={`${style.option} ${activeIndex == 1 ? style.activeOption : ''}`}>
                    <Image className={style.optionImage} src={activeIndex == 1 ? Organizations2 : Organizations} />
                    <p>Organizations</p>
                </div>
                <div onClick={() => changeOption(2)} className={`${style.option} ${activeIndex == 2 ? style.activeOption : ''}`}>
                    <Image className={style.optionImage} src={activeIndex == 2 ? Events2 : Events} />
                    <p>Events</p>
                </div>
                <div onClick={() => changeOption(3)} className={`${style.option} ${activeIndex == 3 ? style.activeOption : ''}`}>
                    <Image className={style.optionImage} src={activeIndex == 3 ? Meetings2 : Meetings} />
                    <p>Meetings schedule</p>
                </div>
                <div onClick={() => changeOption(4)} className={`${style.option} ${activeIndex == 4 ? style.activeOption : ''}`}>
                    <Image className={style.optionImage} src={activeIndex == 4 ? Users2 : Users} />
                    <p>Users</p>
                </div>
                <div className={style.logoutDiv} onClick={() => changeOption(5)}>
                    <CiLogout color='rgb(100, 120, 120)' size={17}></CiLogout>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}