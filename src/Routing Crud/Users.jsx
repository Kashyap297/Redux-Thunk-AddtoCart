import React, { useEffect, useState } from 'react';
import editicon from "../Component/images/edit.png";
import trashicon from "../Component/images/trash.png";
import usersicon from "../Component/images/user.png";
import page from "../Component/images/page.png";
import { Link } from 'react-router-dom';

const Users = ({ users, setUsers }) => {

    const [noRecord, setNoRecord] = useState(false)

    const handleDelete = (id) => {
        const temp = [...users]
        temp.splice(id, 1)
        console.log(temp);
        setUsers(temp)
    }

    useEffect(() => {
        if (users.length === 0) {
            setNoRecord(true)
        } else {
            setNoRecord(false)
        }
    }, [users])

    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className="area p-4 px-5 bg-white bor-rad shadow">
                        <table className='table table-hover table-bordered table-rounded p-3 text-center caption-top align-middle'>
                            <caption className='mb-3'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h3 className='m-0'>Users Data </h3>
                                    {/* <div className="form-group col-4">
                                        <input type="text" placeholder="" name='name'></input>
                                        <label>Filters</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="" name='name'></input>
                                        <label>Sorting</label>
                                    </div> */}
                                    <Link to='/adduser' className='btn btn-dark gr-text'><img src={usersicon} alt="" width="22px" className='me-2' />New</Link>
                                </div>
                            </caption>
                            <thead className='table-dark'>
                                <tr>
                                    <th className='gr-text'>Name</th>
                                    <th className='gr-text'>Email</th>
                                    {/* <th className='gr-text'>Age</th> */}
                                    <th className='gr-text'>City</th>
                                    <th className='gr-text col-2' colSpan={2}>Action</th>
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


                                        users.map((user, index) => {
                                            return <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                {/* <td>22</td> */}
                                                <td>{user.city}</td>
                                                <td>
                                                    <Link to={`/edituser/${index}`} className='btn p-0 px-3'><img src={editicon} alt="" width="25px" /></Link>
                                                </td>
                                                <td>
                                                    <button className='btn p-0 px-3' onClick={() => handleDelete(index)}><img src={trashicon} alt="" width="25px" /></button>
                                                </td>
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

export default Users