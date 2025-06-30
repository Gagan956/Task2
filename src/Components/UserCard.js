export default function UserCard({ user, onSelect }) {
  return (
    <div
      onClick={() => onSelect(user)}
      className="cursor-pointer bg-indigo-50 rounded-lg shadow hover:shadow-lg hover:scale-105 transition p-4 flex flex-col items-center border border-indigo-100"
    >
      <div className="w-16 h-16 mb-3 relative">
        <img
          src={user.picture.thumbnail}
          alt="Profile picture"
          width={64}
          height={64}
          className="rounded-full"
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
