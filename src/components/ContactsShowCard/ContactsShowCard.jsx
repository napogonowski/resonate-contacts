import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function ContactsShowCard({ solo }) {
  const [soloContact, setSoloContact] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  return (
    <>
      <div>
        <h5>Photo</h5>
        <div>
          <h4>{solo.name}</h4>
          {/* <h4>{solo.company.name}</h4> */}
          <h4>{solo.phone}</h4>
          <h4>{solo.email}</h4>
          {/* <h4>{solo.address}</h4> */}
        </div>
        <Link to={"/home"}>
          <button>Back</button>
        </Link>
      </div>
    </>
  );
}
