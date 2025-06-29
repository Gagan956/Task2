import Image from "next/image";

export default function UserCard({ user, onSelect }) {
  return (
    <div
      onClick={() => onSelect(user)}
      className="cursor-pointer bg-indigo-50 rounded-lg shadow hover:shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-indigo-100"
    >
      <div className="relative w-16 h-16 mb-2">
        <Image
          src={user.picture.thumbnail}
          alt="Profile picture"
          fill
          className="rounded-full border-2 border-indigo-200 object-cover"
        />
      </div>
      <p className="text-xs text-indigo-500 capitalize">{user.gender}</p>
      <h2 className="text-base font-semibold text-center text-gray-800">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className="text-xs text-red-600 text-center break-words">
        {user.email}
      </p>
    </div>
  );
}
