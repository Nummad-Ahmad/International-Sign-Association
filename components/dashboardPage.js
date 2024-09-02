'use client';
import style from './dashboardPage.module.css';
import '@/app/global.css';
import Sidebar from './sidebar';
import Image from 'next/image';
import ProfilePic from '@/public/profile pic.png';
import TotalEvents from '@/public/totalevents.png';
import TotalSale from '@/public/totalsale.png';
import TotalUsers from '@/public/totalusers.png';
import TotalMatchmaking from '@/public/totalmatchmaking.png';
import TotalMeetings from '@/public/totalmeetings.png';
import Event from '@/public/event.png';
import Restaurant from '@/public/Restaurant.png';
import LineChart from './chart';
import BarChart from './barChart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HeadingDiv from './headingDiv';
export default function DashboardPage() {
    const events = [
        { image: Event, name: 'Online Meeting', description: 'Online Meeting between ABC and XYZ', date: '20 August' },
        { image: Event, name: 'Online Meeting', description: 'Online Meeting between ABC and XYZ', date: '15 August' },
        { image: Restaurant, name: 'Lunch', description: 'Lunch at Biryani Point', date: '10 August' }
    ];
    return (
        <div className={style.dashboardPage}>
            <Sidebar />
            <div className={style.dashboardData}>
                <HeadingDiv img={ProfilePic} name={'Ahmad'} designation={'Software Engineer'} page={'Dashboard'} />
                <div className={style.dataContainer}>
                    <div className={style.centralDataContainer}>
                        <div className={style.row}>
                            <div className={style.individualDiv1}>
                                <div className={style.row}>
                                    <div className={style.div1IconContainer}>
                                        <Image src={TotalEvents}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Events</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count1}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.individualDiv2}>
                                <div className={style.row}>
                                    <div className={style.div2IconContainer}>
                                        <Image src={TotalSale}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Sale</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count2}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.individualDiv3}>
                                <div className={style.row}>
                                    <div className={style.div3IconContainer}>
                                        <Image src={TotalSale}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Organizations</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count3}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.individualDiv4}>
                                <div className={style.row}>
                                    <div className={style.div4IconContainer}>
                                        <Image src={TotalUsers}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Users</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count4}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.individualDiv5}>
                                <div className={style.row}>
                                    <div className={style.div5IconContainer}>
                                        <Image src={TotalMatchmaking}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Matchmaking</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count5}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.individualDiv6}>
                                <div className={style.row}>
                                    <div className={style.div6IconContainer}>
                                        <Image src={TotalMeetings}></Image>
                                    </div>
                                    <div className={style.col}>
                                        <p className={style.title}>Total Meetings</p>
                                    </div>
                                </div>
                                <div className={style.whiteLine}></div>
                                <div className={style.row}>
                                    <div className={style.divTextContainer}>

                                    </div>
                                    <div className={style.col}>
                                        <p className={style.count6}>22</p>
                                        <p className={style.detail}>10% increase from last month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className={style.leftGraph}>
                                <p className={style.bottomTitle}>Organization by Type</p>
                                <p className={style.bottomDescription}>Organization Breakdown</p>
                                <div className={style.borderLine}></div>
                                <div className={style.statsContainer}>
                                    <div className={style.valueLabelContainer}>
                                        <p className={style.bottomTitle}>120</p>
                                        <p className={style.bottomDescription}>International Organizations</p>
                                    </div>
                                    <div className={style.valueLabelContainer}>
                                        <p className={style.bottomTitle}>200</p>
                                        <p className={style.bottomDescription}>Local Organizations</p>
                                    </div>
                                </div>
                                <div className={style.chartDiv}>
                                    <BarChart international={120} national={200}></BarChart>
                                </div>
                            </div>
                            <div className={style.rightGraph}>
                                <p className={style.bottomTitle}>Sales by Subscription</p>
                                <p className={style.bottomDescription}>Last two year subscription sales</p>
                                <div className={style.borderLine}></div>
                                <div className={style.statsContainer}>
                                    <div className={style.valueLabelContainer}>
                                        <p className={style.bottomTitle}>$2000</p>
                                        <p className={style.bottomDescription}>2023</p>
                                    </div>
                                    <div className={style.valueLabelContainer}>
                                        <p className={style.bottomTitle}>$10000</p>
                                        <p className={style.bottomDescription}>This Year</p>
                                    </div>
                                </div>
                                <div className={style.chartDiv}>
                                    <LineChart thisYear={[457, 920, 1600, 8124, 325, 728, 213, 61, 419, 321, 828, 502]} lastYear={[1094, 673, 3341, 3289, 25, 72, 562, 4240, 711, 942, 812, 3832]}></LineChart>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={style.rightDataContainer}>
                        <div className={style.calendar}>
                            <Calendar></Calendar>
                        </div>
                        <div className={style.events}>
                            <p className={style.eventsTitle}>Recent Events</p>
                            <p className={style.eventsDescription}>Recently created events</p>
                            <div className={style.scroll}>
                                {
                                    events.map(event => {
                                        return (
                                            <div className={style.singleEvent}>
                                                <div className={style.eventPicWithName}>
                                                    <Image src={event.image} height={50}></Image>
                                                    <div className={style.eventNameWithDescription}>
                                                        <p className={style.eventName}>{event.name}</p>
                                                        <p className={style.eventsDescription}>{event.description}</p>
                                                    </div>
                                                </div>
                                                <p className={style.date}>{event.date}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}