import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ContactsShowCard from "../../components/ContactsShowCard/ContactsShowCard";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

export default function ContactShowPage({}) {
  const [soloContact, setSoloContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");
  const url = `https://jsonplaceholder.typicode.com/users/${selectedId}`;

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setSoloContact(json));
  // }, []);
  useEffect(() => {
    fetchUser();
  }, []);
  async function fetchUser() {
    try {
      const res = await fetch(url);
      // guard
      if (!res.ok) {
        throw new Error("Fetch Failed");
      }
      const userData = await res.json();
      setSoloContact(userData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>{loading ? <LoadingButton /> : <ContactsShowCard solo={soloContact} />}</>
  );
}
