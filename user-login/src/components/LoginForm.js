import React,{useState} from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({name:"", email:"",password:""});
  const submitHandler = e =>{
    e.preventDefault(); //prevent page reload
    Login(details); //check login info & next step
  }
  return (
    <div className="container grey lighten-4 ">
      <div className="row center-align ">
        <form className="col l6 offset-l3"
        onSubmit={submitHandler}>
        <div className="form-inner">
          <h2 className="text-lighten-1 teal-text">Login</h2>
          
          <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            <label htmlFor="name">Your name</label>
          </div>

          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            <label htmlFor="email">Your mail</label>
          </div>

          <div className="input-field">
            <i className="material-icons prefix">password</i>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            <label htmlFor="password">Your password</label>
          </div>

          {(error!=="")?
          ( <div className="error red-text text-accent-3">{error}</div>): ""}

           <div className="input-field center">
              <input className="btn waves-effect  waves-light btn" type="submit" value="LOGIN"/>
            </div>  
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginForm
