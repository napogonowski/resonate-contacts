import ContactsTable from "../../components/ContactsTable/ContactsTable";

export default function ContactIndexPage({users}) {
  return (
    <>
      <h1 className="text-6xl p-10 tracking-wide text-pink-400 title-font font-bold underline decoration-pink-500 underline-offset-8	">Resonate Contacts</h1>

      {/* <h2>Search Maybe</h2> */}
      <ContactsTable users={users}/>

    </>
  );
}
