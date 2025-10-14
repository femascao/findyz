"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "70vh" }}>
      <SignUp
        appearance={{ elements: { formButtonPrimary: "bg-[#3448C5]" } }}
      />
    </div>
  );
}
