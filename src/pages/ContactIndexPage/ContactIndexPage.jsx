import ContactsTable from "../../components/ContactsTable/ContactsTable";

export default function ContactIndexPage({users}) {
  return (
    <>
      <h1 className="text-5xl mt-10 tracking-wide font-bold underline decoration-pink-500	">Resonate Contacts</h1>

      {/* <h2>Search Maybe</h2> */}
      <ContactsTable users={users}/>
    </>
  );
}
