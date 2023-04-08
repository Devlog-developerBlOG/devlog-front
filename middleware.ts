import { NextRequest, NextResponse, userAgent } from "next/server";

export const middleware = async (req: NextRequest) => {
  const ua = userAgent(req);
  const RefreshToken = req.cookies.get("RefreshToken");
  console.log(req);

  if (RefreshToken) {
    return NextResponse.redirect(new URL("/post", req.url));
  }

  if (ua.isBot) {
    return NextResponse.redirect(new URL("/", req.url));
  }
};

export const config = {
  matcher: ["/auth/:path*"],
};
