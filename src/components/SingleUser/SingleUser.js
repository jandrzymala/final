import React from "react";

function SingleUser({ user, removeUser }) {
  return (
    <li>
      <strong>
        {user.id}. {user.name}
      </strong>
      <span> {user.totalScore} pkt</span>
      {/* <button onClick={() => removeUser(user.id)}>USUŃ</button> */}
    </li>
  );
}

export default SingleUser;
