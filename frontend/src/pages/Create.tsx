import React, { useState } from 'react'
import axios from 'axios';


const Create = () => {
  
    const [values, setValues] = useState({
        name: '',
        location: '',
        date: '',
    })

    function handleSubmition(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/add-event', values)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err));
    }

    return (
    <div>
      <h3>Add Data</h3>
      <form className='flex flex-col text-center font-semibold' onSubmit={handleSubmition}>
        <label htmlFor="name">NAME</label>
        <input type="text" name='name' placeholder='Name' onChange={(e) => setValues({...values, name: e.target.value})}/>

        <label htmlFor="location">LOCATION</label>
        <input type="text" name='location' placeholder='Location' onChange={(e) => setValues({...values, location: e.target.value})}/>

        <label htmlFor="date">DATE</label>
        <input type="date" name='date' placeholder='Date' onChange={(e) => setValues({...values, date: e.target.value})}/>
        <button className='bg-gray-950 text-white'>Send</button>
      </form>
    </div>
  )
}

export default Create
