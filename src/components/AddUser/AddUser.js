import React, { useState } from "react";
const AddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (name.length < 2) {
      alert("Nazwa użytkownika nie może być krótsza niż 2 znaki");
    } else {
      addUser({
        name,
        totalScore: 0,
      });
      setShow(true);
    }
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
              <button type="submit">Dodaj</button>
            </form>
          </div>
        </>
      )}
      {show && (
        <>
          <label>Witaj {name}</label>
        </>
      )}
    </>
  );
};
export default AddUser;
