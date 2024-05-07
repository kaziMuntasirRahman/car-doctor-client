import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import carousel1 from '../../assets/images/banner/1.jpg'
import carousel2 from '../../assets/images/banner/2.jpg'
import carousel3 from '../../assets/images/banner/3.jpg'
import carousel4 from '../../assets/images/banner/4.jpg'
import carousel5 from '../../assets/images/banner/5.jpg'
import carousel6 from '../../assets/images/banner/6.jpg'

const bannerImages = [
  {
    src: carousel1,
    id: "slide1",
    aLeft: "#slide6",
    aRight: "#slide2"
  },
  {
    src: carousel2,
    id: "slide2",
    aLeft: "#slide1",
    aRight: "#slide3"
  },
  {
    src: carousel3,
    id: "slide3",
    aLeft: "#slide2",
    aRight: "#slide4"
  },
  {
    src: carousel4,
    id: "slide4",
    aLeft: "#slide3",
    aRight: "#slide5"
  },
  {
    src: carousel5,
    id: "slide5",
    aLeft: "#slide4",
    aRight: "#slide6"
  },
  {
    src: carousel6,
    id: "slide6",
    aLeft: "#slide5",
    aRight: "#slide1"
  },
]

const Carousel = () => {
  return (
    <div className="carousel w-full">
      {
        bannerImages.map(bannerImage =>
          <div key={bannerImage.id} id={bannerImage.id} className="carousel-item relative w-full">
            <img src={bannerImage.src} className="w-full rounded-xl" />
            <div className='absolute  flex flex-col gap-8  p-24'>
              <h1 className='text-6xl text-white w-[460px] font-bold'>Affordable Price For Car Servicing</h1>
              <p className='text-lg text-white w-[500px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-5'>
                <button className="btn bg-[#FF3811] border-none outline-none text-white">Discover Me</button>
                <button className="btn btn-outline text-white">Latest Projects</button>
              </div>
            </div>
            {/* buttons */}
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5">
              <a href={bannerImage.aLeft} className="btn btn-circle hover:bg-[#FF3811] text-lg border-none"><FaArrowLeft /></a>
              <a href={bannerImage.aRight} className="btn btn-circle hover:bg-[#FF3811] text-lg border-none"><FaArrowRight /></a>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Carousel;