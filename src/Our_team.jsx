import members from "./assets/Rectangle110.png"
import members1 from "./assets/Rectangle111.png"
import members2 from "./assets/Rectangle112.png"
import members3 from "./assets/Rectangle113.png"
import presss from "./assets/Group300.png"
const teamMembers = [
  {
    name: "Oliver Thomas",
    title: "Founder",
    image: members,
    description:
      "Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id lacus in mollis egestas.",
  },
  {
    name: "Emily Smith",
    title: "Chief Operations Officer",
    image: members1,
    description:
      "Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id lacus in mollis egestas.",
  },
  {
    name: "James Smith",
    title: "Marketing Manager",
    image: members2,
    description:
      "Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id lacus in mollis egestas.",
  },
  {
    name: "Ava Jones",
    title: "IT Consultant",
    image: members3,
    description:
      "Lorem ipsum dolor sit amet consectetur. In eget mauris tincidunt id lacus in mollis egestas.",
  },
];



const Our_team = () => {
  return (
    <>
      <div className="bg-[#E8F6FF] mt-8 py-10 px-4">

        <div>
          <div className='w-fit flex justify-center items-start mx-auto flex-col p-5'>
            <h2 className="text-center mb-3 text-3xl text-[#403E3F] font-serif">
              Meet our experienced team
            </h2>
            <div className="w-20 border-y border-[#339FDE]" />
          </div>
        </div>

        <div className="container mx-auto mt-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover mt-8 px-6"
                />
                <div className="p-4 mt-4 mb-4 text-center">
                  <h3 className="text-xl font-normal text-[#339FDE]">
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="text-[#403E3F] mt-4 font-medium">{member.title}</p>
                  <p className="mt-2 text-base text-[#9C9C9C]">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-[#339FDE] text-white px-8 py-4 font-serif hover:bg-blue-600 transition">
              Meet our team →
            </button>
          </div>
        </div>


      </div>


      <div className="mt-8 mb-8 flex flex-col md:auto md:flex-row">
        <div className="p-0 md:w-1/2">
          <img
            src={presss}
            alt="Your Image"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8 flex flex-col justify-center p-5">

          <div>
            <div className='mb-4 flex items-start mx-auto flex-col'>
              <h2 className="mb-3 text-4xl font-bold text-[#403E3F] font-serif">
                Media and Press
              </h2>
              <div className="w-20 border-y border-[#EFB247]" />
            </div>
          </div>


          <p className="text-lg mb-4 text-[#969696] text-left">
            Lorem ipsum dolor sit amet consectetur. Nec tincidunt vitae egestas vitae faucibus magna.
             Aliquet mollis nulla orci in dictum. Tellus malesuada nunc odio urna. Proin aliquet amet 
             amet ut adipiscing morbi bibendum. Vitae erat consectetur arcu condimentum blandit id a volutpat 
             et. Consectetur non mauris auctor vitae. At id lectus eu faucibus nisl in neque tellus elementum.

             <br />
             <br />

             Lorem ipsum dolor sit amet consectetur. Faucibus diam amet ultricies sit. Nulla scelerisque eget sit 
             quisque id ullamcorper. Convallis lacus commodo pretium odio sit amet.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#339FDE] text-white px-8 py-2 hover:bg-blue-700 transition">
            Read more
            </button>
            
          </div>
        </div>
      </div>


    </>

  )
}

export default Our_team
