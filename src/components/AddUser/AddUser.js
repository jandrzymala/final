import React, { useState } from "react";
const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  const handleClick = (e) => {
    setShow(true);
  };
  function onSubmit(e) {
    e.preventDefault();

    addUser({
      name,
      totalScore: 0,
    });
    localStorage.setItem("current-user-name", name);
  }
  return (
    <>
      {!show && (
        <>
          <div>
            <form onSubmit={onSubmit}>
              <label>Przedstaw się</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" onClick={handleClick}>
                Zatwierdź
              </button>
            </form>
          </div>
        </>
      )}
      {show && (
        <>
          <form onSubmit={onSubmit}>
            <label>Witaj {name}</label>
            <button type="submit">Dołącz!</button>
          </form>
        </>
      )}
    </>
  );
};
export default AddUser;
