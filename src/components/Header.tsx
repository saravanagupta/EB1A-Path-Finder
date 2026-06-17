import React from "react";
import { Compass, ShieldAlert } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b border-slate-200 shrink-0">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-800 leading-none">
              EB1A <span className="text-indigo-600">Pathfinder</span>
            </span>
            <span className="text-[9px] text-slate-400 font-mono mt-0.5 tracking-wider uppercase block sm:hidden">
              v1.2 Blueprint
            </span>
          </div>
        </div>

        {/* Strategic Dashboard Header Tabs */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500 h-full">
          <a
            href="#"
            className="text-indigo-600 border-b-2 border-indigo-600 h-16 flex items-center"
          >
            Strategy Dashboard
          </a>
          <a href="#matrix-section" className="hover:text-slate-800 h-16 flex items-center transition-colors">
            Evidence Tracker
          </a>
          <a href="#export-section" className="hover:text-slate-800 h-16 flex items-center transition-colors">
            Legal Directory
          </a>
        </div>

        {/* Profile Info and/or Advisory Alert */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-indigo-50 border border-indigo-150/50 px-3 py-1.5 rounded-xl">
            <ShieldAlert className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <p className="text-[11px] font-medium text-indigo-900 leading-tight">
              <span className="font-bold">USCIS Guard:</span> Prove 4 to 5 categories to withstand RFE scrutiny.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">Alex Chen</p>
              <p className="text-[9px] text-slate-400 font-mono">Industry Innovator</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-indigo-600">
              AC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

