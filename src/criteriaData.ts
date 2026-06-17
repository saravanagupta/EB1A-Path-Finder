import { Criterion } from "./types";

export const criteriaData: Criterion[] = [
  {
    id: "original-contributions",
    name: "Original Contributions of Major Significance",
    officialLegalName: "Evidence of your original scientific, scholarly, artistic, athletic, or business-related contributions of major significance in the field.",
    shortDescription: "Original technology, systems, or discoveries that have had a major, demonstrable impact on the broader industry.",
    fullDescription: "To satisfy this criterion, it is not enough to show that you have performed excellent work, built patents, or written core services. You must demonstrate that your original creations have been widely adopted or have actively reshaped practices across the wider field outside of your employer. USCIS looks for independent implementation of your discoveries, high citations, licensing agreements, or industry-wide standardizations.",
    keyAjudicationTrend: "USCIS routinely issues RFEs (Requests for Evidence) for patents that haven't been commercialized, or open-source repositories without documented external fork metrics or third-party corporate integrations. Focus on proven, third-party adoption metrics rather than internal praise letters.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Open-Source Framework Adoption",
        metricFocus: "50,000+ active downlods, 1,200+ stars, and 20+ production-grade external forks by third-party enterprises.",
        verifiableProof: "Public dependency graphs (e.g., npm, NuGet, GitHub Dependents), developer release logs, and independent fork code commits.",
        exampleScenario: "A senior infrastructure engineer creates a modern lightweight API gateway that is adopted as an open-source standard for external production systems."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Commercial Patent Licensing",
        metricFocus: "$1.5M+ in licensing revenue or integration of patented tech into hardware with 1M+ active shipments.",
        verifiableProof: "Executed licensing contracts, corporate sales logs, trade royalties receipts, and registered patent assignment notices.",
        exampleScenario: "A hardware engineer patents an ultra-efficient voltage regulator chip licensed by global automotive manufacturers."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Core Performance Algorithm Deployment",
        metricFocus: "25%+ latency reduction in database querying or network package distribution compared to legacy methods.",
        verifiableProof: "Product telemetry statistics, engineering whitepapers published on secondary platforms, and server transaction volume logs.",
        exampleScenario: "A software architect invents a customized B-tree serialization protocol that is integrated into a major commercial cloud database."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Venture Capital Technology Catalyst",
        metricFocus: "Original technical architecture serving as the core intellectual property to secure $15M+ in VC series funding.",
        verifiableProof: "SEC Form D filings, signed VC investment term sheets, and expert investor due-diligence briefs highlighting your specific IP as key value.",
        exampleScenario: "An AI-startup founder builds a proprietary visual-transformer model and leverages it to raise a massive Series A round."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Industry-Standard Protocol Development",
        metricFocus: "Adoption of standard cryptographic or transmission protocols by global standards bodies (W3C, IETF, IEEE).",
        verifiableProof: "Standards body meeting minutes, peer-consensus drafts, published RFCs listing you as lead editor/architect, and usage audits.",
        exampleScenario: "A cybersecurity expert crafts a fast zero-trust authentication handshake protocol adopted worldwide by banking associations."
      },
      {
        id: 6,
        title: "[Academic - Persona B] High-Impact Peer-Reviewed Citations",
        metricFocus: "Ranked in the top 1% of most-cited research papers in your subfield based on Essential Science Indicators (ESI) data.",
        verifiableProof: "Web of Science and Scopus citation reports, citation maps, independent bibliometric analyzes, and third-party journal percentiles.",
        exampleScenario: "A molecular biologist publishes a novel protein sequencing technique that accumulates 450+ citations within 12 months."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Medical Diagnostic Protocol Adoptions",
        metricFocus: "Methodology or software tools adopted as standard operating procedure across 50+ hospital or clinical labs nationally.",
        verifiableProof: "Hospital integration protocols, state clinical registry guidelines, and formal letters from independent hospital chiefs.",
        exampleScenario: "A dental informatics researcher develops a custom radiographic scanner program deployed in dozens of private regional clinics."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Government-Funded Research Discoveries",
        metricFocus: "Pioneering research used to directly update national environmental guidelines or state energy policy frameworks.",
        verifiableProof: "Published government policy briefs citing your scientific papers as core backing, and official agency transcripts.",
        exampleScenario: "An environmental research scholar discovers a chemical compound extraction method that is integrated into EPA waste treatment rules."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Scientific Software Toolkit Integration",
        metricFocus: "Integrating an original technical code layer directly into standard scientific packages (e.g., NumPy, PyTorch).",
        verifiableProof: "Approved and merged pull-requests in upstream repositories, and package documentation lists highlighting your main scientific contributions.",
        exampleScenario: "A computer science scholar develops a specialized mathematical optimization matrix integrated directly into NumPy."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Landmark Experimental Methodology Adoption",
        metricFocus: "Methodology adopted by 15+ independent national laboratories as the primary standard for laser or material synthesis.",
        verifiableProof: "Official lab operating manuals, instrumentation guides, and joint publication citations by independent research teams.",
        exampleScenario: "A solid-state physicist devises a novel laser-plasma synthesis technique that is adopted as standard lab practice at major science academies."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Analyze the originality and baseline of your primary tech asset or scientific discovery. It must be unique, novel, and go beyond standard job duties.",
        industryAction: "Conduct an internal audit of all proprietary code libraries, custom APIs, or architecture you created. Isolate programs that were adopted by secondary corporate groups.",
        academicAction: "Audit your publication records to extract papers with high citation velocity. Remove co-author self-citations to identify pure independent citation base.",
        impactMetrics: "Establish baseline: current downloads, github star/fork rates, or baseline citation counts relative to other papers in your cohort.",
        verificationArtifacts: [
          "Developer git logs proving original module creation",
          "Patent filing schedules containing exact inventor claims",
          "Google Scholar / Scopus citation logs with self-citations excluded"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Deploy and publish your work to the external world, ensuring it gets actively tested, cited, or commercialized by independent third parties.",
        industryAction: "Release non-proprietary modules as open-source, write detailed technical case studies for developer blogs, and speak at major tech meetups.",
        academicAction: "Distribute pre-prints on arXiv/bioRxiv, email your toolkit details to prominent university labs, and present abstracts at peer-reviewed conferences.",
        impactMetrics: "Aim to secure 5,000+ monthly downloads, 15+ external forks, or 10 independent academic paper citations by researchers in distinct institutions.",
        verificationArtifacts: [
          "GitHub star/fork telemetry and package download dashboards",
          "Technical conference presentation slide decks and video logs",
          "Written email correspondence with external teams showing proactive integration"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Convert technological or scholarly adoption into highly detailed, legally binding and objective evidentiary portfolios.",
        industryAction: "Obtain formal letters of support from chief engineering officers at external firms, detailing the exact integration and fiscal saving metrics.",
        academicAction: "Collect arms-length testimonial letters from international researchers who cited your work, explaining why your technique is irreplaceable.",
        impactMetrics: "Document direct implementation of your technology in at least 5 distinct external commercial systems or lab environments.",
        verificationArtifacts: [
          "Formal signed testimonial letters printed on official company / university letterheads",
          "Redacted corporate systems blueprints showing your code active in their techstack",
          "Independent expert opinions explaining the major industry significance of your work"
        ]
      }
    }
  },
  {
    id: "critical-role",
    name: "Critical or Leading Role",
    officialLegalName: "Evidence that you have performed in a leading or critical role for organizations or establishments that have a distinguished reputation.",
    shortDescription: "Serving as a key technical, division, or organizational leader in a company with a strong national or global footprint.",
    fullDescription: "To satisfy the critical or leading role criterion, you must produce proof for a two-pronged test: 1) You served either in a 'leading' role (defined by hierarchy, reporting lines, and titled leadership) or a 'critical' role (defined by the high impact of your specific accomplishments, even if you are not a manager); and 2) The company or organization has a 'distinguished reputation' (proven by press, valuation, venture funding, top industry ranking, or global footprint).",
    keyAjudicationTrend: "USCIS officer training explicitly warns against accepting job titles alone. A title of 'VP' or 'Lead Architect' does not suffice. You must produce physical evidence like company org charts, project plans, revenue contribution audits, and public news highlights about the employer.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Principal Architect of Business-Critical Systems",
        metricFocus: "Leading design and execution of core technical platforms processing $15M+ globally or serving 5M+ active users.",
        verifiableProof: "System architecture diagrams, pull-request approval logs, database telemetry, and VP of Engineering signatures.",
        exampleScenario: "A principal engineer designs the cloud native migration plan for an e-commerce platform that processes millions of customer purchases."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Technical Cofounder of Venture-Backed Startup",
        metricFocus: "Securing $10M+ in institutional capital from Tier-1 venture funds as the technical visionary.",
        verifiableProof: "SEC Form D filings, startup valuation reports (409A), investor deck slides, and executive partner letters.",
        exampleScenario: "A technologist starts a warehouse robotics company and serves as chief designer of their proprietary autonomous routing system."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Incident Commander for Business Recovery",
        metricFocus: "Leading critical incident panels that successfully debugged and saved $1M+ in immediate potential downtime losses.",
        verifiableProof: "Post-mortem incident reports, developer slack response transcripts, system error logs, and executive commendations.",
        exampleScenario: "A senior site reliability engineer steps in during a major cloud outage, rebuilding the database cluster to restore services."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Engineering Division Director or VP",
        metricFocus: "Managing a cross-functional division of 50+ software developers with an annual product budget of $5M+.",
        verifiableProof: "Official corporate human resource organizational trees, budget sheets, and executive VP statements.",
        exampleScenario: "A Director of Engineering at a public SaaS multinational leads the core developer-platform tools team."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Chief Security Audit Lead",
        metricFocus: "Directing cybersecurity posture to secure rigid FedRAMP or SOC 2 Type II compliance.",
        verifiableProof: "Redacted official compliance audits, sign-off papers from licensing assessors, and institutional safety certificates.",
        exampleScenario: "An enterprise security manager designs the defense blueprint for a health-tech company, achieving full cloud compliance."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Principal investigator on Research Grants",
        metricFocus: "Securing $2M+ in combined federal research grants (e.g., NSF, NIH) as the lead investigator.",
        verifiableProof: "Official government grant awards, university budget sheets, and program transcripts.",
        exampleScenario: "A computational chemistry professor is appointed as lead scientist for a multi-year drug development grant."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Director of Distinguished Research Labs",
        metricFocus: "Directing lab operations focusing on deep-tech research with research outputs featured at global conferences.",
        verifiableProof: "University appointment rosters, university website structures, lab funding audits, and scientific review reports.",
        exampleScenario: "A senior scholar is selected to direct a state nanotechnology lab, overseeing 25+ PhD students and postdocs."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Global Standards Representative",
        metricFocus: "Representing a distinguished university within international tech consortiums (W3C, IEEE).",
        verifiableProof: "Official consortium appointment letters, delegation briefs, standards drafting schedules, and voting structures.",
        exampleScenario: "A computer science researcher is selected as lead academic delegate for the international SVG standards panel."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Chair of Prestigious Scientific Advisory Panels",
        metricFocus: "Chairs academic steering panels shaping multi-institution research directions or biotech clinical profiles.",
        verifiableProof: "FDA study submissions, corporate investor prospectuses, and signed letters of board appointment.",
        exampleScenario: "An oncology research scholar is selected to chair the advisory board for a venture-backed cancer therapeutics company."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Lead Scientific Consortium Strategist",
        metricFocus: "Managing joint academic-industry research partnerships with $3M+ in corporate funding.",
        verifiableProof: "Cooperative research agreements (CRADA), consortium rosters, and strategic blueprint slides.",
        exampleScenario: "A computer graphics associate professor runs a virtual reality research group sponsored by global chip suppliers."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Assess the prestige of your employer or university alongside your organizational reporting lines and critical metrics.",
        industryAction: "Find public documentation of your firm's distinguished standing (e.g., valuation, series funding, or press coverage). Create a detailed organizational hierarchy chart of your reporting lines.",
        academicAction: "Verify your university's ranking indexes (e.g. QS World Rankings, U.S. News, total research budget tier). Chart the structure of your scientific laboratory.",
        impactMetrics: "Measure internal baselines: total staff managed, system budget controlled, or grant funds allocated.",
        verificationArtifacts: [
          "Company funding sheets, Crunchbase reports, or financial press",
          "Detailed corporate or department organizational charts",
          "Employment contracts with official titles and job specifications"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Obtain and store internal artifacts detailing how your exact decisions saved projects, scaled systems, or drove research breakthroughs.",
        industryAction: "Extract system design blueprints, Jira epic schedules you reviewed, and system performance graphs showing pre/post impact.",
        academicAction: "Assemble lab records, research grant applications listing your name, and published science papers highlighting your lead author role.",
        impactMetrics: "Target: Demonstrate a 20% system throughput lift, $500K cost reduction, or leading joint academic research papers.",
        verificationArtifacts: [
          "Architecture and software specs carrying your signature as reviewer",
          "Internal project charts highlighting your responsibility for core metrics",
          "Internal system metrics dashboard snapshots showing software performance improvements"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Draft and execute precise executive letters of support confirming the leading or critical nature of your accomplishments.",
        industryAction: "Secure notarized letters of support from the CTO or Senior VP of global enterprises, detailing your irreplaceable contribution.",
        academicAction: "Secure formal letters from the university Chancellor, Department Dean, or Lead Principal Investigator confirming your vital role.",
        impactMetrics: "Verify that letters explicitly explain how you were critical to projects of significant national or commercial scope.",
        verificationArtifacts: [
          "Testimonial letters signed and printed on official corporate or university letterheads",
          "Securities filings or corporate prospectus plans showcasing your leadership role",
          "Expert legal briefs mapping your corporate achievements to USCIS requirements"
        ]
      }
    }
  },
  {
    id: "press",
    name: "Published Material (Press Coverage)",
    officialLegalName: "Evidence of published material about you in professional or major trade publications or other major media, relating to your work in the field.",
    shortDescription: "Articles, interviews, or profiles written about you or your custom engineering/research work in notable publications.",
    fullDescription: "To satisfy the Press criterion, the articles must be directly about you or your core projects. A brief mention of your name in a list of 100 corporate employees is not sufficient. The material must mention your specific work, the value you bring, and be published in high-circulation trade journals, national news platforms, or top-tier specialized tech blogs.",
    keyAjudicationTrend: "USCIS actively scrutinizes whether the press is paid or sponsored. Self-published platforms (like Medium or corporate blogs) are instantly dismissed. You must show the publication's reach and prove the piece was written by an independent journalist. Regional, local or startup-hosted interviews must be proven to have wide national viewership.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Dedicated Tech Media Profiles",
        metricFocus: "1,000-word feature article primarily profiling you or your custom software designs in premier tech sites (e.g., TechCrunch, Wired).",
        verifiableProof: "Direct digital links, screenshot prints of the full layout, and visitor circulation data from third-party tools.",
        exampleScenario: "A software architect is interviewed by InfoWorld regarding their design of a scalable microservice database adapter."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Trade Association Journal Spotlights",
        metricFocus: "Cover stories or key feature sections detailing your technical innovations in respected journals (e.g., ACM/IEEE Spectrum).",
        verifiableProof: "Journal front page covers, printed journal indices, and publisher's audited subscription metrics.",
        exampleScenario: "A cyber defense specialist has their custom intrusion taxonomy spotlighted in a monthly tech review."
      },
      {
        id: 3,
        title: "[Industry - Persona A] National Business Media Feature Articles",
        metricFocus: "Biographical or technology-centric articles printed in national business journals (e.g., Forbes, Bloomberg).",
        verifiableProof: "Scanning prints of physical papers, publisher media kits, and independent journalist credits.",
        exampleScenario: "An engineering manager's automated freight coordination platform gets a multi-page profile in Forbes."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Highly Curated Tech Blog Interviews",
        metricFocus: "Comprehensive technical interviews or case studies published by independent engineering blogs (e.g., InfoQ).",
        verifiableProof: "Published blog posts, RSS logs showing editor curation, and letters from the editor-in-chief confirming selection criteria.",
        exampleScenario: "A backend engineer is interviewed on InfoQ to detail their high-performance garbage collector rebuild."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Engineering Textbook Case Study Features",
        metricFocus: "Multiple pages focusing on your software designs described alongside industry systems in educational texts.",
        verifiableProof: "Book index page layouts, ISBN numbers, publisher details (O'Reilly, Springer), and full chapter copies.",
        exampleScenario: "A data engineer's scalable ledger design is selected as a case study and profiled in a modern distributed database textbook."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Professional Scientific News Profile",
        metricFocus: "Profile articles focusing on your scientific discoveries published in leading science media (e.g., Nature News, Science Career).",
        verifiableProof: "Original digital articles, masthead details, and publisher circulation statistics.",
        exampleScenario: "An immunology scholar is profiled in Nature News regarding her discovery of antibody cloning methods."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Specialized Science Broadcaster Features",
        metricFocus: "Interviews or features detailing your academic breakthroughs on national science programs or trade networks.",
        verifiableProof: "Certified broadcast transcripts, broadcasting agency credential letters, and viewer statistics.",
        exampleScenario: "A volcanology PhD is interviewed on National Geographic trades about her sensor grids."
      },
      {
        id: 8,
        title: "[Academic - Persona B] National Research Agency Spotlights",
        metricFocus: "Dedicated articles covering your academic research outcomes in federal agency newsletters (e.g., NSF News, NIH Director's Blog).",
        verifiableProof: "Official government publishing catalogs, agency newsletters, and archived governmental web links.",
        exampleScenario: "A materials researcher's energy capture model is highlighted in the annual HUD/NSF research summary."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Distinguished University Alumni Profiles",
        metricFocus: "Feature cover articles in highly respected college science reviews distributed to 100K+ academic experts globally.",
        verifiableProof: "Quarterly journal covers, print distributions ledger entries, and university press editorial details.",
        exampleScenario: "An optimization engineer is selected for a multi-page research spotlight in the MIT Technology Review alumni digest."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Syndicated Science Portal Highlights",
        metricFocus: "Scholarly profiles syndicated across independent scientific science networks (e.g., Phys.org, BioTechniques).",
        verifiableProof: "Syndication metrics dashboards, editorial board details, and copies of syndicated reports.",
        exampleScenario: "A biomedical scholar's tumor analytics methodology is profiled and syndicated across major biology blogs."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Assess your current media footprint. Distinguish between general brand-level PR vs individual-level profile articles.",
        industryAction: "Search Google and engineering database indexes for your name and product systems. Isolate features that focus primarily on your specific role.",
        academicAction: "Compile references to your published science papers in general science news sites and identify if any editors interviewed you.",
        impactMetrics: "Target: Identify a plan to secure at least 3 high-impact profile pieces in independent publications.",
        verificationArtifacts: [
          "Google News and trade archives alerts set up for your name",
          "List of target trade outlets and media platforms for your specific field",
          "Screenshots of any early, small-scale mentions in trade press"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Construct and pitch highly technical or scientific stories to journalists, focusing on the broader impact of your systems.",
        industryAction: "Formulate a detailed Case Study (on scalability, migration, or open-source) and pitch it to editors of major developer blogs.",
        academicAction: "Coordinate with your university's public relations officer to write research wire drafts, targeting science reporters.",
        impactMetrics: "Secure at least 2 structured one-on-one interviews with writers at platforms with 500k+ monthly visits.",
        verificationArtifacts: [
          "Pitch emails to technical journalists and media outline decks",
          "Working draft files written by trade reporters during interviews",
          "Official press kits from target publications detailing their audience stats"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Gather extensive circulation and independence data to support the prominence of the publishing platforms.",
        industryAction: "Download audits of the website's visitor metrics (SimilarWeb) and collect formal letters of independence from editors.",
        academicAction: "Secure formal certified translation documents for any international trade print, alongside library registry listings.",
        impactMetrics: "Establish that the publications are distinguished national major media platforms.",
        verificationArtifacts: [
          "SimilarWeb metrics proving monthly domain visits in the scale of millions",
          "Certified translation affidavit files for foreign press pieces",
          "Clean PDF scans of the original print layouts highlighting author lines"
        ]
      }
    }
  },
  {
    id: "judging",
    name: "Judging (Peer Review)",
    officialLegalName: "Evidence of your participation, either individually or on a panel, as a judge of the work of others in the same or an allied field.",
    shortDescription: "Reviewing submissions for top leagues, serving as a peer reviewer for academic journals, or judging major hackathons and tech competitions.",
    fullDescription: "To satisfy the Judging criterion, you must provide proof that you have judged the professional work of others in your field. This can include peer-reviewing technical manuscripts for academic journals, serving on the selection committee for venture-backed startup pitch contests, or judging prominent hacker challenges and industry innovation awards.",
    keyAjudicationTrend: "USCIS looks closely at the caliber of the event or journal you judged. Reviewing for low-tier local journals or local university hackathons will not fit. You must show that you were personally invited due to your outstanding expertise, and provide statistics about the event's stature.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Renowned Hackathon Judges",
        metricFocus: "Judging physical or digital hackathons with 10,000+ engineers representing global companies (e.g., ETHGlobal, HackMIT).",
        verifiableProof: "Official invitations, judge instruction briefs, event brochures, and judge rosters on the official website.",
        exampleScenario: "A senior systems developer is invited by a developer network to judge the core smart contract category."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Venture Accelerator Pitch Juror",
        metricFocus: "Serving on selection juries for top-tier venture incubators or accelerators (e.g., Techstars, Y Combinator).",
        verifiableProof: "Accelerator schedule programs, investor boards, and formal certificates of appreciation for judging.",
        exampleScenario: "An experienced tech strategist evaluates the scalability of deep-tech startup candidates for Techstars."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Industry Design & Software Award Panels",
        metricFocus: "Judging top-tier design or utility awards boards (e.g., Webby Awards, Red Dot) alongside global specialists.",
        verifiableProof: "Jury registry rosters, official award catalogs, press notices listing jurors, and guidelines.",
        exampleScenario: "A product designer is invited by the Academy of Digital Arts to judge the annual mobile security design class."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Cyber Security Capture-The-Flag Designer & Judge",
        metricFocus: "Creating and judging challenges for elite international hacking tournaments with 5,000+ competitors.",
        verifiableProof: "Challenge commit metrics, leaderboards, and letter of gratitude from event coordinators (e.g., DEF CON CTF).",
        exampleScenario: "A security operations researcher is contracted to design and score kernel manipulation challenges at DEF CON."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Venture Capital Prize Pitch Judge",
        metricFocus: "Evaluating pitch proposals allocating $5M+ in startup grant funding.",
        verifiableProof: "Venture pitch schedules, financial brochures, and signed letters of jury service from VC firms.",
        exampleScenario: "A tech founder is selected as an expert evaluator to judge a state-backed startup innovation contest."
      },
      {
        id: 6,
        title: "[Academic - Persona B] High-Impact Q1 Journal Peer Reviewers",
        metricFocus: "Completing 15+ peer reviews for academic journals indexed in Scopus and Web of Science (SJR Q1/Q2 tiers).",
        verifiableProof: "Publisher platform receipt screenshots, editor thank you emails, and journal impact factor sheets.",
        exampleScenario: "A machine learning PhD peer-reviews articles for IEEE Transactions on Pattern Analysis and Machine Intelligence."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Tier-1 Scholarly Conference Program Committees",
        metricFocus: "Admitted as a program committee board participant evaluating 30+ papers for top conferences (e.g., NeurIPS, CVPR).",
        verifiableProof: "Official program rosters, reviewer portal screenshots, and conference metric indices.",
        exampleScenario: "An AI associate professor is invited to evaluate scientific submissions for the annual CVPR conference."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Federal Agency Research Grant Panels",
        metricFocus: "Appointed to federal scientific review boards evaluating $15M+ in grant research proposals (e.g., NSF, NIH).",
        verifiableProof: "Official government agency appointment certificates, conflict of interest sign-offs, and agency panel logs.",
        exampleScenario: "A pharmacology research scientist is invited to join an NIH panel judging clinical candidate molecules."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Doctoral Thesis Defense External Reviewer",
        metricFocus: "Serving as external examiner / opponent on PhD dissertation panels at top-ranked international universities.",
        verifiableProof: "Published dissertation front cover pages listing you as critic, and university invitation letters.",
        exampleScenario: "A senior computer architect acts as external defense juror for a PhD candidate's compiler research at ETH Zurich."
      },
      {
        id: 10,
        title: "[Academic - Persona B] International Science & Engineering Fair Juries",
        metricFocus: "Judging national and international science finals with participants from 50+ countries.",
        verifiableProof: "Fair judge rosters, judge evaluation sheets, and official certificates of jury service.",
        exampleScenario: "A chemical engineer is chosen to judge the chemical sciences division at the Regeneron ISEF finals."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Assess your readiness to serve as a selector or peer reviewer. You must position your online CVs to reflect specialized expertise.",
        industryAction: "Construct a professional profile showcasing specialized tools you built, and locate hackathons actively seeking expert selectors.",
        academicAction: "Send targeted emails to editors of journals where you have published, offering to review manuscripts with your CV attached.",
        impactMetrics: "Target: Secure at least 5 invitations to judge or review the projects of other experts.",
        verificationArtifacts: [
          "Vetted portfolio or CV highlighting deep specialties",
          "Email pitch logs and template submissions sent to conference managers",
          "Scribbr or Publons profiles summarizing early-career academic engagement"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Execute the peer review or selecting duties to the highest professional standards, ensuring you store formal records.",
        industryAction: "Grade hackathon or contest submissions carefully, ensuring you obtain direct digital certificates of judging.",
        academicAction: "Perform objective, thorough manuscript reviews and export digital verification receipts from editor portals.",
        impactMetrics: "Target: Successfully judge at least 2 prestigious hackathons or finish 10 manuscript peer reviews.",
        verificationArtifacts: [
          "Interactive judging portals with your reviewer logging visible",
          "Dated PDF invitations addressed directly to your email",
          "Official letterhead certificates of service from event directors"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Verify and format the high stature of the conferences, competitions, or journals you judged.",
        industryAction: "Compile statistics of the competition (e.g., $100K+ funding pools, participation metrics, list of corporate sponsors).",
        academicAction: "Download formal journal ranking metrics (SJR indexes) proving the Q1 status of the publications you reviewed.",
        impactMetrics: "Establish that your invitations to judge were issued strictly due to your outstanding extraordinary credentials.",
        verificationArtifacts: [
          "Scimago journal ranking curves showing top percentile tiers",
          "Organizer checklists explaining the elite criteria of judges",
          "Official conference program books displaying your name on the juror committee roster"
        ]
      }
    }
  },
  {
    id: "scholarly-articles",
    name: "Scholarly Articles",
    officialLegalName: "Evidence of your authorship of scholarly articles in professional or major trade publications or other major media.",
    shortDescription: "Authoring academic papers, book chapters, conference presentations, or high-value deep-tech whitepapers.",
    fullDescription: "Applying for EB-1A via Scholarly Articles requires authorship of written technical or scientific research. While academics are very familiar with this criterion, industry practitioners can also satisfy it by publishing whitepapers in recognized trade journals, or paper briefs at premier engineering symposiums.",
    keyAjudicationTrend: "USCIS looks for peer-reviewed authorship. Self-published patents or general company blogs/medium articles are not considered scholarly. The publisher must have an independent, qualified editorial board or peer-review panel.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Industry Trade Journal Technical Papers",
        metricFocus: "Publishing deep architectural or system design and performance studies in recognized trade quarterlies.",
        verifiableProof: "Full printed articles, journal indexing files, and publisher details outlining their engineering review boards.",
        exampleScenario: "A flight software developer publishes a model case study on redundant drone sensor fusion in NASA Tech Briefs."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Cyber Threat Intelligence Whitepapers",
        metricFocus: "Authoring highly referenceable system threat whitepapers hosted on top trade platforms (e.g., SANS Institute).",
        verifiableProof: "SANS library cataloging index, download counts, and references made by secondary corporate security architects.",
        exampleScenario: "An infrastructure security coordinator authors a comprehensive paper profiling hardware supply-chain vulnerabilities."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Core System Blueprints in Commercial Symposiums",
        metricFocus: "Presenting system designs at prominent, peer-reviewed engineering gatherings (e.g., USENIX, Black Hat).",
        verifiableProof: "Symposium schedules, index directories, and printed technical papers in the proceedings library.",
        exampleScenario: "A cluster architect publishes an extensive paper on energy-aware multi-region cloud routing at USENIX."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Patent Expositions in Intellectual Property Bulletins",
        metricFocus: "Detailed technical descriptions of commercial patented technologies selected for peer-reviewed IP trade journals.",
        verifiableProof: "IP journal issues, library databases archives, and comments logs from peer review jurors.",
        exampleScenario: "An optical systems engineer publishes a deep discussion of their multi-focal lens patent in an optics journal."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Systems Engineering Forum Special Reports",
        metricFocus: "Reviewing specialized industry design and performance methodologies for corporate consortium journals.",
        verifiableProof: "Consortium journal prints, publisher mastheads, and verified digital catalog listings.",
        exampleScenario: "A database designer represents their company with a detailed blueprint review in the VLDB industrial track."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Lead Authorship in ACM/IEEE Indexed Journals",
        metricFocus: "Lead authorship of scientific manuscripts in high-impact monthly publications (e.g., IEEE Transactions).",
        verifiableProof: "Publisher PDF copies, digital object identifiers (DOIs), and Scopus index certifications.",
        exampleScenario: "A computer architect publishes a breakthrough low-power neuromorphic chip blueprint in ACM Transactions."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Peer-Reviewed Tier-1 Conference Proceedings",
        metricFocus: "Plenary research papers accepted under strict double-blind reviews at top computer conferences (NeurIPS, CVPR, SIGGRAPH).",
        verifiableProof: "Official conference papers, acceptance rates letters (<20%), and published scientific catalogs.",
        exampleScenario: "A machine learning researcher presents a novel convolutional pooling architecture at the main CVPR track."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Chapters in Higher-Education Science Handbooks",
        metricFocus: "Contributing specialized reference chapters in science books published by top teams (Springer, Elsevier).",
        verifiableProof: "Book index page layouts, ISBN catalog listings, and copies of your published chapter.",
        exampleScenario: "A nanotechnology postdoc writes the chapter on graphene electrode synthesis in an advanced battery handbook."
      },
      {
        id: 9,
        title: "[Academic - Persona B] High-Impact Clinical Trial Co-Authorship",
        metricFocus: "Co-author of clinical trials data and therapeutic studies published in prominent medical platforms (Lancet, NEJM).",
        verifiableProof: "Original trial publications, regional ethics approvals, and clinical trial registration notices.",
        exampleScenario: "A clinical researcher designs and publishes the statistical trial database for a modern oncology drug."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Commissioned Federal Science Reports",
        metricFocus: "A dense commissioned research report printed and indexed by government agencies (e.g., Department of Energy).",
        verifiableProof: "Official government science database directories, policy guidelines, and citations in public legislation.",
        exampleScenario: "An energy grid scientist authors a federal study measuring battery energy storage capacity on grid stability."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Identify how to package your system architecture or laboratory findings into formal, peer-reviewed scientific formats.",
        industryAction: "Isolate non-proprietary engineering solutions or migration systems and map them to trade publications.",
        academicAction: "Analyze current scientific drafts and align them with upcoming submission schedules of Q1 indexed journals.",
        impactMetrics: "Target: Design at least 2 comprehensive research manuscripts to submit for peer review.",
        verificationArtifacts: [
          "Document abstracts and layout draft plans",
          "Target lists of verified journals indexed in Web of Science / Scopus",
          "Company intellectual property department approvals for public export"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Submit drafts, address rigorous review comments, and drive papers to official publication and registration.",
        industryAction: "Submit engineering blueprints to conference trade tracks and secure your registration slot at the conference.",
        academicAction: "Submit research papers to high-impact journals, addressing all reviewer remarks during the first feedback loop.",
        impactMetrics: "Target: Gain at least 1 verified publication acceptance with a registered DOI number.",
        verificationArtifacts: [
          "Publisher notification responses listing your name as principal author",
          "Anonymized peer reviewer remark reports with your detailed replies",
          "Pre-print PDFs showing finalized DOI allocations from the registry"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Verify the academic and trade stature of your publications, and index them for the petition container.",
        industryAction: "Compile data proving the national trade stature and editorial board rigor of your trade magazines.",
        academicAction: "Assemble SJR and Web of Science data tables proving the elite impact metrics of your scholarly journals.",
        impactMetrics: "Provide proof that your articles are heavily referenced by independent scholars.",
        verificationArtifacts: [
          "Scimago journal ranking lists showing top-tier Q1 positions",
          "Printed conference programs and table of contents displaying your paper",
          "National Library catalog references confirming indexing"
        ]
      }
    }
  },
  {
    id: "high-salary",
    name: "High Salary / Remuneration",
    officialLegalName: "Evidence that you have commanded a high salary or other significantly high remuneration for services, in relation to others in the field.",
    shortDescription: "Earning a base salary, equity, bonuses, or stock compensation that puts you in the top 10% of earners in your country.",
    fullDescription: "The High Salary criterion is highly effective for industry leaders, software architects, and startup partners. You must prove that your overall financial compensation is significantly higher than that of your peers in the same geographic region and specific micro-specialty.",
    keyAjudicationTrend: "USCIS looks strictly at geographic and sector baselines. A salary of $180,000 might be average in San Francisco, but extraordinary in Ohio or India. You must use official, independent statistical salary indices (like the OES/SOC code from the Foreign Labor Certification Data Center, or Radford Surveys) to map your wage to the 90th percentile.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] 90th Percentile Base Wages",
        metricFocus: "Base annual salary exceeding the local OES Level 4 prevailing wage index for software engineers by 30%+.",
        verifiableProof: "Federal tax returns, certified W-2 logs, current wage stubs, and Department of Labor OES database prints.",
        exampleScenario: "An AI system engineer in Maryland earns $285,000 against the level-4 regional average of $165,000."
      },
      {
        id: 2,
        title: "[Industry - Persona A] High-Value Start-Up Equity Vesting",
        metricFocus: "Vesting startup equity allocations valued at $200,000+ per year based on verified 409A valuation audits.",
        verifiableProof: "Equity agreements, stock vesting dashboards, and official 409A business valuations.",
        exampleScenario: "A key early software hire at a fintech startup vests stock worth $250,000 annually."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Core Performance Cash Bonuses",
        metricFocus: "Annual performance cash bonuses exceeding $100,000 based on core architecture deliverable success.",
        verifiableProof: "Tax statements, certified HR bonus schedules, and regional comparative bonus datasets.",
        exampleScenario: "A algorithmic developer receives a $150,000 cash bonus after design optimization spikes transactions."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Upfront Cash Signing Awards",
        metricFocus: "One-time signing cash bonuses exceeding average local software salaries by 50%+.",
        verifiableProof: "Signed employment offer documents, payroll transaction audits, and executive recruitment logs.",
        exampleScenario: "A systems director receives a $120,000 cash signing award to relocate to a new firm."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Elite Independent Consulting Contracts",
        metricFocus: "Consulting fees exceeding $350+/hour with multiple global tech clients.",
        verifiableProof: "Signed commercial consulting agreements, client invoice schedules, and professional tax receipts.",
        exampleScenario: "A storage architect commands custom consulting fees to design edge-infrastructure servers for key firms."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Premium Research Grant-Backed Salaries",
        metricFocus: "Research salary exceeding 95% of standard university postdoc wages financed by science grants.",
        verifiableProof: "National science grant budget allocation sheets, university payroll receipts, and regional postdoctoral surveys.",
        exampleScenario: "A chemistry postdoc is paid a premium stipend because of custom computer model experience."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Commercial Scientific Consulting Advisory Contracts",
        metricFocus: "Advisory fees exceeding $400/hour for consulting biotech or pharmaceutical corporations.",
        verifiableProof: "Consulting contract files, corporate receipts, and bank deposit transcripts.",
        exampleScenario: "An associate microbiology professor provides specialized advisory services to a vaccine company."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Royalties on Scientific Textbook Publications",
        metricFocus: "Receiving $75,000+ annually in textbook and intellectual property royalty distributions.",
        verifiableProof: "Publisher royalty contract audits, sales records, and federal tax forms.",
        exampleScenario: "A hardware engineering scholar receives licensing royalties for their widely used compiler textbook."
      },
      {
        id: 9,
        title: "[Academic - Persona B] University Patent Technology Licensing Payouts",
        metricFocus: "$120,000+ in scientific patent licensing payouts through university technology offices.",
        verifiableProof: "Technology transfer office royalty summaries, patent licensing registers, and bank logs.",
        exampleScenario: "A biochemical researcher receives licensing payouts from a medical company licensing her vaccine model."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Endowed Chair Academic Salaries",
        metricFocus: "University salary placing you in the top 5% of global academic earners based on AAUP indices.",
        verifiableProof: "University budget registers, AAUP comparative salary percentiles reports, and official pay checks.",
        exampleScenario: "A computer science scholar receives an endowed chair position offering a $260,000 salary."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Compare your total compensation (base, bonus, equity) with credible governmental or private compensation data.",
        industryAction: "Gather W-2 forms and wage statements. Look up your Job Title and County in the Foreign Labor Certification (FLC) database.",
        academicAction: "Compare your academic grant salary against standard national postdoctoral schedules listed by AAUP.",
        impactMetrics: "Target: Verify that your total compensation is placed in the top 10% of local earners.",
        verificationArtifacts: [
          "Prevailing wage reports from the DOL FLC database",
          "Radford or Robert Half technology compensation guides",
          "W-2 or 1045 tax return filing documents from past years"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Secure detailed formal declarations from human resources or legal auditors detailing compensation elements.",
        industryAction: "Ask human resources to issue custom salary verification letters detailing cash bonuses and vesting timelines.",
        academicAction: "Retrieve university payroll records and grant allocation tables proving your custom stipend level.",
        impactMetrics: "Target: Document all forms of compensation to prove high financial remuneration.",
        verificationArtifacts: [
          "Human resources verification letters written on corporate letterheads",
          "Brokerage accounts vest records detailing equity distributions",
          "Government statistical databases highlighting regional wage distributions"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Create an executive comparative compensation matrix showing you are placed in the top-tier of earners.",
        industryAction: "Draft a clear visual grid comparing your compensation to the OES Level 4 prevailing wage index.",
        academicAction: "Construct comparative tables showing your stipend tier vs typical postdoctoral ranges in your state.",
        impactMetrics: "Establish that your exceptional compensation reflects your standing in the top of your field.",
        verificationArtifacts: [
          "Corporate compensation matrix spreadsheets and diagrams",
          "Expert accountant review opinions verifying startup option value",
          "Prevailing wage evaluation summaries mapping elements to USCIS criteria"
        ]
      }
    }
  },
  {
    id: "awards",
    name: "Nationally or Internationally Recognized Awards",
    officialLegalName: "Evidence of your receipt of lesser nationally or internationally recognized prizes or awards for excellence in the field.",
    shortDescription: "Securing prestigious innovation prizes, venture grants, national research awards, or competitive engineering medals.",
    fullDescription: "To satisfy the Awards criterion, you do not need a Nobel Prize, but the awards you received must be recognized at a national or international level. Local corporate awards (such as 'Employee of the Month' or 'Most Valuable Player' in a single business unit) are not acceptable. The award must have been given for stellar excellence, have public news coverage, and involve a rigorous, selective process.",
    keyAjudicationTrend: "USCIS requires documentation demonstrating the award criteria, the geographic scope of the contest, and background information about previous winners to show the selective nature of the award.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Global Hackathon Championships",
        metricFocus: "First-place or grand-prix finishes in web engineering tournaments with 10,000+ developers (e.g., ETHGlobal).",
        verifiableProof: "Printed winning certificates, official event press reviews, and leaderboards on the event website.",
        exampleScenario: "A developer team wins top prize at ETHGlobal for building an automated protocol analyzer."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Elite Startup Accelerator Cohort Acceptance",
        metricFocus: "Securing investment from elite start-up groups with selective acceptance thresholds (<1.5% like Y Combinator).",
        verifiableProof: "Signed investment option agreements, cohort press releases, and accelerator program guidelines.",
        exampleScenario: "An engineering founder gets accepted into Y Combinator, receiving startup grant funding."
      },
      {
        id: 3,
        title: "[Industry - Persona A] National Innovation Prizes",
        metricFocus: "Grand prize selection at nationwide industrial technology contests.",
        verifiableProof: "Award medals, national press coverage of winners, and judging criteria documentation.",
        exampleScenario: "A hardware engineer wins the national micro-electronics medal for system miniaturization."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Young Tech Leader Recognitions",
        metricFocus: "Acceptance into highly selective youth leadership registers (e.g., Forbes 30 Under 30).",
        verifiableProof: "Profile pages on official publisher sites, selection press announcements, and statistics on total pool of applicants.",
        exampleScenario: "An AI manager is named to the MIT Technology Review Innovators Under 35 list."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Professional Guild Merit Awards",
        metricFocus: "Annual performance or design prizes issued by respected technical societies.",
        verifiableProof: "Awards certificates, societal newsletters, and guidelines detailing selection criteria.",
        exampleScenario: "A designer receives the annual UX excellence award from the Interaction Design Association."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Professional Scientific Academy Fellowships",
        metricFocus: "National fellowship awards representing elite scientific research proposals (e.g., Fullbright, NAE).",
        verifiableProof: "Fellowship appointment letters, foundation press releases, and bylaws outlining requirements.",
        exampleScenario: "A materials scholar is awarded the Fullbright Fellowship to study organic solar structures."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Distinguished National Dissertation Prizes",
        metricFocus: "Selected for best PhD thesis awards across national computer science networks.",
        verifiableProof: "Evaluation letters from the committee, awards brochures, and university announcement posts.",
        exampleScenario: "A molecular scholar wins the best doctoral thesis award from a national biology consortium."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Competitive Federal Science Agency Grant Awards",
        metricFocus: "Direct competitive grants representing elite academic ideas (e.g., NSF CAREER, NIH Director's Award).",
        verifiableProof: "Agency funding declarations, award certificate copies, and roster summaries.",
        exampleScenario: "An assistant professor is awarded the NSF CAREER award to study micro-grid algorithms."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Outstanding Scientific Society Merits",
        metricFocus: "Annual research medals issued by high-tier international academies (e.g., Royal Society of Chemistry).",
        verifiableProof: "Society medal certificates, press reports of the award ceremony, and select criteria guidelines.",
        exampleScenario: "A biochemistry scientist is awarded the outstanding young researcher medal by the chemical society."
      },
      {
        id: 10,
        title: "[Academic - Persona B] State Tech Innovation Medals",
        metricFocus: "State governor's scientific medal representing breakthrough research on public health.",
        verifiableProof: "Governor decrees, ceremony program listings, and regional news articles about reception.",
        exampleScenario: "An informatics PhD receives the Governor's Health-Tech medal for a digital triage system."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Assess all candidate awards and separate local, company-level trophies from national, peer-reviewed honors.",
        industryAction: "Make lists of all competitive hackathons, industrial VC prizes, or innovation medals you received. Filter out internal employer-only recognition.",
        academicAction: "Isolate outstanding thesis awards, societal competitive grants, or national scholarly fellowships.",
        impactMetrics: "Target: Create a plan to map past achievements to national frameworks with 1,000+ competitors.",
        verificationArtifacts: [
          "Original awards certificates and congratulations letters",
          "Contest documentation detailing the historical pool of applicants",
          "Media releases from major outlets mentioning previous contest winners"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Collect high-quality background documentation from the award issuers detailing the strict selection criteria.",
        industryAction: "Email contest coordinators requesting data on total participants, previous notable winners, and selection guidelines.",
        academicAction: "Extract official university or organization bylaws detailing the selection committee's strict grading requirements.",
        impactMetrics: "Target: Document that the winning rate of each award is less than 5% nationwide.",
        verificationArtifacts: [
          "Official competition rulebooks and judging sheets",
          "Verification emails from organizers detailing participant numbers",
          "Past winner registries demonstrating the elite caliber of the winners"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Translate all certifications and awards into a highly structured, adjudicator-ready portfolio.",
        industryAction: "Secure audited records of the venture funds or tech publishers that sponsored the contests to verify their stature.",
        academicAction: "Translate all foreign-language awards diplomas and back them up with certified translation affidavits.",
        impactMetrics: "Establish that you were chosen strictly due to your exceptional ability compared to a high-volume national pool.",
        verificationArtifacts: [
          "Certified translations of all international diplomas and medals",
          "Audit files demonstrating the national stature of the issuing organizations",
          "Visual charts mapping the selection process steps to USCIS requirements"
        ]
      }
    }
  },
  {
    id: "membership",
    name: "Elite Professional Associations",
    officialLegalName: "Evidence of your membership in associations in the field which require outstanding achievements of their members, as judged by recognized experts.",
    shortDescription: "Belonging to selective professional bodies, advisory boards, or invite-only industry guilds reflecting peer-recognition.",
    fullDescription: "To satisfy the Memberships criterion, you must belong to associations which are highly selective and require 'outstanding achievements' as a condition of entry. Standard professional groups that only require a fee to join (such as standard memberships in IEEE, ACM, or general designer registers) are not acceptable. The group must screen members through an expert jury review.",
    keyAjudicationTrend: "USCIS looks strictly at the organization's written bylaws and membership criteria. You must produce the official rulebook showing that members must be nominated, vetted by experts, and admitted based on outstanding professional achievements.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] IEEE Senior Membership",
        metricFocus: "Requires 10+ years of professional practice, and nomination by 3 existing Senior/Fellow members.",
        verifiableProof: "Official senior membership certificate, nomination letters, and admission criteria from the IEEE bylaws.",
        exampleScenario: "A senior systems manager is promoted to IEEE Senior Member after submitting extensive technical credits."
      },
      {
        id: 2,
        title: "[Industry - Persona A] ACM Senior Membership",
        metricFocus: "Requires 10 years of experience, outstanding achievements, and vetting by the ACM selection board.",
        verifiableProof: "ACM profile details, ACM acceptance emails, and published bylaws showing vetting protocols.",
        exampleScenario: "An algorithm designer is admitted to ACM Senior membership after peer nomination."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Forbes Technology Council",
        metricFocus: "Vetted and approved based on corporate metrics ($1M+ revenue) and leadership criteria by the Forbes panel.",
        verifiableProof: "Council invitation letters, published articles on the portal, and bylaws detailing the council's criteria.",
        exampleScenario: "A CTO is admitted to the Forbes Technology Council, demonstrating strong business impact."
      },
      {
        id: 4,
        title: "[Industry - Persona A] British Computer Society (BCS) Fellowships",
        metricFocus: "Requires proving a long history of leadership and significant contributions to computer design.",
        verifiableProof: "BCS Fellow certificate, letters from recommenders, and official BCS selection bylaws.",
        exampleScenario: "A cybersecurity architect with 15 years of industry leadership is elected Fellow of the BCS."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Elite Startup Founder Guilds",
        metricFocus: "Invite-only entrepreneur boards restricted to founders with $10M+ in funding (e.g., YC founder circles).",
        verifiableProof: "Guild bylaws, invitation emails, and verification of startup valuation criteria.",
        exampleScenario: "A SaaS entrepreneur is admitted to an exclusive tech founder consortium."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Sigma Xi Full Memberships",
        metricFocus: "Requires election by two current members for excellent scientific research.",
        verifiableProof: "Sigma Xi certificate, nominating document files, and guidelines detailing research eligibility requirements.",
        exampleScenario: "A biomedical scientist is elected as a full member of the Sigma Xi scientific research society."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Royal Society of Chemistry Fellowships",
        metricFocus: "Requires proving a major history of scientific discoveries in chemical sciences.",
        verifiableProof: "Society Fellow certificate, nomination drafts, and selection guidelines.",
        exampleScenario: "A biochemistry scholar is elected Fellow of the Chemical Society."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Institution of Engineering & Technology (IET) Fellowships",
        metricFocus: "Requires proven record of leadership and significant contributions to engineering practice.",
        verifiableProof: "Fellow certificate, recommendation letters, and bylaws detailing the strict criteria.",
        exampleScenario: "A physics researcher is elected IET Fellow after a dense audit of their technical achievements."
      },
      {
        id: 9,
        title: "[Academic - Persona B] ACM Fellowships",
        metricFocus: "Elite grade restricted to top 1% of ACM members, representing major contributions to computing.",
        verifiableProof: "ACM Fellow certificate, official citation lists, and press releases naming annual inductees.",
        exampleScenario: "A systems scholar is elected ACM Fellow for transformative open database systems."
      },
      {
        id: 10,
        title: "[Academic - Persona B] National Academies of Sciences Panels",
        metricFocus: "Highly selective expert nomination to national advisory councils.",
        verifiableProof: "Academy invitation records, roster pages on the academy site, and bylaws detailing outstanding achievement.",
        exampleScenario: "A pharmacology scientist is nominated to serve on the chemical science panel of the national academy."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Analyze your professional experience duration and identity selective invite-only committees in your field.",
        industryAction: "Verify your years of engineering tenure. If you have 10+ years, map out the nomination requirements for IEEE/ACM senior tiers.",
        academicAction: "Check if your scientific publications qualify you for nomination to Sigma Xi or Fellow grades in academic guilds.",
        impactMetrics: "Target: Select at least 2 associations requiring peer vetting for membership.",
        verificationArtifacts: [
          "Bylaws of target guilds showing entry credentials and rules",
          "Official vetting checklists of candidate background requirements",
          "Registries of current members to show the prestigious profile of the group"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Request endorsement from current senior members and submit your full dossier to the selection boards.",
        industryAction: "Develope your technical project timeline and reach out to Senior Members on LinkedIn to ask for formal nominations.",
        academicAction: "Ask your laboratory mentors to sponsor your election, writing down your original science discoveries in the nomination sheet.",
        impactMetrics: "Target: Complete and submit your dossier to the vetting boards.",
        verificationArtifacts: [
          "Submitted applications and candidate profiles",
          "Verification emails from the organization's registrars",
          "Official bylaws proving that entry based on membership fees alone is strictly prohibited"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Retrieve and combine your membership records with the organization's written bylaws to build a solid case.",
        industryAction: "Download and highlight the association's bylaws proving that applicants must be reviewed by recognized experts.",
        academicAction: "Extract membership registries and include press coverage of the society to showcase its distinguished national standing.",
        impactMetrics: "Document that only highly qualified professionals with outstanding achievements are admitted.",
        verificationArtifacts: [
          "Official signed memberships certificates and cards",
          "Highlighted sections of the group's charter and bylaws",
          "Adjudicator-friendly summaries showing how admission requirements meet USCIS guidelines"
        ]
      }
    }
  },
  {
    id: "exhibitions",
    name: "Display of Artistic or Tech Work in Showcase",
    officialLegalName: "Evidence of the display of your work in the field at artistic exhibitions or showcases.",
    shortDescription: "Presenting proprietary technical work, major system mockups, or patents at global tradeshows, summits, or key exhibitions.",
    fullDescription: "The Display/Showcase criterion is traditionally used for fine artists. However, in modern technology and research fields, it can be satisfied by showcasing your core engineering products, system designs, or software prototypes at premier international summits, trade shows, or technology showcases.",
    keyAjudicationTrend: "USCIS scrutinizes if your individual work was prominently displayed, or if you were simply an attendee at a major booth. You must show that your specific system was selected for active display, and that the showcase had a distinguished audience of industry leaders.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] Consumer Electronics Show (CES) Showcases",
        metricFocus: "Exhibiting custom engineering or hardware at CES attracting 50,000+ national visitors.",
        verifiableProof: "Official booth layouts, directory listings detailing your design contributions, and high-res photos.",
        exampleScenario: "A hardware coordinator displays their mobile battery regulator prototype on the main CES exhibition floor."
      },
      {
        id: 2,
        title: "[Industry - Persona A] Black Hat Arsenal Demonstrations",
        metricFocus: "Gaining selection for the Black Hat Arsenal track to demonstrate outstanding open-source security modules.",
        verifiableProof: "Black Hat Arsenal directories, schedule notices, and photos of you running the demo booth.",
        exampleScenario: "A security analyst demonstrates their custom payload scanner at the Black Hat Arsenal exhibit."
      },
      {
        id: 3,
        title: "[Industry - Persona A] Venture Pitch Day Live Prototype Exhibits",
        metricFocus: "Featured presenter running live robot or systems demos for 500+ venture capital partners.",
        verifiableProof: "Pitch video transcripts, demo day schedules, slide decks, and VC query metrics.",
        exampleScenario: "A robotics engineer runs a live computer-vision parcel sorting system demo at a major YC showcase."
      },
      {
        id: 4,
        title: "[Industry - Persona A] Prominent Industrial Expo Project Booths",
        metricFocus: "Presenting system designs at nationwide automotive or IoT expos (e.g., SEMA, Embedded World).",
        verifiableProof: "Exhibitor floor outlines, trade programs, and confirmation letters from expo managers.",
        exampleScenario: "An automotive developer displays a custom telemetry system at are SEMA's electronics section."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Open Source Summit Project Demonstrations",
        metricFocus: "Selected by the Linux Foundation to present a package at the central conference demo tracks.",
        verifiableProof: "Foundation directories, project maps, and official registration letters from coordination directors.",
        exampleScenario: "A software creator demonstrates their Rust-based web security layer at KubeCon's gallery."
      },
      {
        id: 6,
        title: "[Academic - Persona B] IEEE Conference Interactive Showcases",
        metricFocus: "Selected for interactive demonstration tracks at Tier-1 computer meetings (e.g., CHI, SIGGRAPH).",
        verifiableProof: "Conference programs, demo session rosters, published abstracts, and expert feedback records.",
        exampleScenario: "A computer science researcher displays her virtual-reality gloves at the SIGGRAPH emerging tech pavilion."
      },
      {
        id: 7,
        title: "[Academic - Persona B] National Research Exhibition Poster Boards",
        metricFocus: "Poster display selected for competitive exhibition tracks at national scientific academies.",
        verifiableProof: "Academic proceedings, photos of the poster boards, and invitation notices.",
        exampleScenario: "A physics researcher exhibits her laser-plasma prototype at the American Physical Society assembly."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Global Medical Convention Device Exhibits",
        metricFocus: "Interactive medical device demo selected for display at the annual BIO International convention.",
        verifiableProof: "Convention directory indices, photos of the medical device layout, and trade news logs.",
        exampleScenario: "A healthcare coder displays their automated cardiac sensor system at the convention gallery."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Federal Patent Office Showcases",
        metricFocus: "Invited to exhibit patented hardware at federal showcases hosted by USPTO or national agencies.",
        verifiableProof: "Government invitation letters, exhibition catalogs, and government media briefs.",
        exampleScenario: "A solar tech scholar is invited by the green tech energy office to showcase her solar converter model."
      },
      {
        id: 10,
        title: "[Academic - Persona B] International Robotics Summit Finals",
        metricFocus: "Displaying working autonomous systems at international robotics meets with 40+ countries.",
        verifiableProof: "Fairs design boards, printed brochures showing teams, and roster registries.",
        exampleScenario: "A drone software creator exhibits his flight stabilizer program at the international robotics expo."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Analyze your existing prototypes or system designs and identify selective expo tracks in your industry.",
        industryAction: "Verify which of your working software tools or designs can be showcased inside dedicated expo galleries.",
        academicAction: "Select your newest prototype or physical experiment that has a visual aspect suitable for conference showcases.",
        impactMetrics: "Target: Gain at least 1 formal invitation to present your designs in an interactive showcase track.",
        verificationArtifacts: [
          "Conference submission schedules for interactive design tracks",
          "Outreach letters drafted to company expo coordinators",
          "Technical drawings or photos of your visual prototype assets"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Submit materials, obtain official selections from the committees, and run the physical or digital booths.",
        industryAction: "Submit applications to Black Hat Arsenal or startup directories. Capture detailed photos of your booth setup.",
        academicAction: "Submit demo abstracts to IEEE/ACM conferences. Capture video clips of experts reviewing your software.",
        impactMetrics: "Target: Demonstrate and show your technology directly to 500+ trade experts at the event.",
        verificationArtifacts: [
          "Official acceptance letters confirming your project's selection",
          "High-resolution photos of you demonstrating your designs",
          "Event brochures showing your project and company on the roster"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Assemble surrounding evidence showcasing the national scale and select audience of the trade show.",
        industryAction: "Compile reports detailing total visitor numbers, sponsor lists, and trade articles covering the expo.",
        academicAction: "Retrieve conference registration statistics and proceedings index data from IEEE/ACM to verify its rank.",
        impactMetrics: "Establish that your work was curated and showcased strictly due to its exceptional value.",
        verificationArtifacts: [
          "Exhibition host certificates or letters verifying your active role",
          "Audited reports showcasing the massive reach of the trade show",
          "A description of the selective process used by organizers to screen exhibitors"
        ]
      }
    }
  },
  {
    id: "commercial-success",
    name: "Commercial Successes",
    officialLegalName: "Evidence of commercial successes in the performing arts, as shown by box office receipts or record, cassette, compact disk, or video sales.",
    shortDescription: "Proving high commercial volume, platform monetization, software sales, app downloads, or licensing fees directly generated by your systems.",
    fullDescription: "While written with the performing arts in mind, the Commercial Successes criterion is frequently and successfully adapted for software developers, product managers, and founders. You must show that products you designed or systems you built have had major commercial success, proven by high sales figures, app store revenues, download counts, or active business-to-business licensing fees.",
    keyAjudicationTrend: "USCIS looks for a direct connection between your specific technical contributions and the commercial success. General company revenue is not enough; you must prove your code, architecture, or product strategy was the primary engine behind the high monetary volume.",
    top10Strategies: [
      {
        id: 1,
        title: "[Industry - Persona A] High App Store Revenues",
        metricFocus: "$500,000+ generated in direct subscription or purchase revenue from an app you singlehandedly coded.",
        verifiableProof: "Apple/Google developer dashboard financial printouts, bank wire sheets, and app analytics logs.",
        exampleScenario: "A mobile developer builds a custom photo editor that achieves top 50 rank in utilities and high recurring revenue."
      },
      {
        id: 2,
        title: "[Industry - Persona A] B2B Software Licensing Success",
        metricFocus: "$2M+ in executed contracts directly licensing your proprietary system design.",
        verifiableProof: "Redacted business contracts, wire transfers, corporate financial invoices, and founder testimonials.",
        exampleScenario: "A machine learning CTO constructs a specialized text-mining engine that is licensed to multiple giant insurance networks."
      },
      {
        id: 3,
        title: "[Industry - Persona A] SaaS Platform Monetization",
        metricFocus: "SaaS platform grew from $0 to $1M in Annual Recurring Revenue (ARR) under your technology leadership.",
        verifiableProof: "Stripe transaction charts, certified audited financial reviews, and letters from the CFO.",
        exampleScenario: "A lead systems architect scales database clustering for a project management tool, enabling massive sales volume."
      },
      {
        id: 4,
        title: "[Industry - Persona A] High-Volume App Downloads",
        metricFocus: "10M+ downloads worldwide with top rankings in official mobile markets.",
        verifiableProof: "App store download reports, analytics charts (e.g., AppAnnie), and major trade press highlights.",
        exampleScenario: "A senior developer acts as creator of a custom navigation widget that achieves massive viral distribution on Android."
      },
      {
        id: 5,
        title: "[Industry - Persona A] Cloud Service Cost Optimizations",
        metricFocus: "Saved company $1.2M in annual cloud hosting fees while hosting the same user base.",
        verifiableProof: "AWS/Azure cost Explorer dashboard printouts, internal finance spreadsheets, and CTO affidavits.",
        exampleScenario: "A principal infrastructure lead migrates clusters to severless architecture, causing overhead to plummet."
      },
      {
        id: 6,
        title: "[Academic - Persona B] Commercial University Patent Licensing",
        metricFocus: "$1.5M+ in licensing fees generated from patent distributions to international medical suppliers.",
        verifiableProof: "University Technology Transfer office contracts, printed royalty statements, and wire records.",
        exampleScenario: "A biochemical researcher licenses her hormone synthesis pathway to a major oncology firm."
      },
      {
        id: 7,
        title: "[Academic - Persona B] Scientific Software Toolkit Subscriptions",
        metricFocus: "$300,000+ in annual commercial license fees for your custom modeling research library.",
        verifiableProof: "Subscriber transaction records, licensed commercial invoices, and project accounting logs.",
        exampleScenario: "An engineering academic develops a custom fluid-dynamics simulation toolbox licensed by rocket firms."
      },
      {
        id: 8,
        title: "[Academic - Persona B] Federal Small Business Innovation (SBIR) Grants",
        metricFocus: "Securing $1.5M+ in SBIR Phase II commercialization grants based on laboratory feasibility tests.",
        verifiableProof: "Government funding contract documents, commercialization milestones plans, and agency signoff files.",
        exampleScenario: "A material scientist secures SBIR funding from DoD to scale his graphene electrode manufacturing system."
      },
      {
        id: 9,
        title: "[Academic - Persona B] Lab Diagnosis Tool Commercial Sales",
        metricFocus: "$400,000+ in direct sales of physical scientific sensors or lab equipment to global academies.",
        verifiableProof: "Corporate accounting sheets, sales records ledger logs, and client university purchase invoices.",
        exampleScenario: "A geophysics professor designs and sells custom laser seismometers to 20+ research universities."
      },
      {
        id: 10,
        title: "[Academic - Persona B] Medical Diagnostic Software Licensing",
        metricFocus: "$1M+ generated in licensing fees from hospital chains adopting your diagnostic imaging algorithms.",
        verifiableProof: "Executed software licenses, clinical hospital group sales summaries, and CFO affidavits.",
        exampleScenario: "An informatics group licenses an AI brain-scan diagnostic tool to a national clinic network."
      }
    ],
    phases: {
      phase1: {
        title: "Phase 1: Gap Analysis & Baseline",
        description: "Analyze the financial and user metrics of products, components, or services that you personally designed.",
        industryAction: "Audit your system's commercial footprint: total ARR, total downloads, total active contracts, or total cost savings you unlocked.",
        academicAction: "Extract licensing revenue or patent royalties generated by your university technology transfer office for your inventions.",
        impactMetrics: "Target: Document at least $250,000 in direct revenue, cost savings, or 500,000 active users.",
        verificationArtifacts: [
          "Financial spreadsheets or product ledger reports",
          "App Store developer console payouts and user active charts",
          "Internal system cost audits verified by accounting departments"
        ]
      },
      phase2: {
        title: "Phase 2: Execution & Networking",
        description: "Gather official financial verification documents to clearly support the core product's commercial footprint.",
        industryAction: "Secure formal letters from the CFO or VP of Product connecting your specific engineering work with the resulting rise in company sales.",
        academicAction: "Obtain formal patent transfer sheets and licensing royalty ledgers from the university board showing solid monetary returns.",
        impactMetrics: "Verify that all data highlights an undeniable commercial success that beats industry standards.",
        verificationArtifacts: [
          "Executed, signed business-to-business contracts and client licensing terms",
          "Audited tax logs and certified company revenue summaries",
          "Product dashboard screen prints showing user retention and subscription levels"
        ]
      },
      phase3: {
        title: "Phase 3: Curation & Independent Proof",
        description: "Create a visual business review document explaining how you made the commercial success happen.",
        industryAction: "Translate raw code achievements into corporate financial impact sheets. Explain why these metrics exceed peer standard outputs.",
        academicAction: "Map out patent commercialization schedules and compare the licensed royalties to peer lab averages.",
        impactMetrics: "The compiled packet must unequivocally prove that your personal work drove massive commercial returns.",
        verificationArtifacts: [
          "High-impact financial presentation charts",
          "Affidavits from the CEO and CFO testifying to your critical code contribution",
          "Industry standard research sheets and market charts proving the elite scale of success"
        ]
      }
    }
  }
];
