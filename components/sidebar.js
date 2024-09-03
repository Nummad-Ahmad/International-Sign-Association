'use client';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Dashboard from '@/public/dashboard.png';
import Dashboard2 from '@/public/dashboard2.png';
import Events from '@/public/events.png';
import Events2 from '@/public/events2.png';
import Meetings from '@/public/meetings.png';
import Meetings2 from '@/public/meetings2.png';
import Organizations from '@/public/organizations.png';
import Organizations2 from '@/public/organizations2.png';
import Users from '@/public/users.png';
import Users2 from '@/public/users2.png';
import style from './sidebar.module.css';
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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
            // router.push('/dashboard')
        }
        else if (value == 1) {
            // router.push('/organizations')
        }
        else if (value == 2) {
            // router.push('/events')
        }
        else if (value == 3) {
            // router.push('/meetings')
        }
        else if (value == 4) {
            // router.push('/users')
        }
        else if (value == 5) {
            router.push('/')
        }
    }
    const [deviceType, setDeviceType] = useState(false);
    const [open, setOpen] = useState(false);
    function toggleMobileSideBar() {
        setOpen(!open);
    }
    return (
        <>
            {
                deviceType ?
                    <div className={style.sidebar}>
                        <div>
                            <Image className={style.logo} src={Logo} width={150} alt='' />
                        </div>
                        <div className={style.optionsDiv}>
                            <div onClick={() => changeOption(0)} className={`${style.option} ${activeIndex == 0 ? style.activeOption : ''}`}>
                                <Image className={style.optionImage} src={activeIndex == 0 ? Dashboard2 : Dashboard} alt='' />
                                <p>Dashboard</p>
                            </div>
                            <div onClick={() => changeOption(1)} className={`${style.option} ${activeIndex == 1 ? style.activeOption : ''}`}>
                                <Image className={style.optionImage} src={activeIndex == 1 ? Organizations2 : Organizations} alt='' />
                                <p>Organizations</p>
                            </div>
                            <div onClick={() => changeOption(2)} className={`${style.option} ${activeIndex == 2 ? style.activeOption : ''}`}>
                                <Image className={style.optionImage} src={activeIndex == 2 ? Events2 : Events} alt='' />
                                <p>Events</p>
                            </div>
                            <div onClick={() => changeOption(3)} className={`${style.option} ${activeIndex == 3 ? style.activeOption : ''}`}>
                                <Image className={style.optionImage} src={activeIndex == 3 ? Meetings2 : Meetings} alt='' />
                                <p>Meetings schedule</p>
                            </div>
                            <div onClick={() => changeOption(4)} className={`${style.option} ${activeIndex == 4 ? style.activeOption : ''}`}>
                                <Image className={style.optionImage} src={activeIndex == 4 ? Users2 : Users} alt='' />
                                <p>Users</p>
                            </div>
                            <div className={style.logoutDiv} onClick={() => changeOption(5)}>
                                <CiLogout color='rgb(100, 120, 120)' size={17}></CiLogout>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div> :
                    <div className={style.mobileTopBar}>
                        <Image src={Logo} alt='' height={90}></Image>
                        <>
                        {
                            open &&
                            <div className={style.mobileSideBar}>
                                <span onClick={toggleMobileSideBar}>
                                    <IoClose size={30} />
                                </span>
                                <div className={style.mobileSideBarOptionsDiv}>
                                    <div onClick={() => changeOption(0)} className={`${style.mobileSideBarOption} ${activeIndex == 0 ? style.activeOption : ''}`}>Dashboard</div>
                                    <div onClick={() => changeOption(1)} className={`${style.mobileSideBarOption} ${activeIndex == 1 ? style.activeOption : ''}`}>Meetings</div>
                                    <div onClick={() => changeOption(2)} className={`${style.mobileSideBarOption} ${activeIndex == 2 ? style.activeOption : ''}`}>Organizations</div>
                                    <div onClick={() => changeOption(3)} className={`${style.mobileSideBarOption} ${activeIndex == 3 ? style.activeOption : ''}`}>Events</div>
                                    <div onClick={() => changeOption(4)} className={`${style.mobileSideBarOption} ${activeIndex == 4 ? style.activeOption : ''}`}>Users</div>
                                    <div onClick={() => changeOption(5)} className={style.mobileLogoutDiv} >
                                <p>Logout</p>
                            </div>
                                </div>
                            </div>
                        }
                            <span onClick={toggleMobileSideBar}>
                                <IoMdMenu size={30} />
                            </span> 
                        </>
                    </div>
            }
        </>
    );
}
