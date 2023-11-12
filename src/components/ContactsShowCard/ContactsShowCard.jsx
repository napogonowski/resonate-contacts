import { Link } from "react-router-dom";
import { Phone, Mail, Briefcase, Home } from "lucide-react";

export default function ContactsShowCard({ solo }) {
  return (
    <>
      <div className="relative flex justify-center mb-[-20px] pt-20 ">
        <div className=" invisible sm:visible h-40 w-40 bg-pink-500 border-4 border-indigo-600/100 rounded-full flex items-center justify-center ">
          <p className="text-7xl text-white title-font">{solo.name[0]}</p>
        </div>
      </div>
      <div className="m-1 p-1 sm:m-0 sm:p-0 flex justify-center tracking-wide ">
        <div className=" grid grid-cols-3 grid-rows-5 border-separate border-spacing-4 border-4 border-pink-500 bg-white/50 p-5 text-left rounded-xl  gap-4">
          <div className="row-start-1 col-span-3 flex justify-center">
            <p className=" text-2xl font-medium truncate ">{solo.name}</p>
          </div>
          <Phone className="row-start-2 cols-start-1 w-1/2 text-purple-600" />
          <p className=" row-start-2 col-start-2 col-span-2 truncate">{solo.phone}</p>
          <Mail className="col-start-1 row-start-3 w-1/2 text-purple-600 " />
          <p className="col-start-2 row-start-3 col-span-2 truncate">{solo.email}</p>
          <Briefcase className="col-start-1 row-start-4 w-1/2 text-purple-600" />
          <p className="col-start-2 row-start-4 col-span-2">
            {solo.company.name}
          </p>
          <Home className="col-start-1 row-start-5 w-1/2 text-purple-600" />
          <p className="col-start-2 row-start-5 col-span-2 truncate">
            {solo.address.suite} - {solo.address.street} Street
          </p>
        </div>
      </div>
      <Link to={"/home"}>
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-5 w-52">
          Back
        </button>
      </Link>
    </>
  );
}
