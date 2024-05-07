import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  const [services, setServices] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(()=>{
    axios.get('../../../public/services.json')
    .then(data=>data.data)
    .then(data=>setServices(data));
  }, []);

  return (
    <div className="space-y-14">
      <div className="flex flex-col items-center">
        <h4 className="text-orange-600 text-xl font-bold text-center">Service</h4>
        <h1 className="text-[45px] font-bold text-center">Our Service</h1>
        <p className="text-center text-neutral-500 lg:w-1/2">the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
        {
          services?.map(service =>
            <div key={service.id} className="w-[364px] h-[348px] rounded-[10px] border border-gray-200 p-6">
              <img src={service.img} className="rounded" />
              <h2 className="text-neutral-700 text-[25px] font-bold ">{service.title}</h2>
              <div className="flex justify-between items-center">
                <h2 className="text-orange-600 text-xl font-semibold">Price: ${service.price}</h2>
                <FaArrowRight className="text-xl font-semibold text-orange-600" />
              </div>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Service;