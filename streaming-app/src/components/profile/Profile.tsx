import { useFirebaseAuth } from "../../../useFirebaseAuth";

const Profile = () => {
  const { user, loading } = useFirebaseAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Please log in to view your profile</div>;

  return (
    <div className="flex items-center space-x-4">
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      )}
      <div>
        <h2 className="text-lg font-bold">Welcome, {user.displayName}</h2>
        <p className="text-sm text-gray-600">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
