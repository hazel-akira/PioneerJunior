import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { STRANDS } from "./Strands";
 
function IconChevron({ open }: { open: boolean }) {
  return (
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-flex items-center"
    >
      <ChevronDown size={16} />
    </motion.span>
  );
}
 
// Data types for strands and sub-strands
type SubStrand = {
  id: string;
  title: string;
  specificOutcomes: string[];
  suggestedExperiences: string[];
  keyQuestions: string[];
  competencies: string[];
  values: string[];
  pcis?: string[];
};

type Strand = {
  id: string;
  title: string;
  subtitle: string;
  subStrands: SubStrand[];
};

type SelectedContent =
  | { type: 'strand'; content: Strand }
  | { type: 'substrand'; content: SubStrand; parentStrand: Strand };

interface MathSubstrandProps {
  onBack?: () => void;
}
 
const MathSubstrand: React.FC<MathSubstrandProps> = ({ onBack }) => {
  const [query, setQuery] = useState("");
  const [activeStrand, setActiveStrand] = useState<string | null>(null);
  const [activeSubStrand, setActiveSubStrand] = useState<string | null>(null);
  const [expandedStrands, setExpandedStrands] = useState<string[]>([]);
 
  const toggleStrandExpansion = (strandId: string) => {
    setExpandedStrands(prev =>
      prev.includes(strandId)
        ? prev.filter(id => id !== strandId)
        : [...prev, strandId]
    );
  };
 
  const selectStrand = (strandId: string) => {
    setActiveStrand(strandId);
    setActiveSubStrand(null);
    // Auto-expand the strand when selected
    if (!expandedStrands.includes(strandId)) {
      setExpandedStrands(prev => [...prev, strandId]);
    }
  };
 
  const selectSubStrand = (subStrandId: string) => {
    setActiveSubStrand(subStrandId);
    setActiveStrand(null);
  };
 
  const baseStrands = STRANDS as unknown as Strand[];
  const filteredStrands: Strand[] = baseStrands.map((strand) => ({
    ...strand,
    subStrands: strand.subStrands.filter((ss) => {
      const q = query.toLowerCase();
      return (
        strand.title.toLowerCase().includes(q) ||
        ss.title.toLowerCase().includes(q) ||
        ss.specificOutcomes.join(" ").toLowerCase().includes(q) ||
        ss.suggestedExperiences.join(" ").toLowerCase().includes(q)
      );
    }),
  })).filter(
    (s) =>
      s.subStrands.length > 0 ||
      s.title.toLowerCase().includes(query.toLowerCase())
  );
 
  // Get content to display on the right
  const getSelectedContent = (): SelectedContent | null => {
    if (activeSubStrand) {
      // Find the sub-strand
      for (const strand of filteredStrands) {
        const subStrand = strand.subStrands.find(ss => ss.id === activeSubStrand);
        if (subStrand) {
          return { type: 'substrand' as const, content: subStrand, parentStrand: strand };
        }
      }
    } else if (activeStrand) {
      // Find the strand
      const strand = filteredStrands.find(s => s.id === activeStrand);
      if (strand) {
        return { type: 'strand' as const, content: strand };
      }
    }
    return null;
  };
 
  const selectedContent = getSelectedContent();
 
  return (
    <div className="min-h-screen bg-slate-200">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/maths.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
       
        {/* Back Button - positioned over the hero image */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 z-20 bg-[#f4a024] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded font-serif transition-colors duration-300 shadow-lg"
          >
            Back to Subjects
          </button>
        )}
       
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">
            Mathematics
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Exploring the language of the universe
          </p>
        </div>
      </section>
 
      {/* Main Content */}
      <div className="p-6 md:p-12 font-serif">
        <div className="max-w-8xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                Sub-strands
              </h2>
              <p className="mt-2 text-slate-600">
                Interactive list of strands and sub-strands from the Senior School
                Mathematics curriculum.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/*download pdf */}
            </div>
          </header>
 
          <div className="mb-6">
            <input
              placeholder="Search strands, sub-strands or outcomes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-2/3 p-3 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
 
          {/* Vertical Tabs Layout */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex min-h-[700px]">
              {/* Left Sidebar - Strands List */}
              <div className="w-1/3 border-r border-slate-200 bg-slate-50">
                <div className="p-4 border-b border-slate-200 bg-slate-100">
                  <h3 className="font-semibold md:text-xl text-md text-slate-900">Mathematics Strands</h3>
                  <p className="text-sm text-slate-600 mt-1">Select a strand or sub-strand to view details</p>
                </div>
                <div className="overflow-y-auto max-h-[650px]">
                  {filteredStrands.map((strand) => (
                    <div key={strand.id} className="border-b border-slate-100 last:border-b-0">
                      {/* Strand Button */}
                      <div className="flex">
                        <button
                          onClick={() => selectStrand(strand.id)}
                          className={`flex-1 text-left p-4 hover:bg-slate-100 transition-colors ${
                            activeStrand === strand.id ? 'bg-slate-200 border-r-2 border-blue-200' : ''
                          }`}
                        >
                          <div className="font-medium text-slate-900 leading-snug">{strand.title}</div>
                          <div className="text-sm text-slate-500 mt-1 leading-tight">{strand.subtitle}</div>
                          <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                            <span className="bg-slate-200 px-2 py-0.5 rounded-full">
                              {strand.subStrands.length} sub-strands
                            </span>
                          </div>
                        </button>
                        <button
                          onClick={() => toggleStrandExpansion(strand.id)}
                          className="p-4 hover:bg-slate-100 border-l border-slate-200 transition-colors"
                          title={expandedStrands.includes(strand.id) ? "Collapse sub-strands" : "Expand sub-strands"}
                        >
                          <IconChevron open={expandedStrands.includes(strand.id)} />
                        </button>
                      </div>
                     
                      {/* Sub-strands */}
                      <AnimatePresence>
                        {expandedStrands.includes(strand.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="bg-white"
                          >
                            {strand.subStrands.map((subStrand, index) => (
                              <button
                                key={subStrand.id}
                                onClick={() => selectSubStrand(subStrand.id)}
                                className={`w-full text-left p-3 pl-8 hover:bg-slate-50 transition-colors ${
                                  index !== strand.subStrands.length - 1 ? 'border-b border-slate-50' : ''
                                } ${
                                  activeSubStrand === subStrand.id ? 'bg-slate-200 border-r-2 border-blue-200' : ''
                                }`}
                              >
                                <div className=" text-slate-800 text-sm leading-snug">{subStrand.title}</div>
                                <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-tight">
                                  {subStrand.keyQuestions?.[0] || 'Click to view learning outcomes and experiences'}
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
 
                {filteredStrands.length === 0 && (
                  <div className="p-8 text-center text-slate-500">
                    <div className="text-sm">No results found</div>
                    <div className="text-xs mt-1">Try a different search term</div>
                  </div>
                )}
              </div>
 
              {/* Right Content Area */}
              <div className="flex-1 overflow-y-auto max-h-[700px]">
                {selectedContent ? (
                  <motion.div
                    key={selectedContent.type === 'substrand' ? selectedContent.content.id : selectedContent.content.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    {selectedContent.type === 'strand' ? (
                      // Strand Overview
                      <div>
                        <div className="mb-6">
                          <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                            {selectedContent.content.title}
                          </h3>
                          <p className="text-slate-600 text-lg">{selectedContent.content.subtitle}</p>
                        </div>
                       
                        <div className="space-y-6">
                          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                            <h4 className="text-lg font-semibold text-blue-900 mb-2">Overview</h4>
                            <p className="text-blue-800">
                              This strand contains {selectedContent.content.subStrands.length} sub-strands covering essential topics in mathematics.
                              Click on any sub-strand below or from the left panel to explore specific learning outcomes,
                              suggested experiences, and competencies.
                            </p>
                          </div>
                         
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800 mb-4">Sub-strands in this strand</h4>
                            <div className="grid gap-3">
                              {selectedContent.content.subStrands.map((subStrand) => (
                                <div
                                  key={subStrand.id}
                                  className="bg-slate-50 rounded-lg p-4 cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200 hover:border-slate-300"
                                  onClick={() => selectSubStrand(subStrand.id)}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-medium text-slate-900 mb-1">{subStrand.title}</h5>
                                      <p className="text-sm text-slate-600 mb-2">
                                        {subStrand.keyQuestions?.[0] || 'Click to view details'}
                                      </p>
                                      <div className="flex items-center text-xs text-slate-500">
                                        <span className="bg-slate-200 px-2 py-0.5 rounded-full mr-2">
                                          {subStrand.specificOutcomes.length} outcomes
                                        </span>
                                        <span className="bg-slate-200 px-2 py-0.5 rounded-full">
                                          {subStrand.competencies.length} competencies
                                        </span>
                                      </div>
                                    </div>
                                    <ChevronRight size={16} className="text-blue-600 mt-1" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Sub-strand Details
                      <div>
                        <div className="mb-6">
                          <div className="text-sm text-slate-900 mb-1 flex items-center gap-2">
                            <span>{selectedContent.parentStrand.title}</span>
                            <ChevronRight size={12} />
                            <span className="text-blue-900">Sub-strand</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-slate-900">
                            {selectedContent.content.title}
                          </h3>
                        </div>
 
                        <div className="space-y-6">
                          <section className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                            <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                              Specific Learning Outcomes
                            </h5>
                            <ul className="space-y-2">
                              {selectedContent.content.specificOutcomes.map((outcome, i) => (
                                <li key={i} className="text-slate-800 flex items-start gap-2">
                                  <span className="text-slate-800 mt-1.5 text-xs">●</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
 
                          <section className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                            <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                              Suggested Learning Experiences
                            </h5>
                            <ul className="space-y-2">
                              {selectedContent.content.suggestedExperiences.map((experience, i) => (
                                <li key={i} className="text-slate-800 flex items-start gap-2">
                                  <span className="text-slate-800 mt-1.5 text-xs">●</span>
                                  <span>{experience}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
 
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                              <h6 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                Key Inquiry Questions
                              </h6>
                              <ul className="space-y-1">
                                {selectedContent.content.keyQuestions.map((question, i) => (
                                  <li key={i} className="text-slate-800 text-sm flex items-start gap-2">
                                    <span className="text-slate-800 mt-1 text-xs">●</span>
                                    <span>{question}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                           
                            <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                              <h6 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                Core Competencies
                              </h6>
                              <ul className="space-y-1">
                                {selectedContent.content.competencies.map((competency, i) => (
                                  <li key={i} className="text-slate-800 text-sm flex items-start gap-2">
                                    <span className="text-slate-800 mt-1 text-xs">●</span>
                                    <span>{competency}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                           
                            <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
                              <h6 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                Values & PCIs
                              </h6>
                              <ul className="space-y-1">
                                {selectedContent.content.values.map((value, i) => (
                                  <li key={i} className="text-slate-800 text-sm flex items-start gap-2">
                                    <span className="text-slate-800 mt-1 text-xs">●</span>
                                    <span>{value}</span>
                                  </li>
                                ))}
                                {selectedContent.content.pcis &&
                                  selectedContent.content.pcis.length > 0 &&
                                  selectedContent.content.pcis.map((pci, i) => (
                                    <li key={`pci-${i}`} className="text-slate-800 text-sm flex items-start gap-2">
                                      <span className="text-slate-800 mt-1 text-xs">●</span>
                                      <span>{pci}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
 
                          <div className="flex gap-3 pt-4 border-t border-slate-200">
                            <a
                              className="px-4 py-2 rounded-md border border-slate-300 text-sm hover:bg-[#f4a024] transition-colors flex items-center gap-2"
                              href="#"
                            >
                             
                              View assessment rubric
                            </a>
                            <a
                              className="px-4 py-2 rounded-md text-sm border border-slate-300 hover:bg-[#f4a024] transition-colors flex items-center gap-2"
                              href="#"
                            >
                             
                              Teaching resources
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500 p-6">
                    <div className="text-center max-w-md">
                     
                      <div className="text-lg font-medium mb-2">Select a strand or sub-strand</div>
                      <div className="text-sm">Choose from the mathematics curriculum on the left to view detailed learning outcomes, experiences, and competencies.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default MathSubstrand;