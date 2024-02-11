import { Icon } from '@iconify/react';
import React from 'react';
import DeleteHook from '../../../../Hooks/DeleteHook';
import { server_url } from '../../../../Config/API';
import { Link } from 'react-router-dom';

const AdminServiceTable = ({data,setRefetch,refetch}) => {
    const url = `${server_url}/service/deleteService/${data?._id}`

    return (
        <tr>
        <td className="px-5 py-4  bg-white border-b border-gray-300">
          <div className="w-fit mr-auto">
            <img
              alt="img"
              src={data?.img1}
              className="mx-auto object-cover w-12 h-12 rounded-full"
            />
          </div>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
          <p className="text-gray-900 whitespace-no-wrap">
            {data?.title}
          </p>
        </td>
        
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div dangerouslySetInnerHTML={{ __html: data?.description?.slice(0,50) }}></div>
        </td>
       
  
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
          <div className="flex  gap-5 items-center">
            <button
              onClick={() => DeleteHook({refetch,setRefetch,url})}
              className="bg-primary p-2 text-white rounded-full hover:bg-primary/80"
            >
              <Icon className="text-2xl" icon="ic:baseline-delete" />
            </button>
            <Link to={`/adminDashboard/updateService/${data?._id}`}
             
              className="bg-primary block p-2 text-white rounded-full hover:bg-primary/80"
            >
              <Icon className="text-2xl" icon="basil:edit-outline" />
            </Link>
          </div>
        </td>
      </tr>
    );
};

export default AdminServiceTable;