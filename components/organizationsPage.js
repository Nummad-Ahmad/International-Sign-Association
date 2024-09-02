'use client';
import Sidebar from "./sidebar";
import '@/app/global.css';
import style from './organizationsPage.module.css';
import HeadingDiv from "./headingDiv";
import ProfilePic from '@/public/profile pic.png';
import { useEffect, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function OrganizationsPage() {
    const typeArray = [
        { value: 'Select', label: 'Select' },
        { value: 'Local', label: 'Local' },
        { value: 'International', label: 'International' },
    ];
    const planArray = [
        { value: 'Select', label: 'Select' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Gold', label: 'Gold' },
        { value: 'Diamond', label: 'Diamond' },
    ];
    const [type, setType] = useState('Select');
    const [plan, setPlan] = useState('Select');
    const organizationData = [
        {
            organization: 'Workshop: Brand & Culture',
            owner: 'Tim Barber',
            email: 'timbarber@gmail.com',
            type: 'Local',
            plan: 'Silver',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        },
        {
            organization: 'Evens Architects',
            owner: 'Erik Evens',
            email: 'erikevens@gmail.com',
            type: 'International',
            plan: 'Diamond',
        }
    ];
    const [filteredData, setFilteredData] = useState([]);
    function handleType(e) {
        setType(e.target.value);
        setPlan('Select');
    }
    function handlePlan(e) {
        setPlan(e.target.value);
        setType('Select');
    }
    useEffect(() => {
        if (plan == 'Select' && type == 'Select') {
            setFilteredData(organizationData);
        } else if (plan == 'Select' && type != 'Select') {
            const temp = organizationData.filter(item => item.type == type);
            setFilteredData(temp);
        } else {
            const temp = organizationData.filter(item => item.plan == plan);
            setFilteredData(temp);
        }
    }, [plan, type]);
    const [isActive, setActive] = useState([]);
    useEffect(() => {
        const updatedIsActive = filteredData.map((item, index) => index % 2 === 0);
        setActive(updatedIsActive);
    }, [filteredData]);
    function toggleIcon(index) {
        const value = !isActive[index];
        const tempArray = [...isActive];
        tempArray[index] = value;
        setActive(tempArray);
    }
    function deleteItem(index){
        const updatedItems = filteredData.filter((_, i) => i !== index);
        setFilteredData(updatedItems);
    }
    return (
        <div className={style.organizationsPage}>
            <Sidebar />
            <div className={style.organizationsData}>
                <HeadingDiv img={ProfilePic} name={'Ahmad'} designation={'Software Engineer'} page={'Organizations'} />
                <div className={style.dataContainer}>
                    <div className={style.filters}>
                        <div>
                            <select className={style.filterDiv} onChange={handleType} value={type}>
                                {
                                    typeArray.map(type => (
                                        <option key={type.value} label={type.value}>{type.value}</option>
                                    ))
                                }
                            </select>
                            <select className={style.filterDiv} onChange={handlePlan} value={plan}>
                                {
                                    planArray.map(type => (
                                        <option key={type.value} label={type.value}>{type.value}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button className={style.newOrganizationButton}>Add Organization</button>
                    </div>
                    <div className={style.statsContainer}>
                        <div className={style.statsHeading}>
                            <p className={style.organizationName}>Organization</p>
                            <p className={style.organizationOwner}>Owner</p>
                            <p className={style.email}>Email</p>
                            <p className={style.type}>Type</p>
                            <p className={style.plan}>Plan</p>
                            <p className={style.actions}>Actions</p>
                        </div>
                        {
                            filteredData.map((item, index) => {
                                return (
                                    <div className={`${style.statsData} ${index % 2 != 0 ? style.even : ''}`} >
                                        <p className={style.organizationName}>{item.organization}</p>
                                        <p className={style.organizationOwner}>{item.owner}</p>
                                        <p className={style.email}>{item.email}</p>
                                        <p className={style.type}>{item.type}</p>
                                        <p className={style.plan}>{item.plan}</p>
                                        <p className={style.actions}>
                                            <div onClick={() => toggleIcon(index)}>
                                                {
                                                    (isActive[index]) ?
                                                        <FaToggleOn color="rgba(23, 122, 189, 1)" size={30} /> :
                                                        <FaToggleOff color="rgba(170, 170, 170, 1)" size={30} />
                                                }
                                            </div>
                                            <div onClick={()=>deleteItem(index)}>
                                                <MdDelete size={30} />
                                            </div>
                                        </p>
                                    </div>
                                );
                            })
                        }
                        <div className={style.paginationDiv}>
                            <p>Showing {filteredData.length} of {filteredData.length} records</p>
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