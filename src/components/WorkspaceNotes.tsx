import React from "react";
import { FileText, Lightbulb, Save, ShieldAlert, Sparkles } from "lucide-react";

interface WorkspaceNotesProps {
  criterionId: string;
  criterionName: string;
  notes: {
    existingWork: string;
    gapAnalysis: string;
    actionItems: string;
    draftTestimonial: string;
  };
  onUpdateNote: (field: string, value: string) => void;
}

export default function WorkspaceNotes({
  criterionId,
  criterionName,
  notes,
  onUpdateNote,
}: WorkspaceNotesProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mt-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
        <div>
          <span className="text-[10px] text-indigo-600 font-mono font-bold tracking-widest uppercase">Self-Guided Workstation</span>
          <h3 className="font-sans font-bold text-xl tracking-tight text-slate-900 mt-1">
            Workbook & Argument Builder
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Build your legal arguments and draft your supporting materials for <strong className="text-slate-800">{criterionName}</strong>. All text is auto-saved to your browser.
          </p>
        </div>

        <div className="bg-indigo-50 text-indigo-800 text-[11px] font-medium px-3.5 py-1.5 rounded-xl border border-indigo-150 flex items-center gap-1.5 shrink-0 max-w-sm">
          <Sparkles className="h-4 w-4 text-indigo-600 fill-indigo-650/10 shrink-0" />
          <span>Inputs are included in your exportable gap analysis summary!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column: Text entries */}
        <div className="flex flex-col gap-5">
          {/* Box 1 */}
          <div>
            <label className="block text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
              📂 EXISTING WORKBASE & RAW INGREDIENTS
            </label>
            <textarea
              value={notes.existingWork}
              onChange={(e) => onUpdateNote("existingWork", e.target.value)}
              placeholder="List any internal tools, software versions, patents, or publications you have already authored or worked on that map to this category..."
              className="w-full h-28 p-3.5 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 text-xs text-slate-700 placeholder-slate-400 bg-slate-50/40 focus:bg-white transition-all resize-y"
            />
          </div>

          {/* Box 2 */}
          <div>
            <label className="block text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-2">
              🔍 GAP ANALYSIS & EXPANSION PLAN
            </label>
            <textarea
              value={notes.gapAnalysis}
              onChange={(e) => onUpdateNote("gapAnalysis", e.target.value)}
              placeholder="What metrics or external validation are you currently missing? Detail how you plan to pitch trade reporters or publish standardized protocols..."
              className="w-full h-28 p-3.5 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 text-xs text-slate-700 placeholder-slate-400 bg-slate-50/40 focus:bg-white transition-all resize-y"
            />
          </div>

          {/* Box 3 */}
          <div>
            <label className="block text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              📝 SPECIFIC ACTION ITEMS & CALENDAR
            </label>
            <textarea
              value={notes.actionItems}
              onChange={(e) => onUpdateNote("actionItems", e.target.value)}
              placeholder="e.g.: Month 1: Pull API download statistics. Month 2: Set up peer-review portal account. Month 3: Ask Senior Architect for sign-off..."
              className="w-full h-28 p-3.5 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 text-xs text-slate-700 placeholder-slate-400 bg-slate-50/40 focus:bg-white transition-all resize-y"
            />
          </div>
        </div>

        {/* Right column: Testimonial Generator & Coaching advice */}
        <div className="flex flex-col gap-5">
          <div className="p-5 bg-indigo-50/30 rounded-xl border border-indigo-100 flex flex-col gap-3.5">
            <h4 className="font-sans font-bold text-sm text-slate-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-indigo-600 shrink-0" />
              Expert Opinion Letter Guidelines
            </h4>
            <div className="text-[11px] text-slate-600 space-y-2 leading-relaxed">
              <p>
                USCIS is highly skeptical of recommenders with joint commercial ties or close personal relationships (e.g., co-workers, university classmates, co-authors).
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>
                  <strong className="text-slate-800">Arms-Length Rule:</strong> Prioritize leaders with zero joint business ties, who only know you through your public deliverables.
                </li>
                <li>
                  <strong className="text-slate-800">Specific Over Generic:</strong> The letter must point to a specific algorithm or document and explain how it was applied — never just say &ldquo;they are a genius engineer.&rdquo;
                </li>
                <li>
                  <strong className="text-slate-800">Quantifiable Business Impact:</strong> Letters must explicitly quote quantities: dollars saved, download metrics, or paper citation percentiles.
                </li>
              </ul>
            </div>
          </div>

          {/* Expert Letter Drafter */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                ✍️ DRAFT ARMS-LENGTH REFERENCE OUTLINE
              </label>
              <span className="text-[9px] text-slate-400 font-mono font-semibold uppercase">Expert Letter Outline</span>
            </div>
            <textarea
              value={notes.draftTestimonial}
              onChange={(e) => onUpdateNote("draftTestimonial", e.target.value)}
              placeholder={`Write your draft expert letter outline here:\n\n"I, [Expert Name], serving as Principal Researcher at [Organization], submit this expert opinion. I did not know the petitioner personally, but was introduced to their breakthrough database system when my division had to scale transaction thresholds..."`}
              className="w-full flex-1 min-h-[220px] p-4 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 text-xs font-mono text-slate-700 placeholder-slate-400 bg-slate-50/20 focus:bg-white leading-relaxed transition-all resize-y"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
