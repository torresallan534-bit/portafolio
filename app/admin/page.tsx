"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowLeft, Shield, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminPage() {
  const [accessKey, setAccessKey] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKey.trim().length > 3) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F4F3] flex flex-col justify-between p-6 sm:p-10 selection:bg-[#3DDC97] selection:text-[#0D0D0D]">
      {/* Top Header */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#F2F4F3]/60 hover:text-[#3DDC97] transition-colors py-2 px-3 rounded-lg bg-[#141618] border border-[#2B2F33]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Panda Haus</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-[#3DDC97]">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
          <span>Acceso Restringido</span>
        </div>
      </div>

      {/* Main Admin Box */}
      <div className="max-w-md w-full mx-auto my-12 p-8 sm:p-10 rounded-3xl bg-[#141618] border border-[#2B2F33] shadow-2xl space-y-6">
        {/* Brand Icon */}
        <div className="text-center space-y-3">
          <div className="relative h-14 w-14 mx-auto rounded-2xl bg-[#0D0D0D] border border-[#2B2F33] p-2 flex items-center justify-center overflow-hidden shadow-inner">
            <Image
              src="/brand/panda-haus-logo.svg"
              alt="Panda Haus Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-[#FFFFFF] tracking-tight">
              Panda Haus <span className="text-[#3DDC97]">Studio</span>
            </h1>
            <p className="text-xs font-mono text-[#F2F4F3]/50 mt-1">
              Panel Privado de Gestión de Proyectos
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] flex items-start gap-2.5 text-xs text-[#F2F4F3]/70 font-sans">
          <Shield className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
          <span>
            Área de administración exclusiva para el equipo de Panda Haus. Conexión cifrada de extremo a extremo.
          </span>
        </div>

        {/* Access Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs font-sans">
          <div>
            <label className="block text-[#F2F4F3]/70 mb-1.5 font-mono">
              Clave de Acceso Corporativo
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={accessKey}
                onChange={(e) => {
                  setAccessKey(e.target.value);
                  setStatus("idle");
                }}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-3 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/20 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors pl-10"
              />
              <Lock className="w-4 h-4 text-[#F2F4F3]/40 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Clave no autorizada. Contacta al administrador del estudio.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95"
          >
            <Lock className="w-3.5 h-3.5 fill-current" />
            <span>Ingresar al Panel</span>
          </button>
        </form>

        <div className="pt-2 text-center text-[11px] font-mono text-[#F2F4F3]/40">
          Sesión protegida por Panda Haus Auth System &bull; 2026
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-[#F2F4F3]/40 font-mono">
        &copy; 2026 Panda Haus. Todos los derechos reservados.
      </div>
    </div>
  );
}
