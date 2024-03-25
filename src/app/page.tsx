import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Link href="/counter">Counter Example</Link>
      <Link href="/user">Complex Example - User</Link>
    </div>
  );
}
