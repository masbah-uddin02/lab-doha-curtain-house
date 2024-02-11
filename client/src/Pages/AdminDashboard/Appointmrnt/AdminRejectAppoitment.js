import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading";

const AdminRejectAppoitment = () => {
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch data from the API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/appointment/getAppointments"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const appointments = await response.json();
  
      const pendingAppointments = appointments.data.filter(
        (appointment) => appointment.status === "reject"
      );
      setPendingAppointments(pendingAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleConfirm = async (appointmentId) => {
    try {
      // Send a request to update the status to "confirm" for the specific appointment
      await fetch(
        `http://localhost:5000/api/v1/appointment/updateAppointments/${appointmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "confirm",
          }),
        }
      );

      // Fetch data again to update the state
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleReject = async (appointmentId) => {
    try {
      // Send a request to update the status to "reject" for the specific appointment
      await fetch(
        `http://localhost:5000/api/v1/appointment/updateAppointments/${appointmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "reject",
          }),
        }
      );

      // Fetch data again to update the state
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
    {loading && <Loading />} {/* Show loading indicator */}
    {/* Your existing code for displaying pending appointments */}
    {/* ... */}
    <div>
      {/* <div className="flex gap-5 items-center">
        <div className="border p-2 bg-yellow-500 text-white uppercase cursor-pointer">
          <h1>Pending Appointment</h1>
        </div>
        <div className="border p-2 bg-green-500 text-white uppercase cursor-pointer">
          <h1>Confirm Appointment</h1>
        </div>
        <div className="border p-2 bg-red-500 text-white uppercase cursor-pointer">
          <h1>Reject Appointment</h1>
        </div>
      </div> */}

      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-5">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Phone
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Time
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Area
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                City
              </th>
              <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                Action{" "}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {pendingAppointments.map((appointment, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium border text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment?.name}
                </td>

                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment?.phone}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment?.email}{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment.date
                    ? new Date(appointment.date).toLocaleDateString()
                    : ""}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment.time
                    ? new Date(
                        `2000-01-01T${appointment.time}`
                      ).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })
                    : ""}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment?.area}
                </td>
                <td className="whitespace-nowrap px-4 py-2 border text-gray-700">
                  {appointment?.city}{" "}
                </td>
                <td className="whitespace-nowrap px-4 py-2  text-gray-700 gap-5 flex">
                  {/* <button
                    onClick={() => handleConfirm(appointment._id)}
                    className="border p-1 bg-green-500 text-white"
                  >
                    {" "}
                    <Icon icon="line-md:confirm"></Icon>{" "}
                  </button>
                  <button
                    onClick={() => handleReject(appointment._id)}
                    className="border p-1  bg-red-500 text-white"
                  >
                    {" "}
                    <Icon icon="charm:cross"></Icon>{" "}
                  </button> */}
                {appointment?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default AdminRejectAppoitment;
