import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("access-token")?.value;

  const isProtected =
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/products");

  if (isProtected && token !== "logged-in") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*"],
};
