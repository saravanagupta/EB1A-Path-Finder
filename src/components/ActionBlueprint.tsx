import React, { useState } from "react";
import { ArrowLeftRight, CheckSquare, FileCheck2, Lightbulb, Square, ThumbsDown, ThumbsUp, Activity, HelpCircle } from "lucide-react";
import { Criterion, PhaseGuide } from "../types";

interface ActionBlueprintProps {
  criterion: Criterion;
  selectedPath: "industry" | "academic";
  setSelectedPath: (p: "industry" | "academic") => void;
  checklist: { [key: string]: boolean };
  onToggleCheckpoint: (taskKey: string) => void;
}

export default function ActionBlueprint({
  criterion,
  selectedPath,
  setSelectedPath,
  checklist,
  onToggleCheckpoint,
}: ActionBlueprintProps) {
  // Survey state
  const [surveyAnswered, setSurveyAnswered] = useState<boolean>(false);
  const [surveyResponse, setSurveyResponse] = useState<"yes" | "no" | null>(null);

  const renderPhaseCard = (phaseNum: number, phaseName: string, phase: PhaseGuide) => {
    const actionText = selectedPath === "industry" ? phase.industryAction : phase.academicAction;

    // Define tasks based on the phase content
    const tasks = [
      {
        key: `${criterion.id}-p${phaseNum}-initial`,
        label: `Review & extract baseline: ${phase.description.substring(0, 40)}...`,
      },
      {
        key: `${criterion.id}-p${phaseNum}-action`,
        label: `Execute path strategy: ${actionText.substring(0, 50)}...`,
      },
      {
        key: `${criterion.id}-p${phaseNum}-metrics`,
        label: `Establish quantified target: ${phase.impactMetrics}`,
      },
    ];

    return (
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
        {/* Phase Badge Header */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              PHASE {phaseNum}
            </span>
            <h4 className="font-sans font-bold text-base text-slate-900 mt-2">
              {phase.title}
            </h4>
          </div>
          <div className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">
            {phaseNum === 1 ? "Start" : phaseNum === 2 ? "Growth" : "Verdict"}
          </div>
        </div>

        <p className="text-xs text-slate-500 italic bg-slate-50/55 p-3 rounded-lg border border-slate-200">
          <strong>Objective:</strong> {phase.description}
        </p>

        {/* Action Strategy block with customizable path toggle */}
        <div className="bg-indigo-50/50 rounded-lg p-4 border border-indigo-100/60 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-mono font-bold tracking-wider text-indigo-700 uppercase">
              🚀 EXECUTABLE STRATEGIC TASK ({selectedPath === "industry" ? "INDUSTRY PATH" : "ACADEMIC PATH"})
            </span>
            <button
              onClick={() => setSelectedPath(selectedPath === "industry" ? "academic" : "industry")}
              className="text-[9px] font-mono font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded cursor-pointer select-none"
              title="Toggle alternative path instructions"
            >
              <ArrowLeftRight className="h-2.5 w-2.5" /> Switch Path
            </button>
          </div>
          <p className="text-xs font-semibold text-slate-800 leading-relaxed font-sans">
            {actionText}
          </p>
        </div>

        {/* Quantified Impact Formula */}
        <div className="bg-emerald-50/40 border border-emerald-150 rounded-lg p-3 flex gap-2.5">
          <Activity className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
          <div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-800 block">
              Impact Metric Strategy
            </span>
            <p className="text-xs text-slate-650 mt-0.5 font-sans">
              {phase.impactMetrics}
            </p>
          </div>
        </div>

        {/* Checkable Profile Milestones */}
        <div className="mt-1">
          <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-2">
            CHECKLIST MILESTONES (PRESERVED LOCALLY)
          </span>
          <div className="flex flex-col gap-2">
            {tasks.map((task) => {
              const checked = !!checklist[task.key];
              return (
                <div
                  key={task.key}
                  onClick={() => onToggleCheckpoint(task.key)}
                  className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all cursor-pointer ${
                    checked
                      ? "bg-slate-50 border-slate-200 text-slate-400"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-350 shadow-xs"
                  }`}
                >
                  <button className="shrink-0 mt-0.5 pointer-events-none" aria-label={checked ? "Uncheck task" : "Check task"}>
                    {checked ? (
                      <CheckSquare className="h-4 w-4 text-slate-700 fill-slate-100" />
                    ) : (
                      <Square className="h-4 w-4 text-slate-300" />
                    )}
                  </button>
                  <span className={`text-xs ${checked ? "line-through text-slate-400" : "font-semibold"}`}>
                    {task.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Artifacts folder checklist */}
        <div className="mt-1">
          <span className="text-[9px] font-mono font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
            📂 REQUIRED PHYSICAL EVIDENCE ARTIFACTS:
          </span>
          <ul className="text-xs text-slate-500 list-disc list-inside space-y-1 pl-1">
            {phase.verificationArtifacts.map((art, aIdx) => (
              <li key={aIdx} className="leading-tight text-slate-600 font-sans">
                {art}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] text-indigo-600 font-mono font-bold tracking-widest uppercase">Start From Scratch Roadmap</span>
          <h3 className="font-sans font-bold text-xl tracking-tight text-slate-900 mt-1">
            Actionable Pathway Blueprint
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Follow this 3-stage strategic framework to systematically generate, curate, and prove legal evidence. Toggle paths to view industry vs scholarly rules.
          </p>
        </div>

        {/* Global Blueprint Toggle */}
        <div className="flex bg-slate-150/75 p-1 rounded-lg self-start md:self-center border border-slate-205">
          <button
            onClick={() => setSelectedPath("industry")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
              selectedPath === "industry" ? "bg-white text-indigo-650 shadow-xs border border-slate-200/50" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Industry Path
          </button>
          <button
            onClick={() => setSelectedPath("academic")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
              selectedPath === "academic" ? "bg-white text-indigo-650 shadow-xs border border-slate-200/50" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Academic Path
          </button>
        </div>
      </div>

      {/* Grid containing Phase 1, Phase 2, Phase 3 cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {renderPhaseCard(1, "Finding Your Angle", criterion.phases.phase1)}
        {renderPhaseCard(2, "The Execution Plan", criterion.phases.phase2)}
        {renderPhaseCard(3, "The Impact Strategy", criterion.phases.phase3)}
      </div>

      {/* Was this step-by-step roadmap helpful micro-survey */}
      <div className="mt-8 bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h5 className="font-sans font-bold text-sm text-slate-900 leading-tight">
              Was this step-by-step roadmap blueprint helpful?
            </h5>
            <p className="text-xs text-slate-500 mt-0.5">
              Your feedback is preserved locally to help refine general proof-of-concept guidelines and safety margins.
            </p>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          {surveyAnswered ? (
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-250 flex items-center gap-1.5 animate-pulse">
              <CheckSquare className="h-4 w-4" /> Feedback Saved! Thank you.
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  setSurveyAnswered(true);
                  setSurveyResponse("yes");
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-white stroke-slate-400 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
              >
                <ThumbsUp className="h-3.5 w-3.5 text-emerald-600 fill-emerald-100/50" />
                Yes, highly actionable
              </button>
              <button
                onClick={() => {
                  setSurveyAnswered(true);
                  setSurveyResponse("no");
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-white stroke-slate-400 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer"
              >
                <ThumbsDown className="h-3.5 w-3.5 text-rose-600 fill-rose-100/50" />
                Needs more detail
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
