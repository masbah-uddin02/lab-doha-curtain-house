import React, { useEffect, useState } from 'react';
import AdminProductTable from './AdminProductTable';

const AdminAllProducts = () => {
    const [data,setData]=useState([])
    const [refetch,setRefetch]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/products/getProducts`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.data.length) {
              setData(data?.data);
            }
          });
      }, [refetch]);
   
    return (
        <div className="px-4 py-4 -mx-4 overflow-x-scroll sm:-mx-8 sm:px-8 ">
            <div className='w-fit mb-5'>
            <h1 className='text-lg font-semibold'>All Productss</h1>
            <div className='h-1 w-[50%] bg-primary'></div>
            </div>
          <div className="inline-block min-w-full  rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300"
                  >
                    Action
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {data?.map((d) => (
                  <AdminProductTable
                    key={d?.key}
                    data={d}
                    setRefetch={setRefetch}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
    );
};

export default AdminAllProducts;