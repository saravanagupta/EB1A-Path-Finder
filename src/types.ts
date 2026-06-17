export interface EvidenceStrategy {
  id: number;
  title: string;
  metricFocus: string;
  verifiableProof: string;
  exampleScenario: string;
}

export interface PhaseGuide {
  title: string;
  description: string;
  industryAction: string;
  academicAction: string;
  impactMetrics: string;
  verificationArtifacts: string[];
}

export interface Criterion {
  id: string;
  name: string;
  officialLegalName: string;
  shortDescription: string;
  fullDescription: string;
  keyAjudicationTrend: string;
  top10Strategies: EvidenceStrategy[];
  phases: {
    phase1: PhaseGuide;
    phase2: PhaseGuide;
    phase3: PhaseGuide;
  };
}

export interface BookmarkState {
  [criterionId: string]: boolean;
}

export interface ChecklistState {
  [taskKey: string]: boolean; // format: 'criterionId-phaseNum-taskType'
}

export interface NotesState {
  [criterionId: string]: {
    existingWork: string;
    gapAnalysis: string;
    actionItems: string;
    draftTestimonial: string;
  };
}
