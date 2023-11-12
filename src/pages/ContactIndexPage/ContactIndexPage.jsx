import ContactsTable from "../../components/ContactsTable/ContactsTable";

export default function ContactIndexPage({ users }) {
  return (
    <>
      <h1 className="text-5xl  md:text-7xl p-10 tracking-wide text-pink-400 title-font font-bold underline decoration-pink-500 underline-offset-8	">
        Resonate Contacts
      </h1>

      <ContactsTable users={users} />
    </>
  );
}
