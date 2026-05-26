export { auth as proxy } from "@/app/lib/auth/auth"; //original da página do authjs
/*
import { auth } from "@/app/lib/auth/auth";
//import { NextResponse,NextRequest } from 'next/server';
 

/*
export default function proxy(req: NextRequest) {
  if (req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return NextResponse.redirect(newUrl)
  }
}

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
});
*/

