"use client";

import { FormEvent, useEffect, useState } from "react";

const PROGRESS = 68; // percent complete

type Status = "idle" | "success" | "error";

export default function UnderConstructionPage() {
  const [width, setWidth] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // One orchestrated moment: the progress line draws in on load.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setWidth(PROGRESS));
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!valid) {
      setStatus("error");
      return;
    }

    // Replace with a real request to your API route or email provider.
    setStatus("success");
    setEmail("");
  }

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Faint drafting grid: a quiet nod to construction, kept behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(21,32,27,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,32,27,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <header className="relative z-10 flex items-center px-6 py-7 sm:px-12"></header>

      <section className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-16 sm:px-12">
        <div className="max-w-4xl">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            Something careful is being built.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#15201B]/75">
            We&apos;re finishing the details so it opens right. Leave your email
            and we&apos;ll write to you the day it&apos;s ready.
          </p>

          <div className="mt-14 max-w-xl">
            <div className="flex items-baseline justify-between text-sm text-[#15201B]/70">
              <span>Progress</span>
              <span className="tabular-nums">{PROGRESS}%</span>
            </div>

            <div className="relative mt-3 h-px w-full bg-[#15201B]/20">
              <div
                className="absolute inset-y-0 left-0 bg-[#15201B] transition-[width] duration-[1600ms] ease-out motion-reduce:transition-none"
                style={{ width: `${width}%` }}
              />
              <span
                aria-hidden
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E4572E] transition-[left] duration-[1600ms] ease-out motion-reduce:transition-none"
                style={{ left: `${width}%` }}
              />
            </div>
          </div>

          <p role="status" className="mt-3 min-h-5 text-sm">
            {status === "success" && "Thanks. You're on the list."}
            {status === "error" && (
              <span className="text-[#B23A16]">
                Enter a valid email address, such as name@example.com.
              </span>
            )}
          </p>
        </div>
      </section>

      <footer className="relative z-10 px-6 pb-8 text-sm text-[#15201B]/55 sm:px-12">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </main>
  );
}
