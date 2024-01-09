import React from 'react'
import Form from './Form'

const Edituser = ({users, setUsers}) => {
  return (
    <Form users={users} setUsers={setUsers} isEdit={true}/>
  )
}

export default Edituser