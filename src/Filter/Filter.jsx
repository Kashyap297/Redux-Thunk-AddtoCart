import React, { useEffect, useState } from 'react';
import page from "../Component/images/page.png";
import { Link } from 'react-router-dom';

const Filter = ({ users, setUsers }) => {

    const initData = [
        { name: "Omprakash Jat", ott: "Netflix", rate: 1699, status: "Yearly" },
        { name: "Vikas Borse", ott: "Amazon Prime", rate: 599, status: "Quarterly" },
        { name: "Kevin Chauhan", ott: "Amazon prime", rate: 999, status: "Yearly" },
        { name: "Jay Nandarbarwala", ott: "Zee5", rate: 99, status: "Monthly" },
        { name: "Dev Chauhan", ott: "Disney+ Hotstar", rate: 149, status: "Quarterly" },
        { name: "Priyanshu Mishra", ott: "Netflix", rate: 149, status: "Monthly" },
        { name: "Kashyap Chauhan", ott: "Disney+ Hotstar", rate: 1499, status: "Yearly" },
        { name: "Sahil Kapadia", ott: "Amazon Prime", rate: 299, status: "Monthly" },
        { name: "Anant Shah", ott: "Disney+ Hotstar", rate: 149, status: "Quarterly" },
        { name: "Nilay Patel", ott: "Zee5", rate: 899, status: "Yearly" },
    ]

    const [lists, setLists] = useState(initData)

    const [noRecord, setNoRecord] = useState(false)
    const [filterData, setFilterData] = useState('')
    const [filterOtt, setFilterOtt] = useState('')
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedCategory, setSelectedCategory] = useState('--Term--');

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase()
        // console.log(value);
        setFilterData(searchValue)
        const filterList = initData.filter(lists => lists.name.toLowerCase().includes(searchValue))
        setLists(filterList)
    }
    const handleOtt = (e) => {
        const searchValue = e.target.value.toLowerCase()
        // console.log(value);
        setFilterOtt(searchValue)
        const filterList = initData.filter(lists => lists.ott.toLowerCase().startsWith(searchValue))
        setLists(filterList)
    }

    const handleSortButtonClick = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedData = [...lists];

        sortedData.sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.rate - b.rate;

            } else {
                return b.rate - a.rate;
            }
        });
        setLists(sortedData)
        setSortOrder(newSortOrder)
    }

    const handleCategoryChange = (e) => {
        const value = e.target.value

        setSelectedCategory(value)
        // const termData = value === '--Term--' ? lists : lists.filter(item => item.status === value) 
        // setLists(termData)
        let filterStatus;
        if (value === 'Term') {
            filterStatus = initData;
        } else if (value === "Yearly") {
            filterStatus = initData.filter(item => item.status === value);
        } else if (value === "Quarterly") {
            filterStatus = initData.filter(item => item.status === value);
        } else if (value === "Monthly") {
            filterStatus = initData.filter(item => item.status === value);
        } else {
            filterStatus = initData;
        }
        setLists(filterStatus)
    }

    useEffect(() => {
        if (lists.length === 0) {
            setNoRecord(true)
        } else {
            setNoRecord(false)
        }
    }, [lists])

    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="area p-4 px-5 bg-white bor-rad shadow">
                        <table className='table table-hover table-bordered table-rounded p-3 text-center caption-top align-middle'>
                            <caption className='mb-3'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className='m-0'>Filter Data </h3>
                                    <div className="form-group col-3">
                                        <input type="text" placeholder="Search Name..." name='search' value={filterData} onChange={handleSearch} ></input>
                                        <label>Filters</label>
                                    </div>
                                    <div className="form-group col-3">
                                        <input type="text" placeholder="Search Ott platform..." name='search' value={filterOtt} onChange={handleOtt}></input>
                                        <label>OTT</label>
                                    </div>
                                    <button className='btn btn-dark bor-rad' onClick={handleSortButtonClick}>Sort Price{sortOrder === 'asc' ? <i className="fa-solid fa-circle-up ms-2"></i> : <i className="fa-solid fa-circle-down ms-2"></i>}</button>
                                    <div className="form-group col-2">
                                        <select className='bor-rad w-100 pyy-2' value={selectedCategory} onChange={handleCategoryChange}>
                                            <option value="Term" className='pyy-2 bor-rad'>--Term--</option>
                                            <option value="Yearly" className='pyy-2 bor-rad'>Yearly</option>
                                            <option value="Quarterly" className='pyy-2 bor-rad'>Quarterly</option>
                                            <option value="Monthly" className='pyy-2 bor-rad'>Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </caption>
                            <thead className='table-dark'>
                                <tr>
                                    <th className='gr-text'>Sr.</th>
                                    <th className='gr-text'>Name</th>
                                    <th className='gr-text'>OTT Platforms</th>
                                    <th className='gr-text'>Rate</th>
                                    <th className='gr-text col-2' >Subscription status</th>

                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {
                                    noRecord ? (
                                        <>
                                            <td className='text-center fw-bold pe-0 py-3 fs-3 text-danger' colSpan={5}><img src={page} alt="" className='d-block m-auto' width="150px" />
                                                Empty Records</td>
                                            <td className='p-0'></td>
                                            <td className='p-0'></td>
                                            <td className='p-0'></td>
                                        </>
                                    ) : (
                                        lists.map((list, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{list.name}</td>
                                                <td>{list.ott}</td>
                                                <td>{list.rate + "/-"}</td>
                                                {
                                                    list.status === 'Yearly' ?
                                                        (<td><span className='badge' style={{ backgroundColor: '#d8a701' }}>{list.status}</span></td>) :
                                                        list.status === "Quarterly" ?
                                                            (<td><span className='badge' style={{ backgroundColor: '#055c9d' }}>{list.status}</span></td>)
                                                            : (
                                                                <td><span className='badge' style={{ backgroundColor: '#bf1e39' }}>{list.status}</span></td>
                                                            )

                                                }
                                            </tr>
                                        })
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Filter