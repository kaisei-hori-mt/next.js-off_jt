import Link from "next/link";

export const Modal = ({
  message,
  onClose,
}: { message: string; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-md text-center shadow-lg">
      <p className="text-lg font-medium mb-4">{message}</p>
      <div className="mt-4">
        <Link href="/memos">
          <button
            type="button"
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
          >
            メモ一覧ページへ
          </button>
        </Link>
      </div>
    </div>
  </div>
);
