import  {  useState } from 'react'
import { postNewMission } from '../../Requests';





const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        status: 'Pending',
        priority: 'High',
        description: '',        
    });
    
    const handleChange = (event: any)=>{
        const {name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    const handleSubmit  = async (event: any) =>{
        event.preventDefault();
        console.log(formData);
        const data = await postNewMission(formData)
    }

    return (
        <div className=' Form'>
        <header>
            <h1>
                Military Operations Dashboard
            </h1>
        </header>

        <form onSubmit={handleSubmit } className='form'>

            <input type="text" name='name' placeholder='name' onChange={handleChange}/>
            <select name="status" onChange={handleChange}>
                <option value="pending" >pending</option>
                <option value="in Progress" >progress</option>
                <option value="Completed" >Completed</option>
            </select>

            <select name="priority" id="" onChange={handleChange}>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>

            <input type="text" placeholder='description' name='description' onChange={handleChange}/>
            <button type='submit' className='AddBtn'> Add Mission</button>

        </form>

    </div>
  )
}

export default Form