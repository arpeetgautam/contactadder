const Dummy = (props) => {
  const dummyButtonHandler = () => {
    props.onDummyClick();
  };

  return (
    <>
      {" "}
      <button onClick={dummyButtonHandler}>Grand child</button>
    </>
  );
};
export default Dummy;
