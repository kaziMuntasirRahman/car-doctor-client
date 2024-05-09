import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../component/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const due = form.due.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const order = { customerName: name, date, due, phone, email, serviceImg: img, serviceTitle: title, serviceCost: price };
    console.log(order);

    fetch('http://localhost:8000/bookings', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        Swal.fire("Order Confirmed.");
      })
  }

  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-semibold text-center py-5">Checkout <span className="text-orange-600">{title}</span> Service</h1>
      <form onSubmit={handleBookService} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 p-20 pt-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" defaultValue={user?.displayName} name="name" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" name="name2" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="" className="input input-bordered" name="date" defaultValue={new Date().toISOString().split('T')[0]} required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due</span>
          </label>
          <input type="text" placeholder={`$${price}`} defaultValue={price} className="input input-bordered" name="due" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact</span>
          </label>
          <input type="text" placeholder="Your Phone" className="input input-bordered" name="phone" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="your email" className="input input-bordered" defaultValue={user?.email} name="email" required />
        </div>

        <div className="form-control col-span-2 border">
          {/* <label className="label">
            <span className="label-text">Your Message</span>
          </label> */}
          <textarea type="text" placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" rows={5} />
          <label className="label">
          </label>
        </div>

        <div className="form-control mt-6 md:col-span-2">
          <button className="btn bg-orange-600 text-white">Confirm Order</button>
        </div>
      </form>

    </div>
  );
};

export default CheckOut;