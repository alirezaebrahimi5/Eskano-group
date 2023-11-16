import Image from "next/image";
import Section_1 from "./components/Secion_1";

import Header from "./components/Header";
import Link from 'next/link'

export default function App() {
  return (
    <div>
      <div className="w-full h-screen bg-cover">
        <Header />
      </div>
      <Section_1 />
      <Link href={`/travel`} />
    </div>
  );
}
