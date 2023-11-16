import Image from "next/image";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { ScrollAnimation2 } from "../components/ScrollAnimation2";

export default function App() {
  return (
    <div>
     <Image className="absoulute mt-40 lg:mt-4" src='/assets/header.png' alt="a green plant" width={500} height={500} />

      <ScrollAnimation>Hello</ScrollAnimation>
      <ScrollAnimation2>Bye</ScrollAnimation2>
      <ScrollAnimation>first</ScrollAnimation>
      <ScrollAnimation2>second</ScrollAnimation2>
    </div>
  );
}
