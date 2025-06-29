"use client";

import { useEffect, useState, useRef } from "react";
import UserCard from "../Components/UserCard";
import UserDetails from "../Components/UserDetails";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const detailsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
        );
        if (!res.ok) throw new Error("Failed to fetch users.");
        const data = await res.json();
        setUsers(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <main className="min-h-screen bg-gray-900 py-8 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-white">
        User Directory
      </h1>

      {loading && <p className="text-center text-gray-300">Loading users...</p>}
      {error && <p className="text-center text-red-400">Error: {error}</p>}

      <div ref={detailsRef}>
        <UserDetails user={selectedUser} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} onSelect={handleSelectUser} />
        ))}
      </div>
    </div>
  </main>
);

}
