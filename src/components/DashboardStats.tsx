import React from "react";
import { Users, BookOpen, CircleCheck, Compass, HelpCircle, Trophy } from "lucide-react";

interface DashboardStatsProps {
  selectedPersona: "industry" | "academic";
  setSelectedPersona: (p: "industry" | "academic") => void;
  bookmarkedCount: number;
  completedTasksCount: number;
  totalTasksPossible: number;
}

export default function DashboardStats({
  selectedPersona,
  setSelectedPersona,
  bookmarkedCount,
  completedTasksCount,
  totalTasksPossible,
}: DashboardStatsProps) {
  // Calculate legal readiness
  const getReadinessLevel = () => {
    if (bookmarkedCount === 0) return { label: "No Roadmap Active", color: "bg-slate-100 text-slate-600 border-slate-200" };
    if (bookmarkedCount < 3) return { label: "Below Legal Limit (Min 3 Needed)", color: "bg-rose-50 text-rose-700 border-rose-200" };
    if (bookmarkedCount === 3) return { label: "Minimum Target Met", color: "bg-amber-50 text-amber-700 border-amber-200" };
    if (bookmarkedCount === 4) return { label: "Safe Profile Strategy", color: "bg-emerald-50 text-emerald-700 border-emerald-250" };
    return { label: "Robust Multi-Pronged Strategy", color: "bg-indigo-50 text-indigo-700 border-indigo-250 font-semibold" };
  };

  const readiness = getReadinessLevel();
  const progressPercent = totalTasksPossible > 0 ? Math.round((completedTasksCount / totalTasksPossible) * 100) : 0;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col gap-6 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2">
        <div>
          <nav className="flex text-[10px] text-slate-400 gap-2 mb-1 uppercase font-mono font-bold tracking-wider">
            <span>Strategy</span>
            <span>/</span>
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-slate-600">Overview</span>
          </nav>
          <h2 className="font-sans font-bold text-2xl tracking-tight text-slate-900">
            EB1A Strategy Dashboard
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Select your professional pathway to dynamically refine your target criteria recommendations. USCIS adjudicators evaluate academic investigators and industry innovators with distinct frameworks.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex bg-slate-150/70 p-1 rounded-xl border border-slate-200 shrink-0 self-start lg:self-center">
          <button
            onClick={() => setSelectedPersona("industry")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 ${
              selectedPersona === "industry"
                ? "bg-white text-indigo-650 shadow-xs border border-slate-200/50"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            Industry Innovator
          </button>
          <button
            onClick={() => setSelectedPersona("academic")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all duration-200 ${
              selectedPersona === "academic"
                ? "bg-white text-indigo-650 shadow-xs border border-slate-200/50"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            Scholarly Investigator
          </button>
        </div>
      </div>

      {/* Target Focus Callout based on selected persona */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex gap-3">
          <div className="bg-white border border-slate-200 p-2 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center shadow-xs">
            {selectedPersona === "industry" ? <Trophy className="h-5 w-5 text-indigo-600" /> : <BookOpen className="h-5 w-5 text-emerald-650" />}
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-slate-400 block">
              Active Strategy Track
            </span>
            <p className="text-sm font-bold text-slate-800">
              {selectedPersona === "industry"
                ? "Engineering Leader, PM, or Startup Founder"
                : "Academic Researcher, Ph.D. Candidate, or Scientific Council"}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {selectedPersona === "industry"
                ? "Core Focus: Original Contributions (#5), Critical Role (#8), High Remuneration (#9), Commercial Success (#10)"
                : "Core Focus: Scholarly Articles (#6), Judging & Peer Review (#4), Original Contributions (#5), Media Coverage (#3)"}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-200/60">
          <span className="text-[9px] text-slate-400 font-mono font-bold tracking-wider">ADJUDICATION VIABILITY</span>
          <div className={`px-3 py-1 rounded-md text-[11px] font-bold border ${readiness.color} shadow-xs`}>
            {readiness.label}
          </div>
        </div>
      </div>

      {/* Key Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center group hover:border-slate-350 transition-colors">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">Targeted Criteria</span>
            <span className="text-2xl font-bold font-sans text-slate-900 mt-1">{bookmarkedCount} <span className="text-xs font-normal text-slate-400"> / 10 total</span></span>
            <span className="text-xs text-slate-500 mt-1">
              {bookmarkedCount >= 4 ? "✨ Excellent coverage (4+)" : "Bookmark 3+ categories to begin"}
            </span>
          </div>
          <div className="h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-650 shrink-0">
            <Compass className="h-5 w-5" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center group hover:border-slate-355 transition-colors">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">Active Checkpoints</span>
            <span className="text-2xl font-bold font-sans text-slate-900 mt-1">{completedTasksCount} <span className="text-xs font-normal text-slate-400"> completed</span></span>
            <span className="text-xs text-slate-500 mt-1">
              Phase 1-3 progress markers
            </span>
          </div>
          <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-650 shrink-0">
            <CircleCheck className="h-5 w-5" />
          </div>
        </div>

        {/* Metric 3: Profile Readiness Bar inline */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center group hover:border-slate-355 transition-colors">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-bold">Document Readiness</span>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-100">{progressPercent}%</span>
          </div>
          {/* Progress Bar resembling Sidebar readiness bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full mt-3.5 overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span className="text-xs text-slate-500 mt-2 leading-none">
            Adjudication milestone completion rate.
          </span>
        </div>
      </div>
    </div>
  );
}

