'use client';
import style from './meetingsPage.module.css';
import '@/app/global.css';
import Sidebar from './sidebar';
import ProfilePic from '@/public/profile pic.png';
import HeadingDiv from './headingDiv';
import ZoomIcon from '@/public/zoomIcon.png';
import PhysicalIcon from '@/public/physicalIcon.png';
import ClockIcon from '@/public/clockIcon.png';
import CalendarIcon from '@/public/calendarIcon.png';
import Image from 'next/image';
import { MdDelete } from "react-icons/md";
export default function MeetingsPage() {
    const meetingsData = [
        {
            title: 'Zoom meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 Jan 2024',
            time: '9:00 to 14:00',
            location: 'Zoom'
        },
        {
            title: 'Meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 March 2024',
            time: '9:00 to 14:00',
            location: 'On site'
        },
        {
            title: 'Meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 April 2024',
            time: '9:00 to 14:00',
            location: 'On site'
        },
        {
            title: 'Meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 June 2024',
            time: '9:00 to 14:00',
            location: 'On site'
        },
        {
            title: 'Meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 July 2024',
            time: '9:00 to 14:00',
            location: 'On site'
        },
        {
            title: 'Zoom meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 August 2024',
            time: '9:00 to 14:00',
            location: 'Zoom'
        },
        {
            title: 'Zoom meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 August 2024',
            time: '9:00 to 14:00',
            location: 'Zoom'
        },
        {
            title: 'Meeting b/w WorkShop: Brand & culture and Evens Architects',
            date: '26 August 2024',
            time: '9:00 to 14:00',
            location: 'On site'
        },
    ];
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };
    const chunkedMeetingsData = chunkArray(meetingsData, 4);
    return (
        <div className={style.meetingsPage}>
            <Sidebar />
            <div className={style.meetingsData}>
                <HeadingDiv img={ProfilePic} name={'Ahmad'} designation={'Software Engineer'} page={'Meetings'} />
                <div className={style.dataContainer}>
                    {
                        chunkedMeetingsData.map((chunk, index) => (
                            <div key={index} className={style.row}>
                                {
                                    chunk.map((meeting, index) => (
                                        <div key={index} className={style.individualMeeting}>
                                            <Image src={meeting.location === 'Zoom' ? ZoomIcon : PhysicalIcon} alt="Location Icon" />
                                            <p className={style.meetingName}>{meeting.title}</p>
                                            <div className={style.dateAndTime}>
                                                <p className={style.date}>
                                                    <Image className={style.Image} src={CalendarIcon} alt="Calendar Icon" />
                                                    {meeting.date}
                                                </p>
                                            </div>
                                            <div className={style.dateAndTime}>
                                                <p className={style.time}>
                                                    <Image className={style.Image} src={ClockIcon} alt="Clock Icon" />
                                                    {meeting.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}