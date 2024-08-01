import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useCallback } from "react";
import useInput from "./Hooks/useinput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responce.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>
      <Button style={{ MarginBottom: "1rem" }} onClick={() => setModal(true)}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          laudantium debitis recusandae tenetur ipsa ad tempora. Labore in,
          quasi delectus, tempora nesciunt dolorem pariatur iste praesentium
          iure excepturi rem molestiae.
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
