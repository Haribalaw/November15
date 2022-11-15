
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState,useEffect} from 'react';

import Axios from 'axios';

import {Link} from 'react-router-dom'

export function Table(){

  const [detail,setDetail]=useState([])


  useEffect(()=>{
            Axios.get('http://localhost:5000/view')
            .then(
                function(res){
                    setDetail(res.data)
                }
            )
       
  },[])


    return(
        <div>
            <div className="container">
          
                <div className="col-lg-10 mt-5 mr-auto ml-auto">
                <table className="table-bordered">
                    <thead>
                        <tr><td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                        <td>ADDRESS</td></tr>
                    </thead>
                    <tbody>

                    {detail.map((value,index)=>{
                        return(
                        <tr key={index}>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.phone}</td>
                          <td>{value.address}</td>
                        </tr>)}
)}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}