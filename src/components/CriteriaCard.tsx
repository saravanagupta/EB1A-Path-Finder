import React from "react";
import { Bookmark, BookmarkCheck, ArrowRight, Star, BookOpen, UserCheck, Flame } from "lucide-react";
import { Criterion } from "../types";

interface CriteriaCardProps {
  key?: React.Key;
  criterion: Criterion;
  selectedPersona: "industry" | "academic";
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelect: (criterion: Criterion) => void;
  isSelected: boolean;
  completionRate: number; // calculated completed tasks ratio e.g., 0 to 100
}

export default function CriteriaCard({
  criterion,
  selectedPersona,
  isBookmarked,
  onToggleBookmark,
  onSelect,
  isSelected,
  completionRate,
}: CriteriaCardProps) {
  // Determine if this category is high recommendation for the selected persona
  const isHighRecommendation = () => {
    if (selectedPersona === "industry") {
      return ["critical-role", "high-salary", "original-contributions", "commercial-success"].includes(criterion.id);
    } else {
      return ["scholarly-articles", "judging", "original-contributions", "press"].includes(criterion.id);
    }
  };

  const getPersonaBadge = () => {
    if (selectedPersona === "industry") {
      if (["critical-role", "high-salary", "commercial-success"].includes(criterion.id)) {
        return { label: "Industry Core", color: "bg-indigo-50 text-indigo-700 border-indigo-100" };
      }
      if (["original-contributions", "press", "judging", "awards"].includes(criterion.id)) {
        return { label: "Strong Alternative", color: "bg-slate-100 text-slate-700 border-slate-200" };
      }
      return { label: "Niche Strategy", color: "bg-slate-100/50 text-slate-500 border-dashed" };
    } else {
      if (["scholarly-articles", "judging"].includes(criterion.id)) {
        return { label: "Academic Standard", color: "bg-emerald-50 text-emerald-700 border-emerald-100" };
      }
      if (["original-contributions", "press", "awards", "membership"].includes(criterion.id)) {
        return { label: "Scholarly Advantage", color: "bg-sky-50 text-sky-700 border-sky-100" };
      }
      return { label: "Niche Strategy", color: "bg-slate-100/50 text-slate-500 border-dashed" };
    }
  };

  const badge = getPersonaBadge();
  const recommended = isHighRecommendation();

  return (
    <div
      className={`group relative bg-white rounded-xl border transition-all duration-200 flex flex-col p-5 cursor-pointer select-none h-full ${
        isSelected
          ? "border-indigo-600 bg-indigo-50/5 ring-1 ring-indigo-600/10 shadow-sm border-l-4"
          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
      }`}
      onClick={() => onSelect(criterion)}
    >
      {/* Top section: badge & bookmark */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badge.color}`}>
            {badge.label}
          </span>
          {recommended && (
            <span className="bg-amber-50 text-amber-800 border border-amber-100 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-0.5">
              <Flame className="h-2.5 w-2.5 text-amber-500 fill-amber-500" /> High Yield
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(criterion.id);
          }}
          className={`p-1.5 rounded-lg border transition-all ${
            isBookmarked
              ? "bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-100"
              : "bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300"
          }`}
          title={isBookmarked ? "Remove from my targeted criteria" : "Bookmark/Add to targeted criteria"}
        >
          {isBookmarked ? <BookmarkCheck className="h-3.5 w-3.5" /> : <Bookmark className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="font-sans font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
          {criterion.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed font-sans">
          {criterion.shortDescription}
        </p>
      </div>

      {/* Progress & Bottom Actions */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col gap-2.5">
        {/* Progress indicator */}
        {isBookmarked ? (
          <div>
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-400 mb-1">
              <span>MILESTONES COMPLETE</span>
              <span className="text-indigo-600">{completionRate}%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="text-[9px] text-slate-400 font-mono tracking-wide leading-none py-0.5 font-semibold">
            💤 NOT TARGETED
          </div>
        )}

        <div className="flex items-center justify-between mt-0.5">
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Build Blueprint <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
          </span>
          <span className="text-[9px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 font-semibold">
            10 Strategies
          </span>
        </div>
      </div>
    </div>
  );
}
