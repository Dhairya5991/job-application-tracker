
import axios from 'axios';
export default function Register(){
  const submit = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register',{
      email:e.target.email.value,
      password:e.target.password.value
    });
    window.location='/';
  };
  return (
    <form onSubmit={submit} className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <input name="email" className="border p-2"/>
      <input name="password" type="password" className="border p-2"/>
      <button className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  );
}
