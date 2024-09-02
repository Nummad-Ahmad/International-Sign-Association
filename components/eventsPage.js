'use client';
import Sidebar from "./sidebar";
import '@/app/global.css';
import style from './eventsPage.module.css';
import HeadingDiv from "./headingDiv";
import ProfilePic from '@/public/profile pic.png';
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
export default function EventsPage() {
    const eventsData = [
        {
            name: 'Sign Expo',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Scheduled'
        },
        {
            name: 'Innovation Ally',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Scheduled'
        },
        {
            name: 'Design Nexus',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Completed'
        },
        {
            name: 'Artistry Zone',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Completed'
        },
        {
            name: 'SignTech Showcase',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Completed'
        },
        {
            name: 'SignBiz Bootcamp',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Completed'
        },
        {
            name: 'InstallMaster Class',
            invites: 120,
            participants: 100,
            startTime: '11:00',
            endTime: '14:00',
            status: 'Completed'
        },
    ];
    const [filteredData, setFilteredData] = useState(eventsData); 
    function sortData(){
        const sortedData = eventsData.sort((a, b) => a.name.localeCompare(b.name));
        setFilteredData(sortedData);
    }
    return (
        <div className={style.eventsPage}>
            <Sidebar />
            <div className={style.eventsData}>
                <HeadingDiv img={ProfilePic} name={'Ahmad'} designation={'Software Engineer'} page={'Events'} />
                <div className={style.dataContainer}>
                    <div className={style.filters}>
                        <input className={style.input} placeholder="Search"/>                        
                        <button className={style.newOrganizationButton}>Schedule Event</button>
                    </div>
                    <div className={style.statsContainer}>
                        <div className={style.statsHeading}>
                            <p className={style.event}>Event <span onClick={sortData}><HiOutlineArrowsUpDown size={15}/></span></p>
                            <p className={style.invites}>Invites</p>
                            <p className={style.participants}>Participants</p>
                            <p className={style.startTime}>Start time</p>
                            <p className={style.endTime}>End time</p>
                            <p className={style.status}>Status</p>
                        </div>
                        {
                            filteredData.map((item, index) => {
                                return (
                                    <div className={`${style.statsData} ${index % 2 != 0 ? style.even : ''}`} >
                                    <p className={style.event}>{item.name}</p>
                                        <p className={style.invites}>{item.invites}</p>
                                        <p className={style.participants}>{item.participants}</p>
                                        <p className={style.startTime}>{item.startTime}</p>
                                        <p className={style.endTime}>{item.endTime}</p>
                                        <p className={style.status}>{item.status}</p>
                                    </div>
                                );
                            })
                        }
                        <div className={style.paginationDiv}>
                            <p>Showing {eventsData.length} of {eventsData.length} records</p>
                            <div className={style.buttonsDiv}>
                                <button className={style.paginationButton}>Prev</button>
                                <button className={style.paginationButton}>1</button>
                                <button className={style.paginationButton}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}