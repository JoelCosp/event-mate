import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState<Event[]>([]);

    interface Event {
        id: number;
        name: string;
        location: string;
        date: string;
    }
    
    useEffect(() => {
        axios.get<Event[]>('http://localhost:5000/events')
        .then((res) => {
            setData(res.data)
            console.log(data);
        })
        .catch((err) => console.log(err))
    }, [])

  return (
    <div>
        <Link to="/create"><button className='bg-green-600 px-5 py-2 rounded-xl font-semibold text-white'>ADD EVENT</button></Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>LOCATION</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((ev) => {
                        return (
                            <tr key={ev.id}>
                                <td>{ev.id}</td>
                                <td>{ev.name}</td>
                                <td>{ev.location}</td>
                                <td>{ev.date}</td>
                                <td>
                                    <Link to={`/read/${ev.id}`}><button className='bg-blue-600 px-5 py-2 rounded-xl font-semibold text-white'>READ</button></Link>
                                    <Link to={`/edit/${ev.id}`}><button className='bg-yellow-600 px-5 py-2 rounded-xl font-semibold text-white'>EDIT</button></Link>
                                </td>
                                <td><button className='bg-red-600 px-5 py-2 rounded-xl font-semibold text-white'>DELETE</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home
