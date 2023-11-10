import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ContactsShowCard from "../../components/ContactsShowCard/ContactsShowCard";

export default function ContactShowPage({}) {
  const [soloContact, setSoloContact] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");
  const url = `https://jsonplaceholder.typicode.com/users/${selectedId}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSoloContact(json));
  }, []);

  console.log(soloContact);

  return (
    <>
      <ContactsShowCard solo={soloContact} />
    </>
  );
}
