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
      localStorage.setItem('current-user-name', name)
      localStorage.setItem('current-user-totalScore', 0)
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
          <span>Witaj <strong>{name}</strong>. Zamknij menadżera i przejdź do gry.</span>
        </>
      )}
    </>
  );
};
export default AddUser;
