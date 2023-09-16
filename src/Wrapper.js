const Wrapper = (props) => {
  return (
    <>
      <div className="container">
        <h3>Contact-List</h3>
        {props.children}{" "}
      </div>
    </>
  );
};
export default Wrapper;
