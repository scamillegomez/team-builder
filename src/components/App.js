import logo from '../logo.svg';
import '../App.css';
import axios from '../axios'
import React, { useState, useEffect } from 'react'
import Form from './Form'

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

function App() {
  const [team, setTeam] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formError,setFormError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    
    if(!newTeamMember.username || !newTeamMember.email || !newTeamMember.role){
      setFormError('*all forms are required');
    }
    axios.post('fakeapie.com',newTeamMember)
      .then(res=>{
        setTeam([res.data,...team]);
        setFormValues(initialFormValues);
      })
      .catch(err=>console.log(err));
  }

    useEffect(()=>{
      axios.get('fakeapi.com').then(res=>setTeam(res.data))
    },[]);

  return (
    <div className="container">
      <h1>Team Builder</h1>
      {formError && <h2 className='error'>{formError}</h2>}
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {team.map(teamMember=>{
        return(
          <div>
            <h2>{teamMember.username}</h2>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
