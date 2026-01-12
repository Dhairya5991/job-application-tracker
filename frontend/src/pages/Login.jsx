
import axios from 'axios';
export default function Login(){
  const submit = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login',{
      email:e.target.email.value,
      password:e.target.password.value
    });
    localStorage.setItem('token', res.data.token);
    window.location='/dashboard';
  };
  return (
    <form onSubmit={submit} className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input name="email" placeholder="Email" className="border p-2"/>
      <input name="password" type="password" placeholder="Password" className="border p-2"/>
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
    </form>
  );
}
