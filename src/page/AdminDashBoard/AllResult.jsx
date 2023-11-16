import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAllResult from '../../hooks/useAllResult';

const AllResult = () => {
    const [usersResult , refetch] = useAllResult();
    console.log(usersResult);



    return (
        <div className="overflow-x-auto w-[80%] my-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr style={{backgroundColor: "#88619A", color: "#ffffff", textAlign: "center", width:"100%"}}>
              <th>User Id</th>
              <th>Email</th>
              <th>Test Score</th>
            </tr>
          </thead>
          <tbody>
            {
               usersResult?.map(res=> <tr key={res?._id}>
                <td>{res?._id}</td>
                <td>{res?.email}</td>
                <td><label htmlFor={res?._id} className=" px-4 py-2 bg-[#4297b3] font-medium text-white rounded-md">See Result</label></td>
                <td>

                <input type="checkbox" id={res?._id} className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
   
   <div>

   <table style={{width: "100%", borderCollapse: "collapse"}}>
            <thead>
              <tr style={{backgroundColor: "#88619A", color: "#ffffff", textAlign: "center"}}>
                <th style={{border: "1px solid #dddddd", padding: "8px"}}>Name</th>
                <th style={{border: "1px solid #dddddd", padding: "8px"}}>Score</th>
              </tr>
            </thead>
            <tbody>
              {
                res?.allAnswer?.map((answer,index)=><tr key={index} style={{backgroundColor: `${index % 2 === 0 ? '#ffffff' : '#f2f2f2'}`}}>
                <td style={{border: "1px solid #dddddd", textAlign: "center", padding:" 8px"}}>{answer.Name}</td>
                <td style={{border: "1px solid #dddddd", textAlign: "center", padding:" 8px"}}>{answer.Score}</td>
              </tr>)
              }
            </tbody>
          </table>

   </div>
   
    <div className="modal-action">
      <label htmlFor={res?._id} className="btn btn-warning">Close!</label>
    </div>
  </div>
</div>

                </td>
              
              </tr>) 

              
            }
           
          </tbody>
        </table>
      </div>
    );
};

export default AllResult;