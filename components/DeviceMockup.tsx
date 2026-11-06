import React from "react";
import { Lock } from "lucide-react";

interface DeviceMockupProps {
  type: "smartphone" | "browser";
  children: React.ReactNode;
  urlTitle?: string;
  className?: string;
}

export default function DeviceMockup({
  type,
  children,
  urlTitle = "pandahaus.co",
  className = "",
}: DeviceMockupProps) {
  if (type === "smartphone") {
    return (
      <div
        className={`relative mx-auto rounded-[32px] border-[3px] border-[#2B2F33] bg-[#0D0D0D] p-2 shadow-2xl transition-all duration-300 group-hover:border-[#3DDC97]/40 ${className}`}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="h-3 w-16 rounded-full bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-end px-2 gap-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B2F33]" />
            <span className="h-1 w-1 rounded-full bg-emerald-500/40" />
          </div>
        </div>

        {/* Screen Content Wrapper */}
        <div className="relative overflow-hidden rounded-[24px] bg-[#0D0D0D] w-full h-full">
          {children}
        </div>

        {/* Home Bar Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="h-1 w-20 rounded-full bg-white/20 backdrop-blur-md" />
        </div>
      </div>
    );
  }

  // Browser Window Mockup
  return (
    <div
      className={`relative mx-auto rounded-2xl border border-[#2B2F33] bg-[#141618] overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-[#3DDC97]/40 ${className}`}
    >
      {/* Browser Minimalist Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1B1E21] border-b border-[#2B2F33] text-xs">
        {/* 3 Window Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* URL Pill Bar */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D]/70 border border-white/[0.06] text-[11px] font-mono text-[#F2F4F3]/60 max-w-[200px] sm:max-w-xs truncate mx-auto">
          <Lock className="w-2.5 h-2.5 text-[#3DDC97] shrink-0" />
          <span className="truncate">{urlTitle}</span>
        </div>

        {/* Right spacing */}
        <div className="w-10 shrink-0" />
      </div>

      {/* Viewport Content */}
      <div className="relative overflow-hidden bg-[#0D0D0D] w-full h-full">
        {children}
      </div>
    </div>
  );
}
