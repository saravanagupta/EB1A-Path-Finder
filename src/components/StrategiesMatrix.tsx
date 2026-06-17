import React, { useState } from "react";
import { KeyRound, ShieldAlert, Sparkles, ChevronDown, ChevronUp, Layers, CheckCircle2 } from "lucide-react";
import { Criterion, EvidenceStrategy } from "../types";

interface StrategiesMatrixProps {
  criterion: Criterion;
}

export default function StrategiesMatrix({ criterion }: StrategiesMatrixProps) {
  const [expandedStrategyId, setExpandedStrategyId] = useState<number | null>(1); // first item expanded by default for discoverability

  const toggleStrategy = (id: number) => {
    setExpandedStrategyId(expandedStrategyId === id ? null : id);
  };

  return (
    <div id="matrix-section" className="bg-white text-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-2 text-indigo-600">
            <Sparkles className="h-4 w-4 text-indigo-600 fill-indigo-100" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600">
              Winning Strategies Matrix
            </span>
          </div>
          <h3 className="font-sans font-bold text-xl tracking-tight text-slate-900">
            Top 10 Winning Evidence Strategies
          </h3>
          <p className="text-xs text-slate-500 max-w-2xl mt-1 leading-relaxed font-sans">
            USCIS adjudicators look for <strong className="text-slate-800">objective, independent, and third-party verifiable metrics</strong> over subjective references. Rely on these 10 structured proof models:
          </p>
        </div>

        <div className="bg-indigo-50/50 border border-indigo-150 p-4 rounded-xl flex items-center gap-3 shrink-0 max-w-sm">
          <ShieldAlert className="h-4 w-4 text-indigo-600 shrink-0" />
          <p className="text-[11px] text-slate-650 leading-normal">
            <strong className="text-indigo-950">RFE Trend:</strong> USCIS regularly rejects patents, peer reviews, or critical roles that lack documented, verifiable impact.
          </p>
        </div>
      </div>

      {/* Strategies list: elegant interactive rows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {criterion.top10Strategies.map((strategy, idx) => {
          const isExpanded = expandedStrategyId === strategy.id;
          return (
            <div
              key={strategy.id}
              className={`rounded-xl border transition-all duration-200 flex flex-col cursor-pointer overflow-hidden ${
                isExpanded
                  ? "bg-slate-50 border-indigo-400 ring-1 ring-indigo-400/10 shadow-xs"
                  : "bg-white border-slate-200 hover:bg-slate-50/50 hover:border-slate-300"
              }`}
              onClick={() => toggleStrategy(strategy.id)}
            >
              {/* Header block */}
              <div className="p-4 flex items-start gap-3.5 select-none justify-between">
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded bg-white border border-slate-250 flex items-center justify-center font-mono text-[10px] text-indigo-600 font-bold shrink-0 mt-0.5 shadow-xs">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-900 leading-snug">
                      {strategy.title}
                    </h4>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
                      FOCUS: {strategy.metricFocus}
                    </span>
                  </div>
                </div>

                <button className="text-slate-400 hover:text-slate-600 shrink-0 mt-0.5" aria-label="Toggle details">
                  {isExpanded ? <ChevronUp className="h-4 w-4 text-slate-705" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              {/* Collapsed content with subtle entering look */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1.5 border-t border-slate-150/85 bg-white text-xs">
                  <div className="grid grid-cols-1 gap-3.5 mt-2">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        🔑 VERIFIABLE PROOF (ARTIFACTS TO COLLECT):
                      </span>
                      <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-150 font-sans">
                        {strategy.verifiableProof}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        🚀 CASE SCENARIO EXAMPLE:
                      </span>
                      <p className="text-slate-600 leading-relaxed pl-3 border-l-2 border-indigo-500 italic font-sans text-[11px]">
                        &ldquo;{strategy.exampleScenario}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
