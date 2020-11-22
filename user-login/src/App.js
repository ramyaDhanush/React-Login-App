import React, {useState} from 'react'
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: "admin@123",
  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details =>{
    // Handle User Login
    if(details.email === adminUser.email && 
      details.password === adminUser.password){
        setUser({
          name:details.name,
          email:details.email
        });
    }
    else{
      setError("Check Email or Password");
    }
  }

  const Logout = () =>{
    // Handle User Logout
    setUser({name:"",email:""})
    setError("")
  }

  return (
    <div className="App container">
      {(user.email!==""?(
        <div className="card-panel center-align">
          <h2 className="card-title blue-grey-text text-darken-3">Welcome</h2>
          <h4 className="orange-text text-darken-4" style={{textTransform:"capitalize"}}>{user.name}</h4>
          <h4  className="green-text text-darken-2">Successful Login</h4>
          <button className="btn white-text waves-effect waves-light btn" onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      ))}
    </div>
 );
}

export default App;
