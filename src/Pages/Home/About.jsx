import part from '../../assets/images/about_us/parts.jpg';
import human from '../../assets/images/about_us/person.jpg';

const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-14 p-10">

      <div className="relative w-full md:w-1/2 h-full">
        <img src={human} className="rounded-lg shadow-2xl w-4/5" />
        <img src={part} className="size-[200px] object-cover border-8 border-white -mb-10 rounded-lg shadow-2xl absolute bottom-0 right-0" />
      </div>

      <div className="border-white md:my-10 md:w-1/2">
        <p className='text-[#FF3811] text-xl font-bold'>About Us</p>
        <h1 className="text-[45px]">We are qualified & of experience in this field</h1>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.  </p>
        <button className="btn bg-[#FF3811] text-white">Get More Info</button>
      </div>

    </div>
  );
};

export default About;