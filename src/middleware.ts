import { NextRequest, NextResponse } from "next/server";

// Simple in-process rate limiter: max 5 requests per IP per 10 minutes.
// Works per serverless instance — good enough for a portfolio contact form.
const rateMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/api/contact")) {
    return NextResponse.next();
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return NextResponse.next();
  }

  if (entry.count >= MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  entry.count += 1;
  return NextResponse.next();
}

export const config = {
  matcher: "/api/contact",
};
