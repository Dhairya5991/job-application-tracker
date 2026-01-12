
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Admin(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/admin/users',{
      headers:{Authorization:'Bearer '+localStorage.getItem('token')}
    }).then(res=>setUsers(res.data));
  },[]);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      {users.map(u=>(<div key={u._id}>{u.email} - {u.role}</div>))}
    </div>
  );
}
