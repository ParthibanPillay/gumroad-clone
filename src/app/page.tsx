import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className="p-4">
      <Button variant="elevated">Hello world</Button>
      </div>
      <div>
      <Input placeholder="This is an input"></Input>
    </div>
    </div>
    
  );
}
