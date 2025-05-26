"use client";
import { Header } from "../components/Header";
import { useUserContext } from "../context/UserContext";

export default function LoginPage() {
  const { login } = useUserContext();
  return (
    <div className="p-4">
      <Header />
      <h2>ログイン</h2>
      <button
        onClick={() => login("山田太郎")}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ログイン
      </button>
    </div>
  );
}
