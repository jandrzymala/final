import { useState, useEffect } from "react";

import "./userslist.scss";
const UsersList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        setData(userData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading </div>;
  }
  return (
    <section className="users">
      <h3>Wybierz zawodnika</h3>
      <select className="usersList">
        {data.map((user) => {
          return (
            <option user={user} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </section>
  );
};
export default UsersList;
