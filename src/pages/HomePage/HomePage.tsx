import { useEffect, useState } from "react";
import "./HomePage.scss";
import { User } from "../../models/user";

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <div className="container">Home page works!</div>
      {users.map((user) => (
        <div>
          {user.id} {user.name}
        </div>
      ))}
    </div>
  );
};
