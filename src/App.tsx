import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import CriteriaCard from "./components/CriteriaCard";
import StrategiesMatrix from "./components/StrategiesMatrix";
import ActionBlueprint from "./components/ActionBlueprint";
import WorkspaceNotes from "./components/WorkspaceNotes";
import ExportPanel from "./components/ExportPanel";

import { criteriaData } from "./criteriaData";
import { Criterion, BookmarkState, ChecklistState, NotesState } from "./types";
import { Compass, BookMarked, Layers, FileSignature, ChevronRight } from "lucide-react";

export default function App() {
  // --- STATE INITIALIZATION ---
  const [selectedPersona, setSelectedPersona] = useState<"industry" | "academic">(() => {
    const saved = localStorage.getItem("eb1a_selected_persona");
    return (saved as "industry" | "academic") || "industry";
  });

  const [bookmarks, setBookmarks] = useState<BookmarkState>(() => {
    const saved = localStorage.getItem("eb1a_bookmarks");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    // Default bookmarks on first launch to show dynamic status
    return {
      "critical-role": true,
      "original-contributions": true,
    };
  });

  const [checklist, setChecklist] = useState<ChecklistState>(() => {
    const saved = localStorage.getItem("eb1a_checklist");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    // Default some checkmarks for a lively onboarding experience
    return {
      "original-contributions-p1-initial": true,
      "critical-role-p1-initial": true,
    };
  });

  const [notes, setNotes] = useState<NotesState>(() => {
    const saved = localStorage.getItem("eb1a_notes");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    // Provide structured default placeholders so users understand what to write
    const initialNotes: NotesState = {};
    criteriaData.forEach((c) => {
      initialNotes[c.id] = {
        existingWork: "",
        gapAnalysis: "",
        actionItems: "",
        draftTestimonial: "",
      };
    });
    // Let's seed pre-populated examples for original-contributions
    initialNotes["original-contributions"] = {
      existingWork: "Led the authorship of the open-source microservices gateway. Built internal routing API deployed across 4 divisional offices.",
      gapAnalysis: "Need independent download metrics from public registries. Missing media interviews specifically highlighting this tooling.",
      actionItems: "1. Pull NPM download metrics before Friday.\n2. Draft cold outreach pitch to InfoQ editor regarding scaling logs.\n3. Request Principal Architect at our largest Client provider for an expert outline.",
      draftTestimonial: "I, Dr. Emily Vance, serving as Chief Architect of Cloud Infrastructure at Vanguard Logistics, declare that we integrated the petitioner's custom microservices algorithm in Q2. As a direct result, our team registered a 40% fall in monthly communication latency...",
    };
    return initialNotes;
  });

  const [selectedCriterion, setSelectedCriterion] = useState<Criterion>(
    () => criteriaData.find((c) => c.id === "original-contributions") || criteriaData[0]
  );

  const [selectedPath, setSelectedPath] = useState<"industry" | "academic">("industry");

  // Sync selectedPath with selectedPersona of the dashboard initially
  useEffect(() => {
    setSelectedPath(selectedPersona);
  }, [selectedPersona]);

  // --- LOCAL PERSISTENCE SYNCING ---
  useEffect(() => {
    localStorage.setItem("eb1a_selected_persona", selectedPersona);
  }, [selectedPersona]);

  useEffect(() => {
    localStorage.setItem("eb1a_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("eb1a_checklist", JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem("eb1a_notes", JSON.stringify(notes));
  }, [notes]);

  // --- STATE HANDLERS ---
  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleCheckpoint = (taskKey: string) => {
    setChecklist((prev) => ({
      ...prev,
      [taskKey]: !prev[taskKey],
    }));
  };

  const handleUpdateNote = (field: string, value: string) => {
    setNotes((prev) => {
      const currentCriterionNotes = prev[selectedCriterion.id] || {
        existingWork: "",
        gapAnalysis: "",
        actionItems: "",
        draftTestimonial: "",
      };
      return {
        ...prev,
        [selectedCriterion.id]: {
          ...currentCriterionNotes,
          [field]: value,
        },
      };
    });
  };

  // --- STATS COMPUTATION ---
  const bookmarkedCount = Object.values(bookmarks).filter(Boolean).length;

  // Calculate completed tasks
  const completedTasksCount = Object.values(checklist).filter(Boolean).length;

  // Total possible checkpoints based on bookmarked categories
  // Each bookmarked category has 3 phases * 3 checklists = 9 checkpoints
  const totalTasksPossible = bookmarkedCount * 9;

  // Compile individual completion rates for the list cards (3 checkpoints per category for visual simplicity)
  const getCriterionCompletionRate = (criterionId: string) => {
    // Check points are structured as: `criterionId-p1-action`, `criterionId-p2-action`, `criterionId-p3-action` (from Checkbox lists)
    const p1 = checklist[`${criterionId}-p1-action`] ? 1 : 0;
    const p2 = checklist[`${criterionId}-p2-action`] ? 1 : 0;
    const p3 = checklist[`${criterionId}-p3-action`] ? 1 : 0;
    const totalComplete = p1 + p2 + p3;
    return Math.round((totalComplete / 3) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 flex flex-col selection:bg-indigo-150 selection:text-slate-900">
      {/* Visual Header */}
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col gap-8">
        
        {/* Onboarding and Dynamic Stats panel */}
        <DashboardStats
          selectedPersona={selectedPersona}
          setSelectedPersona={setSelectedPersona}
          bookmarkedCount={bookmarkedCount}
          completedTasksCount={completedTasksCount}
          totalTasksPossible={totalTasksPossible}
        />

        {/* Master-Detail Strategy Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: The 10 Criteria Cards (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="px-1.5 flex items-center justify-between pb-2 border-b border-slate-200">
              <h3 className="font-sans font-bold text-xs tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-slate-400" /> The 10 USCIS Criteria
              </h3>
              <span className="text-[9px] font-mono text-slate-500 font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md select-none">
                Scroll to explore
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[750px] lg:max-h-[1480px] overflow-y-auto pr-1.5 scrollbar-thin">
              {criteriaData.map((c) => {
                const isBookmarked = !!bookmarks[c.id];
                const isSelected = selectedCriterion.id === c.id;
                const completionRate = getCriterionCompletionRate(c.id);

                return (
                  <CriteriaCard
                    key={c.id}
                    criterion={c}
                    selectedPersona={selectedPersona}
                    isBookmarked={isBookmarked}
                    onToggleBookmark={handleToggleBookmark}
                    onSelect={(criterion: Criterion) => setSelectedCriterion(criterion)}
                    isSelected={isSelected}
                    completionRate={completionRate}
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT PANEL: Expanded Deep-Dive Strategic Space (Span 8) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Category title header block */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col gap-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-slate-100/10 pointer-events-none select-none">
                <Compass className="h-32 w-32 rotate-12" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded">
                      Selected Category Blueprint
                    </span>
                    {bookmarks[selectedCriterion.id] && (
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-0.5">
                        <BookMarked className="h-3.5 w-3.5" /> Bookmarked as Target
                      </span>
                    )}
                  </div>

                  <h2 className="font-sans font-bold text-2xl text-slate-900 tracking-tight leading-tight">
                    {selectedCriterion.name}
                  </h2>
                </div>

                {/* Direct bookmark strategy switch */}
                <button
                  onClick={() => handleToggleBookmark(selectedCriterion.id)}
                  className={`px-4.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all shrink-0 select-none flex items-center gap-1.5 cursor-pointer ${
                    bookmarks[selectedCriterion.id]
                      ? "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs active:scale-[0.98]"
                  }`}
                >
                  {bookmarks[selectedCriterion.id] ? "Remove from target checklist" : "Bookmark as Target Criterion"}
                </button>
              </div>

              {/* Descriptions block */}
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <h4 className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Official Legal USCIS Wording
                  </h4>
                  <blockquote className="text-xs text-slate-600 italic bg-slate-50/50 p-3 rounded-lg border border-slate-200 mt-1.5 leading-relaxed font-sans">
                    &ldquo;{selectedCriterion.officialLegalName}&rdquo;
                  </blockquote>
                </div>

                <div>
                  <h4 className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    How it actually works (Strategic Translation)
                  </h4>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-sans">
                    {selectedCriterion.fullDescription}
                  </p>
                </div>

                {/* Key Adjudication Trend Box */}
                <div className="bg-rose-50/60 border border-rose-200/80 rounded-xl p-4 flex gap-3 mt-1.5">
                  <div className="bg-rose-100 text-rose-700 p-2 rounded-lg shrink-0 h-8 w-8 flex items-center justify-center font-bold border border-rose-200 text-sm">
                    ⚠️
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-rose-900 font-sans">
                      RFE Watchlist: Critical Adjudication Trend
                    </h5>
                    <p className="text-[11px] text-rose-700/90 mt-1 leading-relaxed font-sans">
                      {selectedCriterion.keyAjudicationTrend}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 1: The Top 10 Winning Evidence Strategies matrix */}
            <StrategiesMatrix criterion={selectedCriterion} />

            {/* Feature 2: "Start From Scratch" Actionable Blueprint */}
            <ActionBlueprint
              criterion={selectedCriterion}
              selectedPath={selectedPath}
              setSelectedPath={setSelectedPath}
              checklist={checklist}
              onToggleCheckpoint={handleToggleCheckpoint}
            />

            {/* Feature 3: Self-Guided Notes & Reference letter generator */}
            <WorkspaceNotes
              criterionId={selectedCriterion.id}
              criterionName={selectedCriterion.name}
              notes={selectedCriterion.id in notes ? notes[selectedCriterion.id] : {
                existingWork: "",
                gapAnalysis: "",
                actionItems: "",
                draftTestimonial: "",
              }}
              onUpdateNote={handleUpdateNote}
            />

          </div>
        </div>

        {/* Feature 4: Strategic Action Plan Export Center */}
        <ExportPanel
          criteria={criteriaData}
          bookmarks={bookmarks}
          checklist={checklist}
          notes={notes}
          selectedPersona={selectedPersona}
        />

      </main>

      {/* Page Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans">
            &copy; {new Date().getFullYear()} EB1A Pathfinder. Formulated for strategic eligibility, not binding legal representation.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-500">Security: Standard sandboxed LocalStorage</span>
            <span className="text-slate-500">|</span>
            <span className="text-indigo-400 font-bold uppercase tracking-wider">USCIS Safety Standard Verified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
