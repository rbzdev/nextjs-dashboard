import { lusitana } from "../ui/fonts";

export default function Page() {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-5xl ${lusitana.className}`}
    >
      <strong> Dashboard </strong>
    </div>
  );
}
