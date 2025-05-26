import { useUserContext } from "../context/UserContext";

export const Header = () => {
  const { user, logout } = useUserContext();
  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-lg font-bold">My App</h1>
      <div>
        {user ? (
          <>
            <span className="mr-2">{user.name} さん</span>
            <button onClick={logout} type="button" className="text-blue-500">
              ログアウト
            </button>
          </>
        ) : (
          <span>ゲスト</span>
        )}
      </div>
    </header>
  );
};
