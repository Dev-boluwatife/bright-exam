import CallToAction from '../components/CallToAction';

export default function Projects() {

  const data = [
    {
      img: "../../1.jpg"
    },
    {
      img: "../../2.jpg"
    },
    {
      img: "../../3.jpg"
    },
    {
      img: "../../4.jpg"
    },
    {
      img: "../../5.jpg"
    },
    {
      img: "../../6.jpg"
    },
    {
      img: "../../7.jpg"
    },
    {
      img: "../../8.jpg"
    },
    {
      img: "../../9.jpg"
    },
    {
      img: "../../10.jpg"
    },
    {
      img: "../../11.jpg"
    },
  ]

  console.log(data);
  return (
    <div className='min-h-screen max-w-6xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Testimonies</h1>
      <p className='text-md text-gray-500'>Testimonies and some proves that we are helping other grow in thier academy journey</p>

      <div className='py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
        <img src="../../public/1.jpg" alt="" />
        <img src="../../public/2.jpg" alt="" />
        <img src="../../public/3.jpg" alt="" />
        <img src="../../public/4.jpg" alt="" />
        <img src="../../public/5.jpg" alt="" />
        <img src="../../public/6.jpg" alt="" />
        <img src="../../public/7.jpg" alt="" />
        <img src="../../public/8.jpg" alt="" />
        <img src="../../public/9.jpg" alt="" />
        <img src="../../public/10.jpg" alt="" />
        <img src="../../public/11.jpg" alt="" />
      </div>
      <CallToAction />
    </div>
  )
}