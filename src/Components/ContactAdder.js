import { useState } from "react";
// import { Dummy } from "./Components/Dummy";
// import { Dave, John, Chris } from "./Persons";

const ContactAdder = (props) => {
  // const [name, setName] = useState("John");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = (e) => {
    // setName("Chris");
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name: name,
      number: mobile,
      location: location,
    };
    console.log(contactData);
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Fill in the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };
  // let resultsCard;
  // if (name === "Dave") {
  //   resultsCard = <Dave></Dave>;
  // } else if (name === "John") {
  //   resultsCard = <John></John>;
  // } else if (name === "Chris") {
  //   resultsCard = <Chris></Chris>;
  // }
  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Adder:</h3>
        <form onSubmit={onClickHandler}>
          <input
            type="text"
            value={name}
            placeholder="Your Name here"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Your mobile here"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            value={location}
            placeholder="Your location here"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
