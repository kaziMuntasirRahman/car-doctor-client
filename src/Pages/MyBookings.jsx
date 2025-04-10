import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookings = () => {
  const [bookings, setBookings] = useState(useLoaderData());

  const handleDelete = id => {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#355E3B',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, proceed with deletion
        fetch(`http://localhost:8000/bookings/${id}`, { method: "delete" })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
              setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));
            } else {
              Swal.fire("Deletion Operation Failed", "An error occurred while deleting the service.", "error");
            }
          })
          .catch(error => {
            console.error('Error deleting service:', error);
            Swal.fire("Error", "An error occurred while processing your request. Please try again later.", "error");
          });
      }
    });
  };

  const handleConfirm = id => {
    fetch(`http://localhost:8000/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status: 'approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // Update the status of the booking in the UI
          setBookings(prevBookings =>
            prevBookings.map(booking =>
              booking._id === id ? { ...booking, status: 'approved' } : booking
            )
          );
        }
      })
      .catch(error => {
        console.error('Error updating status:', error);
        Swal.fire("Error", "An error occurred while updating status. Please try again later.", "error");
      });
  }


  return (
    <div>
      total number of booking: {bookings.length}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Service Title</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
              bookings?.map((booking, index) => (
                <tr key={index}>
                  <th>
                    <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-error">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={booking.serviceImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.customerName}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {booking.serviceTitle}
                    <br />
                    <span className="badge badge-ghost badge-sm"></span>
                  </td>
                  <td>{booking.date}</td>
                  <th>
                    {(booking.status && booking.status === 'approved') ?
                      <button className="btn bg-green-600 text-white btn-sm">{booking.status}</button>
                      :
                      <button onClick={() => handleConfirm(booking._id)} className="btn bg-orange-600 text-white btn-sm">Approve</button>
                    }
                  </th>

                </tr>
              ))
            }
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service Title</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
