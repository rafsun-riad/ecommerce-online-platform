import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <img
        src="/bg.jpg"
        alt="bg-image"
        className="absolute left-0 top-0 max-h-screen w-full object-cover"
      />
      <div className="relative z-10 mt-44 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-gray-200">
          <span className="block text-8xl">Welcome</span>
          <span className="text-6xl">E-commerce Online Platform</span>
        </h1>
        <Button variant="outline" asChild className={cn("px-12 py-7 text-lg")}>
          <Link href="/login" className="flex items-center gap-2">
            <span>Explore</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}
