import React, { ChangeEvent, useState } from 'react'

    const [formData, setFormData] = useState({
        name: '',
        status: '',
        priority: '',
        description: '',        
      });

const handleChange = (event: any)=>{
    const {name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
      });
}


const handleSubmit  = (event: any) =>{
    event.preventDefault();
}


const Form = () => {
  return (
    <div className=' Form'>
        <header>
            <h1>
                Military Operations Dashboard
            </h1>
        </header>
        <form onSubmit={handleSubmit }>
            <input type="text"  placeholder='name'/>
            <select name="status" id="">
                <option value="Pending"></option>
                <option value="Progress"></option>
                <option value="Completed"></option>
            </select>

            <select name="Priority" id="">
                <option value="High"></option>
                <option value="Low"></option>
            </select>
            <input type="text" placeholder='Description' />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Form