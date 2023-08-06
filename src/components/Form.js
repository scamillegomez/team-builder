import React from 'react';

export default function Form(props){
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Username
                    <input 
                        type="text" 
                        name="username"
                        placeholder='enter username'
                        value={values.username}
                        onChange={onChange}
                        maxLength={45}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="text"
                        name="email"
                        placeholder="enter email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Role
                    <input 
                        type="text"
                        name="role"
                        placeholder="enter role"
                        value={values.role}
                        onChange={onChange}
                    />
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}