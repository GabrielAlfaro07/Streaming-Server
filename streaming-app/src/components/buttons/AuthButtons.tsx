import { useFirebaseAuth } from "../../../useFirebaseAuth";

const AuthButtons = () => {
  const { user, login, logout, loading } = useFirebaseAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex space-x-4">
      {user ? (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login with Google
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
