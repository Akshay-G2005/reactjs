import group from './assets/Group.png';
import group1 from './assets/Group 40.png';
import group2 from './assets/Group 41.png';

const Overview = () => {
  return (
    <>
      <div>
                <div className='w-fit flex justify-center items-start mx-auto flex-col p-5'>
                    <h2 className="text-center mb-3 text-3xl text-[#403E3F] font-serif">
                    Company overview
                    </h2>
                    <div className="w-20 border-y border-[#EFB247]" />
                </div>
            </div>

      <div className="container max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-1 bg-white font-serif sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div dir='ltr' className="mb-8 p-5 border-s-4 border-solid border-[#EFB247]" style={{ boxShadow: "0px 4px 20px 0px #00000040" }}>
            <div className="w-24 h-24 rounded border bg-[#EFB2472E] border-[#EFB2472E] justify-center flex items-center">
              <img src={group} alt="John Doe" className='w-12 h-12' />
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold">Our mission</h2>
              <p className="text-[#808080] mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis.</p>
            </div>
          </div>

          <div dir='ltr' className="mb-8 p-5 border-s-4 border-solid border-[#EFB247]" style={{ boxShadow: "0px 4px 20px 0px #00000040" }}>
            <div className="w-24 h-24 rounded border bg-[#EFB2472E] border-[#EFB2472E] justify-center flex items-center">
              <img src={group1} alt="John Doe" className='w-12 h-12' />
            </div>
            <div className="mt-5">
              <h2 className="text-xl  font-semibold">Our vision</h2>
              <p className="text-[#808080] mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis.</p>
            </div>
          </div>

          <div dir='ltr' className="mb-8 p-5 border-s-4 border-solid border-[#EFB247]" style={{ boxShadow: "0px 4px 20px 0px #00000040" }}>
            <div className="w-24 h-24 rounded border bg-[#EFB2472E] border-[#EFB2472E] justify-center flex items-center">
              <img src={group2} alt="John Doe" className='w-12 h-12' />
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold">Core Values</h2>
              <p className="text-[#808080] mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis. Pulvinar leo vitae lacus in quis.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0F4767] py-10">
        <div className="container max-w-screen-xl  mx-auto px-5">
          <div className="grid grid-cols-1 font-serif sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-left">
            <div dir="ltr" className='border-s-4 border-solid border-[#ffffff]'>
              <div className='ml-4'>
                <h2 className="text-3xl font-semibold">2015</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien.</p>
              </div>
            </div>
            <div dir="ltr" className='border-s-4 border-solid border-[#ffffff]'>
              <div className='ml-4'>
                <h2 className="text-3xl font-semibold">3201+</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien.</p>
              </div>
            </div>
            <div dir="ltr" className='border-s-4 border-solid border-[#ffffff]'>
              <div className='ml-4'>
                <h2 className="text-3xl font-semibold">831</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien.</p>
              </div>
            </div>
            <div dir="ltr" className='border-s-4 border-solid border-[#ffffff]'>
              <div className='ml-4'>
                <h2 className="text-3xl font-semibold">4327</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Vel quam sapien.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
