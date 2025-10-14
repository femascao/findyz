"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "70vh" }}>
      <SignIn
        appearance={{ elements: { formButtonPrimary: "bg-[#3448C5]" } }}
      />
    </div>
  );
}
