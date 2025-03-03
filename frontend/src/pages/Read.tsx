import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState<Event[]>([]);
  const { id } = useParams();

  interface Event {
    id: number;
    name: string;
    location: string;
    date: string;
  }

  useEffect(() => {
    axios
      .get<Event[]>(`http://localhost:5000/get-event/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return(
    <div>
      {
        data.map((ev) => {
          return (
            <ul>
              <li><b>ID: </b>{ev.id}</li>
              <li><b>NAME: </b>{ev.name}</li>
              <li><b>LOCATION: </b>{ev.location}</li>
              <li><b>DATE: </b>{ev.date}</li>
            </ul>
          )
        })
      }
    </div>
  )
};

export default Read;
