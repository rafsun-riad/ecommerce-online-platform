import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("userToken");
  console.log(cookie);
  if (cookie?.value === "undefined" || cookie?.value === "null") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  //   return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
