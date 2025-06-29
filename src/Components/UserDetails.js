import Image from "next/image";

export default function UserDetails({ user }) {
  if (!user) return null;

  const address = `${user.location?.street?.number} ${user.location?.street?.name}, ${user.location?.city}, ${user.location?.state}, ${user.location?.country}`;

  return (
    <div className="flex flex-col md:flex-row items-center bg-indigo-50 rounded-lg shadow p-6 mb-6 border border-indigo-100">
      <Image
        src={user.picture.large}
        alt="Profile picture"
        width={190}
        height={190}
        className="rounded-full border object-cover"
      />
      <div className="space-y-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-red-700">
          {user.name?.title} {user.name?.first} {user.name?.last}
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> {address}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Timezone/Nationality:</span>{" "}
          {user.location?.timezone?.description} / {user.nat}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>
        <p className="text-indigo-700 font-medium">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}
