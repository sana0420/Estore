import React from 'react'
import './Login.css';
import axios from 'axios';
function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      const url = "http://localhost:3000/users/login";
      axios(url)
          .then(res => console.log(res)) // this line return status:200 and data:null
          .catch(err => console.log(err.message))
    };
  return (
   <div className='d-flex align-item-center w-100'>
     <div className='bg-dark text-light m-5 p-5 login-box d-flex flex-column justify-content-center align-items-center'>
        <form className="justify-content-around" onSubmit={handleSubmit}>
        <div>
          <label className='dis me-5'>Email:</label>
          <input
            type="email"
            placeholder='xyz@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='dis me-3'>Password:</label>
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="px-4 pt-1 pb-1 mt-3 pos bg-primary" type="submit">Login</button>
      </form>
    </div>
   </div>
  )
}

export default Login