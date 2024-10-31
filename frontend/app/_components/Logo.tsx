import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <img className="h-20 w-20 rounded-full" src="/logo.jpg" alt="logo" />
      <span className="text-3xl font-bold text-gray-200">
        E-commerce Online Platform
      </span>
    </Link>
  );
}

export default Logo;
