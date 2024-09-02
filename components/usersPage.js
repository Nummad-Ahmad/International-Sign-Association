'use client';
import style from './usersPage.module.css';
import '@/app/global.css';
import Sidebar from './sidebar';
import ProfilePic from '@/public/profile pic.png';
import HeadingDiv from './headingDiv';
import { useEffect, useState } from 'react';
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
export default function UsersPage() {
    const organizationData = [
        {
            organization: 'Workshop: Brand & Culture',
            owner: 'Tim Barber',
            email: 'timbarber@gmail.com',
            type: 'Local',
            plan: 'Silver',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
            phone: 123456789
        }
    ];
    const [text, setText] = useState('');
    const [clicked, setClicked] = useState(false);
    const [filteredData, setFilteredData] = useState(organizationData);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && text != '') {
            event.preventDefault();
            setClicked(true);
            setFilteredData(organizationData.filter((item) => item.owner == text));
        }
    };
    function handleChange(event) {
        setText(event.target.value);
        if (text.length == 1) {
            setClicked(false);
        }
    }
    return (
        <div className={style.usersPage}>
            <Sidebar />
            <div className={style.usersData}>
                <HeadingDiv img={ProfilePic} name={'Ahmad'} designation={'Software Engineer'} page={'Users'} />
                <div className={style.dataContainer}>
                    <div className={style.filters}>
                        <input className={style.input} placeholder='Search' onChange={handleChange} onKeyDown={handleKeyDown} value={text} />
                        <button className={style.newOrganizationButton}>Add User</button>
                    </div>
                    <div className={style.statsContainer}>
                        <div className={style.statsHeading}>
                            <p className={style.serial}>Serial</p>
                            <p className={style.name}>Owner</p>
                            <p className={style.email}>Email</p>
                            <p className={style.organization}>Organization</p>
                            <p className={style.phone}>Phone</p>
                        </div>
                        {
                            clicked ?
                                filteredData.map((item, index) => {
                                    return (
                                        <div key={index} className={`${style.statsData} ${index % 2 != 0 ? style.even : ''}`} >
                                            <p className={style.serial}>{index + 1}</p>
                                            <p className={style.name}>{item.owner}</p>
                                            <p className={style.email}>{item.email}</p>
                                            <p className={style.organization}>{item.organization}</p>
                                            <p className={style.phone}>{item.phone}</p>
                                        </div>
                                    );
                                })
                                :
                                organizationData.map((item, index) => {
                                    return (
                                        <div className={`${style.statsData} ${index % 2 != 0 ? style.even : ''}`} >
                                            <p className={style.serial}>{index + 1}</p>
                                            <p className={style.name}>{item.owner}</p>
                                            <p className={style.email}>{item.email}</p>
                                            <p className={style.organization}>{item.organization}</p>
                                            <p className={style.phone}>{item.phone}</p>
                                        </div>
                                    );
                                })
                        }
                        <div className={style.paginationDiv}>
                        {
                            clicked ? 
                            <p>Showing {filteredData.length} of {filteredData.length} records</p>
                            :                            
                            <p>Showing {organizationData.length} of {organizationData.length} records</p>
                        }
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