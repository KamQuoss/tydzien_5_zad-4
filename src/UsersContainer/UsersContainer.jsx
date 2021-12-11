import React, { useEffect, useState } from "react";
import { User, UserFilter, UsersList } from "./index";
import { getData } from "../services/fetchUsers";

export default function UsersContainer() {
  const [data, setData] = useState([]);
  const [filterValue, setfilterValue] = useState("");

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div>
      <UserFilter
        setfilterValue={setfilterValue}
        placeholder="type and hit enter to search"
      />
      <button onClick={() => setfilterValue("")}>reset filter</button>
      {data && data.length > 0 ? (
        <UsersList>
          {data
            .filter((user) => {
              return (
                user["first_name"].includes(filterValue) ||
                user["last_name"].includes(filterValue)
              );
            })
            .map((user) => (
              <User {...user} />
            ))}
        </UsersList>
      ) : (
        <p>nothing to display</p>
      )}
    </div>
  );
}
