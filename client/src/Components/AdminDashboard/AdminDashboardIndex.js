import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const AdminDashboardIndex = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userTimeZone, setUserTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      {/* <div className="lg:grid lg:grid-cols-3 gap-5 md:grid md:grid-cols-3 font-bold mb-4">
        <div className="flex justify-center items-center bg-[#03363D] shadow text-white h-40 mb-2 max-w-xs rounded-md gap-2 text-xl">
          <Icon className="text-white" icon="icon-park-solid:appointment" />

          <p>Appointment: </p>
          <p>1</p>
        </div>
        <div className="flex justify-center items-center bg-[#1CA538] text-white shadow h-40 mb-2 max-w-xs rounded-md gap-2 text-xl">
          <Icon icon="ic:outline-email" />
          <p>Subscribe Email:</p>
          <p>1</p>
        </div>
        <div className="justify-center flex items-center bg-[#14B8A6] text-white shadow h-40 mb-2 max-w-xs rounded-md gap-2 text-xl">
          <Icon icon="subway:admin-1" />
          <p>Total Order: </p>
          <p>2</p>
        </div>
      </div> */}
            <div><h1 className="text-center text-4xl">Welcome to Doha Curtain House</h1></div>


      <div className="bg-[#12486B] text-white shadow-md p-4 mt-3 rounded-lg">
        <h1 className="text-xl font-bold mb-2">Today</h1>
        <p className="font-thin mb-2">
          {currentTime.toLocaleDateString("en-US", { weekday: "long" })} (
          {userTimeZone})
        </p>
        <p className="font-thin mb-4">{currentTime.toLocaleString()}</p>
      </div>


    </div>
  );
};

export default AdminDashboardIndex;
