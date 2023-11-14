
/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const ManageServiceComp = ({service}) => {
    const {_id, serviceName, serviceImg, description, price, area } = service;


    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/services/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.deletedCount > 0) {
            toast.success('Successfully deleted');
          
         
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
     

        
    }

    return (


        <div className="max-w-[340px] mx-auto bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-out-up">

            <img className="rounded-t-sm" src={serviceImg} alt="" />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100)}...</p>
                
                <p className="font-medium text-lg mb-4">Price: {price} tk.</p>
                <div className="flex justify-between items-center mb-3">
                        <p className="font-light text-sm">Service area:</p>
                        <p className="font-light text-sm">{area}</p>
                </div>

                <div className="flex justify-center gap-4">
                <Link to={`/update/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-sm hover:bg-green-500">
                    Edit
                </Link>

                <button onClick={()=>handleDelete(service._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#a02013] rounded-sm hover:bg-rose-600">
                    Delete
                </button>
                
                </div>
            </div>
        </div>

    );
};

export default ManageServiceComp;

