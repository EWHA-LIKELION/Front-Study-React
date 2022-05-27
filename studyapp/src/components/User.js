import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "1번", score: 10 },
    { id: 2, name: "2번", score: 45 },
    { id: 3, name: "3번", score: 75 },
    { id: 4, name: "4번", score: 11 },
    { id: 5, name: "5번", score: 97 },
    { id: 6, name: "6번", score: 36 },
    { id: 7, name: "7번", score: 57 },
    { id: 8, name: "8번", score: 89 },
    { id: 9, name: "9번", score: 23 },
    { id: 10, name: "10번", score: 44 },
  ]);

  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

const User = ({ user }) => {
  return (
    <div style={{ border: "solid 3px green", margin: "10px", padding: "5px" }}>
      {user.id} : {user.name}의 점수는 {user.score}
    </div>
  );
};

export default Users;
