import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Phone, Mail, Briefcase, Home } from "lucide-react";

export default function ContactsShowCard({ solo }) {
  const [soloContact, setSoloContact] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");
  console.log(soloContact);
  return (
    <>
      <div className="flex justify-center mt-5 ">
        <div>
          <h5>Photo</h5>
        </div>
        <div>
          <p>{solo.name}</p>
        </div>
        <div className=" grid grid-cols-3 grid-rows-4 border-separate border-spacing-4 border-4 border-pink-500 bg-white/50 p-5 text-left rounded-xl mt-10 gap-4">
          <Phone className="row-start-1 cols-start-1 w-1/2 text-purple-600" />
          <p className=" row-start-1 col-start-2 col-span-2">{solo.phone}</p>
          <Mail className="col-start-1 row-start-2 w-1/2 text-purple-600 " />
          <p className="col-start-2 row-start-2 col-span-2">{solo.email}</p>
          <Briefcase className="col-start-1 row-start-3 w-1/2 text-purple-600" />
          <p className="col-start-2 row-start-3 col-span-2">
            {solo.company.name}
          </p>
          <Home className="col-start-1 row-start-4 w-1/2 text-purple-600" />
          <p className="col-start-2 row-start-4 col-span-2">
            {solo.address.suite} - {solo.address.street} Street
          </p>
        </div>
        <div>
          <Link to={"/home"}>
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
