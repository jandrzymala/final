import { useState, useEffect } from "react";

import "./userslist.scss";
const UsersList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const saveToLocalStorage = (name, totalScore, id) => {
    localStorage.setItem("current-user-name", name);
    localStorage.setItem("current-user-totalScore", totalScore);
    localStorage.setItem("current-user-id", id);
  };
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selected) {
      console.log(data[selected]);
      const { name, totalScore, id } = data[selected];
      saveToLocalStorage(name, totalScore, id);
    }
  }, [selected]);

  if (loading) {
    return <div>loading </div>;
  }

  return (
    <section className="users">
      <h3>Wybierz zawodnika</h3>
      <select
        className="usersList"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value={null}>Wybierz...</option>
        {data.map((user, idx) => {
          return (
            <option user={user} key={user.id} value={idx}>
              {user.id}. Nazwa: {user.name}. Wynik: {user.totalScore}
            </option>
          );
        })}
      </select>
    </section>
  );
};
export default UsersList;
