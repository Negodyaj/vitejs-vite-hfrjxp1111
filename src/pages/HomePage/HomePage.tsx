import { useEffect, useState } from "react";
import "./HomePage.scss";
import { User } from "../../models/user";
import axios from "axios";

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <div className="container">Home page works!</div>
      {users.map((user) => (
        <div key={`user-${user.id}`}>
          {user.id} {user.name}
        </div>
      ))}
    </div>
  );
};
