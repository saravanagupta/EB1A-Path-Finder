import React, { useState } from "react";
import { Download, Copy, Check, FileCheck, BookOpen, AlertCircle } from "lucide-react";
import { Criterion, BookmarkState, ChecklistState, NotesState } from "../types";

interface ExportPanelProps {
  criteria: Criterion[];
  bookmarks: BookmarkState;
  checklist: ChecklistState;
  notes: NotesState;
  selectedPersona: "industry" | "academic";
}

export default function ExportPanel({
  criteria,
  bookmarks,
  checklist,
  notes,
  selectedPersona,
}: ExportPanelProps) {
  const [copied, setCopied] = useState<boolean>(false);

  // Filter criteria that are bookmarked
  const targetedCriteria = criteria.filter((c) => bookmarks[c.id]);

  // Generate complete text report
  const generateReportText = () => {
    let report = "";
    report += "=========================================================================\n";
    report += "                   EB1A PATHFINDER STRATEGY ACTION PLAN                 \n";
    report += "          - Dynamic Gap-Analysis & Legal Argument Blueprint -           \n";
    report += "=========================================================================\n\n";
    report += `Generated on: ${new Date().toLocaleDateString()}\n`;
    report += `Selected Core Pathway: ${selectedPersona === "industry" ? "INDUSTRY INNOVATOR (Tech Leader/Founder)" : "SCHOLARLY INVESTIGATOR (Academic Ph.D.)"}\n`;
    report += `Active Targeted Categories: ${targetedCriteria.length} out of 10 total USCIS Criteria\n`;
    
    if (targetedCriteria.length < 3) {
      report += "\n⚠️ LEGAL SAFETY LEVEL: LOW (Below USCIS legal requirement of 3, add more categories to proceed)\n";
    } else if (targetedCriteria.length === 3) {
      report += "\n⚠️ LEGAL SAFETY LEVEL: MINIMUM COMPLIANCE (Meets the 3-category minimum, but highly vulnerable to RFEs)\n";
    } else {
      report += "\n✅ LEGAL SAFETY LEVEL: OPTIMAL (Targeting 4+ categories provides a healthy safety net for adjudication trends)\n";
    }
    
    report += "\n=========================================================================\n";
    report += "                 SECTION 1: TARGETED CRITERIA SUMMARY                    \n";
    report += "=========================================================================\n\n";

    if (targetedCriteria.length === 0) {
      report += "No categories targeted yet. Go back to the dashboard and flag/bookmark\n";
      report += "categories to build your custom safety net.\n";
    }

    targetedCriteria.forEach((c, idx) => {
      // Calculate individual progress
      const p1Check = checklist[`${c.id}-p1-action`] ? 1 : 0;
      const p2Check = checklist[`${c.id}-p2-action`] ? 1 : 0;
      const p3Check = checklist[`${c.id}-p3-action`] ? 1 : 0;
      const totalComplete = p1Check + p2Check + p3Check;
      const rate = Math.round((totalComplete / 3) * 100);

      report += `${idx + 1}. [${c.name}] (${c.officialLegalName})\n`;
      report += `   - Milestone Blueprint Execution Progress: ${rate}%\n`;
      report += `   - Phase 1 (Gap Analysis & Angle): ${checklist[`${c.id}-p1-action`] ? "✅ COMPLETED" : "❌ PENDING"}\n`;
      report += `   - Phase 2 (Execution & Metric Drive): ${checklist[`${c.id}-p2-action`] ? "✅ COMPLETED" : "❌ PENDING"}\n`;
      report += `   - Phase 3 (Curation & Testimony): ${checklist[`${c.id}-p3-action`] ? "✅ COMPLETED" : "❌ PENDING"}\n\n`;
    });

    report += "=========================================================================\n";
    report += "            SECTION 2: CUSTOM CRITERIA BLUEPRINT & EVIDENCE             \n";
    report += "=========================================================================\n\n";

    if (targetedCriteria.length === 0) {
      report += "No workbook logs compiled.\n";
    }

    targetedCriteria.forEach((c) => {
      const cNotes = notes[c.id] || {
        existingWork: "",
        gapAnalysis: "",
        actionItems: "",
        draftTestimonial: "",
      };

      report += `>>> CRITERION: ${c.name.toUpperCase()}\n`;
      report += `Official USCIS Phrasing: ${c.officialLegalName}\n`;
      report += `-------------------------------------------------------------------------\n`;
      report += `[A] Existing Evidentiary Assets:\n`;
      report += `${cNotes.existingWork.trim() || "(No entry customized)"}\n\n`;
      report += `[B] Identified Gaps & Strategic Expansion:\n`;
      report += `${cNotes.gapAnalysis.trim() || "(No entry customized)"}\n\n`;
      report += `[C] Detailed Field Action Items Checklist:\n`;
      report += `${cNotes.actionItems.trim() || "(No entry customized)"}\n\n`;
      report += `[D] Arms-Length Witness Testimony Outline:\n`;
      report += `${cNotes.draftTestimonial.trim() || "(No entry customized)"}\n`;
      report += `=========================================================================\n\n`;
    });

    report += "=========================================================================\n";
    report += "                SECTION 3: STRATEGIC NEXT STEPS CHECKLIST                \n";
    report += "=========================================================================\n\n";
    report += "[ ] 1. Share this txt file directly with your immigration attorney to align strategy.\n";
    report += "[ ] 2. Gather physically every document listed in the Required Evidence checklists.\n";
    report += "[ ] 3. Begin cold outreach to key independent expert cataloged under section 2 [D].\n";
    report += "[ ] 4. Audit your total citation index or commercial download quantities monthly.\n";
    report += "\n-------------------------------------------------------------------------\n";
    report += "Disclaimer: EB1A Pathfinder does not substitute for qualified legal adviser consultation.\n";
    report += "Ensure you compile verifiable, physical paperwork for every claim made.\n";
    report += "=========================================================================\n";

    return report;
  };

  const handleCopy = () => {
    const text = generateReportText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `EB1A_Pathfinder_Strategy_Plan_${selectedPersona}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-slate-800 mt-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div>
          <span className="text-[10px] text-indigo-600 font-mono font-bold tracking-widest uppercase">Export Center & Next Steps</span>
          <h2 className="font-sans font-bold text-xl tracking-tight text-slate-900 mt-1">
            Export Your Strategic Plan
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
            Download your customized gap-analysis matrices, check points, and drafted letters into a structured strategy briefing document to share with your legal team.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 shrink-0">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4.5 py-2.5 bg-white text-slate-755 hover:bg-slate-50 border border-slate-200 font-sans text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                Copied Action Plan!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-indigo-600" />
                Copy to Clipboard
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4.5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-xs font-semibold rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Download Strategy Pack (.txt)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Safe-odds feedback warning */}
        <div className="bg-amber-50/40 border border-amber-150 p-5 rounded-xl flex flex-col gap-3">
          <h4 className="font-sans font-bold text-sm text-slate-900 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-650 shrink-0" />
            Strategic Review Check
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            Adjudicating trends show that targeting only 3 categories leaves no fallback if an officer rejects one criteria.
          </p>
          <div className="text-xs font-bold font-sans mt-0.5">
            {targetedCriteria.length >= 4 ? (
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded inline-block">✨ Profile strength: High Odds Strategy</span>
            ) : (
              <span className="text-amber-800 bg-amber-50/60 border border-amber-150 px-2.5 py-1.5 rounded inline-block leading-normal">
                ⚠️ Advisory: We recommend adding at least {4 - targetedCriteria.length} more category targets to counter unpredictable RFEs.
              </span>
            )}
          </div>
        </div>

        {/* Categories checklist inside panel */}
        <div className="lg:col-span-2 bg-slate-50/50 border border-slate-200 p-5 rounded-xl">
          <h4 className="font-sans font-bold text-sm text-slate-900 flex items-center gap-2 mb-3">
            <FileCheck className="h-4 w-4 text-slate-500 shrink-0" />
            Targeted Criteria Milestone Progress
          </h4>
          {targetedCriteria.length === 0 ? (
            <p className="text-xs text-slate-550 italic mt-2 font-sans pl-1">
              No active categories selected yet. Go back to any category card on the dashboard and toggle the Bookmark icon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
              {targetedCriteria.map((c) => {
                const p1 = checklist[`${c.id}-p1-action`];
                const p2 = checklist[`${c.id}-p2-action`];
                const p3 = checklist[`${c.id}-p3-action`];
                const count = (p1 ? 1 : 0) + (p2 ? 1 : 0) + (p3 ? 1 : 0);
                return (
                  <div key={c.id} className="bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between gap-2.5 shadow-2xs">
                    <span className="text-xs font-bold text-slate-800 truncate max-w-[170px]">{c.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-indigo-100 bg-indigo-50/50 text-indigo-700 shrink-0 font-bold">
                      {count} / 3 Complete
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
