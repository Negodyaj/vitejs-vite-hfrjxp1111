import { useEffect, useState } from "react";
import "./HomePage.scss";
import { User } from "../../models/user";
import { sendGetRequest } from "../../services/http.service";

export const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendGetRequest<User[]>("/users");
      setUsers(response);
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
