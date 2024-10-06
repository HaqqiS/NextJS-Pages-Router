import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const isLogin = false;
    if (isLogin) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
}

export const config = {
    matcher: ["/product", "/about"],
};
