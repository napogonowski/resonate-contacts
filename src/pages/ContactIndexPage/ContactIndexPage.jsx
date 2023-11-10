import ContactsTable from "../../components/ContactsTable/ContactsTable";

export default function ContactIndexPage({users}) {
  return (
    <>
      <h1>Contacts !</h1>

      <h2>Search Maybe</h2>

      <h3>My Contacts</h3>
      <ContactsTable users={users}/>
    </>
  );
}
