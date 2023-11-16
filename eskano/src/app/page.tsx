import Image from "next/image";
import { ScrollAnimation } from "./components/ScrollAnimation";
import { ScrollAnimation2 } from "./components/ScrollAnimation2";

import Header from "./components/Header";
import Link from 'next/link'

export default function App() {
  return (
    <div>
      <div className="w-full h-screen bg-cover">
        <Header />
      </div>
      <Link href={`/travel`} />
    </div>
  );
}
