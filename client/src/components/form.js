import Axios from 'axios';
import { Button } from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const StudentData =(event)=>{
          var dataString=new FormData(event.target);
          var config={headers:{'enctype':'{multipart/form-data}'}}

        // const [name,setName]=useState()

           Axios.post('http://localhost:5000/detail',dataString,config)
           .then(function(res){
            if(res.data.status ==='Inserted'){
                alert("Inserted")
                //window.location.href="/table";
            }
           })


}


export const Form=()=>{
    return(
        <div>
            <div className="col-lg-6 ml-auto mr-auto mt-5">
                <form onSubmit={StudentData}>
                <div>
                    <label>NAME</label><br/>
                    <input type="text" name="name" placeholder="Enter your name"/>
                </div>
                <div>
                    <label>EMAIL</label><br/>
                    <input type="text" name="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <label>PHONE</label><br/>
                    <input type="number" name="phone" placeholder="Enter your number"/>
                </div>
                <div>
                    <label>ADDRESS</label><br/>
                    <input type="text" name="address" placeholder="Enter your address"/>
                </div>
                <div className='mt-5'>
                    <button type="submit" className='btn btn-primary'>SUBMIT</button>
                </div>
                </form>
            </div>
        </div>
    );
}