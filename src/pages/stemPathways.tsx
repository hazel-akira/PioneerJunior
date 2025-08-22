import React, { useState } from 'react';
import { ChevronDown, Users, BookOpen, Zap } from 'lucide-react';
//import {motion} from 'framer-motion'
import MathSubstrand from '../components/MathSubstrandProps';
 
// Types
interface Track {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  subjects: Subject[];
  icon: React.ReactNode;
}
 
interface Subject {
  name: string;
  description: string;
  imageSrc: string;
  infolink?: string;
  component?: string;
}
 
// InfoCard Component with Explore Button
const InfoCard: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  icon?: React.ReactNode;
  onExplore: () => void;
}> = ({ title, description, imageSrc, icon, onExplore }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
    <div className="relative overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {icon && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          {icon}
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#093056] group-hover:text-[#1e40af] transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      </div>
     
      <button
        onClick={onExplore}
        className="
       
       
        border border-[#f4a024] text-[#f4a024] font-semibold py-2 px-2 rounded-xl hover:bg-[#f4a024] hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <span>Explore Subjects</span>
        <ChevronDown className="rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1" size={18} />
      </button>
    </div>
  </div>
);
 
// Modern SubjectCard with enhanced styling (removed as it's no longer used in main view)
 
// Track data with icons
const tracks: Track[] = [
  {
    id: 'pure-sciences',
    title: 'Pure Sciences',
    description: 'Math, Biology, Chemistry, Physics, General Sciences',
    imageSrc: '/sciencelab.jpg',
    icon: <BookOpen className="text-[#093056]" size={24} />,
    subjects: [
      { name: 'Mathematics', description: 'The study of numbers, structures, and patterns.', imageSrc: '/maths.jpg', component: 'MathSubstrand' },
      { name: 'Biology', description: 'Study of living organisms and life processes.', imageSrc: '/biology.jpg', infolink:'https://drive.google.com/file/d/1vj9XvlzXLYmQkXKTPFj-5R47W3LEFrdl/view' },
      { name: 'Chemistry', description: 'Exploration of substances and chemical reactions.', imageSrc: '/chemistry.jpg', infolink:'https://drive.google.com/file/u/0/d/1WgNZS_J6LjNP_djp7TMs7Zh2X6JZOCgw/view' },
      { name: 'Physics', description: 'Principles of matter, energy, and their interactions.', imageSrc: '/physics.jpg', infolink:'https://drive.google.com/file/d/1RvkqaK9k0_YvvAtQalKml1XuwsLclpPo/view' },
      { name: 'General Sciences', description: 'Interdisciplinary science concepts and applications.', imageSrc: '/generalscience.jpg' , infolink:'https://drive.google.com/file/u/0/d/1rCWOk21f12mGr22ullq6TO26J9_osFcM/view'},
    ],
  },
  {
    id: 'applied-sciences',
    title: 'Applied Sciences',
    description: 'Agriculture, Computer Science, Home Science',
    imageSrc: '/agriculture1.webp',
    icon: <Users className="text-[#093056]" size={24} />,
    subjects: [
      { name: 'Agriculture', description: 'Food production, farming, and land management.', imageSrc: '/agriculture2.webp', infolink:'https://drive.google.com/file/d/1qpmBG07ftIgKbCC8kwuDOJXgQJC6EOiY/view' },
      { name: 'Computer Studies', description: 'Computational theory, programming, and technology.', imageSrc: '/computer.jpg', infolink:'https://drive.google.com/file/d/1VxtiNFMwMSIGG5ZbjbbYD6SLA0LtmboX/view' },
      { name: 'Home Science', description: 'Practical life skills, nutrition, and family studies.', imageSrc: '/homescience.jpg', infolink:'https://kicd.ac.ke/wp-content/uploads/2024/07/Home-Science-Grade-10-June-2024.pdf' },
    ],
  },
  {
    id: 'technical-studies',
    title: 'Technical Studies',
    description: 'Aviation, Building & Construction, Electricity, Metal Work, Drawing & Design, Power Mechanics, Woodwork, Marine & Fisheries',
    imageSrc: '/drawingdesign.jpg',
    icon: <Zap className="text-[#093056]" size={24} />,
    subjects: [
      { name: 'Aviation', description: 'Principles of flight, aircraft systems, and aerospace technology.', imageSrc: '/aviationtech.jpg', infolink:'https://drive.google.com/file/u/0/d/1DL8mTQdCBRK7B9NgGZIPLZOJi5vzWq7H/view' },
      { name: 'Building & Construction', description: 'Construction techniques, materials, and project management.', imageSrc: '/buildingtech.jpg', infolink:'https://drive.google.com/file/d/1GBJQxf_9OfwEaG0nuSQ96ACt9wYJP-mi/view' },
      { name: 'Electricity', description: 'Electrical systems, circuitry, and power distribution.', imageSrc: '/electrical.jpg', infolink:'https://drive.google.com/file/d/18LuMJNN8M6wBCrkcsK7yiUFcdWNayB4u/view' },
      { name: 'Metal Work', description: 'Shaping, joining, and fabricating metal materials.', imageSrc: '/metaltech.jpg', infolink:'https://drive.google.com/file/d/1RyIcF4aeu-B3ih4GHxAx017O1jc9P-eI/view' },
      { name: 'Power Mechanics', description: 'Engine maintenance, repair, and mechanical systems.', imageSrc: '/mechanic.jpg', infolink:'https://drive.google.com/file/d/11tMS7B0r6H_nIolybbJgh6VBZ1fvPKKB/view' },
      { name: 'Woodwork', description: 'Wood crafting, joinery, and furniture construction.', imageSrc: '/woodtech.jpg', infolink:'https://drive.google.com/file/d/1gJG6NxszQLWwB1U0BJSBrKayWGlfBcel/view' },
      { name: 'Marine & Fisheries', description: 'Marine ecosystems, fishing methods, and aquaculture.', imageSrc: '/marinetech.jpg', infolink:'https://drive.google.com/file/d/1IfzARt_02GA8LrAnwqy1v_Hn9UKOJ6Zk/view' },
    ],
  },
];
 
// Subjects Page Component
const SubjectsPage: React.FC<{
  track: Track;
  onBack: () => void;
  onSelectSubject: (subject: Subject) => void;
}> = ({ track, onBack, onSelectSubject }) => (
  <div className="min-h-screen bg-slate-200">
    {/* Header */}
    <div className="bg-gradient-to-r from-[#093056] to-[#1e40af] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-900 hover:text-[#f4a024] transition-colors duration-300 mb-4 group"
        >
          <ChevronDown className="rotate-90 transition-transform duration-300 group-hover:-translate-x-1" size={20} />
          <span>Back to STEM Tracks</span>
        </button>
       
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
            {track.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{track.title}</h1>
            <p className="text-slate-900 text-lg">{track.description}</p>
          </div>
        </div>
       
        <div className="bg-white backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <p className="text-[#f4a024] text-md">
            <strong>{track.subjects.length} subjects available</strong> • Choose 2 subjects to specialize in
          </p>
        </div>
      </div>
    </div>
 
    {/* Subjects Grid */}
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {track.subjects.map((subject, index) => (
            <div
              key={subject.name}
              className="transform transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#093056]/20 group h-full">
                <div className="relative">
                  <img
                    src={subject.imageSrc}
                    alt={subject.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
               
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{subject.description}</p>
                 
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {track.title}
                    </span>
                    <button
                      onClick={() => onSelectSubject(subject)}
                      className="text-[#f4a024] transition-colors duration-300 font-medium text-sm"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
 
// Main component
const Stem: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'subjects' | 'math'>('main');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
 
  const handleExploreTrack = (track: Track) => {
    setSelectedTrack(track);
    setCurrentView('subjects');
  };
 
  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedTrack(null);
  };
 
  const handleSelectSubject = (subject: Subject) => {
    if (subject.component === 'MathSubstrand') {
      setCurrentView('math');
    }
    else if (subject.infolink) {
      window.open(subject.infolink, '_blank');
    }
  };
 
  const handleBackToSubjects = () => {
    setCurrentView('subjects');
  }
 
  // Show subjects page
  if (currentView === 'subjects' && selectedTrack) {
    return <SubjectsPage track={selectedTrack} onBack={handleBackToMain} onSelectSubject={handleSelectSubject} />;
  }
 
  if (currentView === 'math') {
  return <MathSubstrand onBack={handleBackToSubjects} />;
}
 
  // Show main page
  return (
    <div className="min-h-screen bg-slate-100">
     
      
      {/* Enhanced Tracks Section */}
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select a track below to explore the subjects and discover the exciting career opportunities that await you.
            </p>
          </div>
         
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <InfoCard
                  title={track.title}
                  description={track.description}
                  imageSrc={track.imageSrc}
                  icon={track.icon}
                  onExplore={() => handleExploreTrack(track)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
 
      {/* Footer CTA */}
      <section className="md:bg-gradient-to-r from-blue-900 via-[#13365e] to-slate-800 bg-slate-800 py-16 px-6">
        <div className="flex flex-col max-w-4xl items-center mx-auto text-center text-white ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f4a024] mb-4">
            Ready to Begin Your STEM Journey?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Take the first step towards an exciting career in Science, Technology, Engineering, and Mathematics.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block">
            <p className="text-lg">
              Contact our admissions office to learn more about our STEM programs and application process.
            </p>
          </div>
          <a
              href="/social-sciences"
              className="inline-block bg-[#F4A024] text-white px-8 py-4 mt-10 rounded-lg font-bold text-lg hover:bg-[#13365e] transition-colors duration-200 transform hover:scale-105 border border-slate-200 font-serif"
            >
              SOCIAL SCIENCE PATHWAYS →
            </a>
        </div>
      </section>
    </div>
  );
};
 
export default Stem;
 