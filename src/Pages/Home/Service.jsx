import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../component/AuthProvider";

const Service = () => {
  const {services} = useContext(AuthContext);

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-[45px] font-bold text-center">Our Service</h1>
        <p className="text-center text-neutral-500 lg:w-1/2">the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center py-20" >
        {
          services?.map(service =>
            <div key={service.id} className="w-[364px] rounded-[10px] border border-gray-200 p-6 flex flex-col gap-y-3">
              <img src={service.img} className="rounded" />
              <h2 className="text-neutral-700 text-[25px] font-bold mt-auto">{service.title}</h2>
              <div className="flex justify-between items-center">
                <h2 className="text-orange-600 text-xl font-semibold">Price: ${service.price}</h2>
                <FaArrowRight className="text-xl font-semibold text-orange-600" />
              </div>
              <Link to={`/checkout/${service._id}`} className="text-white btn bg-orange-600 text-base">Book Now</Link>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Service;