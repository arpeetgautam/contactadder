import React, { useState } from "react";
import Contact from "./Components/Contact";
import "./styles/index.css";
import ContactAdder from "./Components/ContactAdder";
import NavBar from "./Components/NavBar";
const App = () => {
  // const initialContacts = [
  //   {
  //     name: "John",
  //     number: "9847821709",
  //     location: "Nepal",
  //   },
  //   {
  //     name: "Sangit",
  //     number: "9847821709",
  //     location: "Nepal",
  //   },
  //   {
  //     name: "Chris",
  //     number: "9847821709",
  //     location: "Nepal",
  //   },
  // ];
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    // console.log(contactData);
    // contacts.push(contactData);

    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    // console.log(contacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };
  // const saveData = () => {
  //   localStorage.setItem("name", "xyz");
  //   localStorage.setItem("location", "nepal");
  //   localStorage.setItem("phone", "xyz");
  // };

  // const getData = () => {
  //   const getData = localStorage.getItem("name");
  //   alert(getData);
  // };
  // const clearData = () => {
  //   localStorage.removeItem("name");
  // };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact-List</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        {/* <button onClick={saveData}>Save Data</button>
        <button onClick={getData}>Get Data</button>
        <button onClick={clearData}>Delete Data</button> */}
        <button onClick={clearAllContacts} style={{ background: "#FF0000" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
