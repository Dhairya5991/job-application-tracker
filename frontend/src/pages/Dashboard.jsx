
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard(){
  const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/jobs',{
      headers:{Authorization:'Bearer '+localStorage.getItem('token')}
    }).then(res=>setJobs(res.data));
  },[]);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Job Applications</h1>
      {jobs.map(j=>(
        <div key={j._id} className="border p-4 mb-2 rounded">
          <b>{j.company}</b> - {j.position}
        </div>
      ))}
    </div>
  );
}
