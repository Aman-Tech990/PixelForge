import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Hero />
    </div>
  );
}
