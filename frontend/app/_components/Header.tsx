"use client";

import { jwtDecode } from "jwt-decode";
import cookies from "browser-cookies";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function getCookieValue(cookieName) {
  const browserCookies = document.cookie.split("; ");
  for (const cookie of browserCookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const data = getCookieValue("userToken");

  useEffect(() => {
    if (data !== null) {
      setUserToken(JSON.parse(data));
    }
  }, [data]);

  useEffect(() => {
    if (userToken?.access) {
      const userData = jwtDecode(userToken.access);
      setUser(userData);
    }
  }, [userToken]);

  function handleLogout() {
    cookies.set("userToken", "null");
    setUser(null);
    router.push("/login");
  }

  return (
    <header className="container mx-auto flex max-w-7xl items-center justify-between border-b-[1px] border-gray-100 pb-2 pt-2">
      <Logo />
      {user !== null ? (
        <div className="z-10 flex items-center gap-5">
          <Badge>{user?.username}</Badge>
          <Button asChild className={cn("px-10 py-6 text-lg")}>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button
            onClick={handleLogout}
            variant="secondary"
            className={cn("px-10 py-6 text-lg")}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="z-10 flex items-center gap-5">
          <Button asChild className={cn("px-10 py-6 text-lg")}>
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className={cn("px-10 py-6 text-lg")}
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
