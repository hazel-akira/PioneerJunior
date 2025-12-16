import React, { useState } from "react";
import {
  BarChart3,
  Award,
  Calendar,
  ChevronDown,
  //LineChart,
  //GraduationCap,
} from "lucide-react";
import { Helmet } from '@dr.pogodin/react-helmet';

// ---------------- HERO SECTION ---------------- //
interface HeroSectionProps {
  title: string;
  description: string;
  //icon: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description}) => {
  return (
    <div className="max-w-full mx-auto w-full bg-gradient-to-br from-[#0d1e42] via-[#132d6b] to-[#0a1b3c] text-white py-20 px-6 mb-10 animate-fadeIn">
     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-7 h-7 text-[#df8811]" />
              <span className="text-blue-100 font-medium">Our Educational Excellence</span>
            </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-bl from-[#df8811] via-yellow-400 to-[#df8811] bg-clip-text text-transparent text-center drop-shadow mb-4">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center">
        {description}
      </p>

      {/* Icon section 
      <div className="mt-8 w-fit mx-auto p-4 bg-[#df8811] text-right rounded-2xl shadow-lg">
        {icon}
        </div>*/}
      </div>
    </div>
  );
};

// ---------------- DASHBOARD CARD ---------------- //
interface DashboardCardProps {
  dashboard: {
    icon: React.ReactNode;
    title: string;
    year: string | number;
    aspectRatio: string;
    embedUrl: string;
  };
}

const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fadeIn">
      {/* Header */}
      <div className="p-6 bg-gradient-to-br from-[#093057] to-[#0d447e]">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#df8811] text-white rounded-xl shadow-md">
              {dashboard.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#df8811]">
                {dashboard.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1 text-white">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{dashboard.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading && !error && (
        <div
          className={`${dashboard.aspectRatio} flex items-center justify-center bg-gray-50`}
        >
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#093057]"></div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-6 text-center bg-red-50 text-red-600">
          <p>Error loading dashboard</p>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={dashboard.embedUrl}
        className={`w-full ${
          loading || error ? "hidden" : "block"
        } ${dashboard.aspectRatio} border-0`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        allow="fullscreen"
      />
    </div>
  );
};

// ---------------- MAIN PAGE ---------------- //
export default function BeInspired() {
  const [KJSEAOpen, setKJSEAOpen] = useState(true);
  

  const dashboardsData = [
    {
      id: "KJSEA-2025",
      year: "2025",
      title: "PIONEER JUNIOR ACADEMY COMPARISON AGAINST NATIONAL  KJSEA 2025",
      embedUrl:
        "https://app.fabric.microsoft.com/view?r=eyJrIjoiOWYzNWQ5YTUtOTNmZC00MzgyLTkzNDMtNjBlM2EyZTk3NTkxIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9",
      aspectRatio: "aspect-[16/10]",
      icon: <BarChart3 className="w-6 h-6 uppercase" />,
    },
    {
      id: "KJSEA-2025",
      year: "2025",
      title: "Kenya Junior School Education Assessment (KJSEA) 2025  SUBJECTS PERFOMANCE",
      embedUrl:
        "https://app.fabric.microsoft.com/view?r=eyJrIjoiZTNlYzUzMGQtYTNmOS00ZjE4LTg2MWItZDBlOWI5YWExMmUwIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9",
      aspectRatio: "aspect-[16/10]",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    
  ];

  const KJSEADashboards = dashboardsData.filter((d) => d.id.startsWith("KJSEA-"));
 
  return (
    <>
      <Helmet>
        <title> KJSEA| Pioneer Junior Academy</title>
      </Helmet>

      <div className="w-full min-h-screen bg-gray-100 pb-20">
        {/* ---------- KJSEA HERO ---------- */}
        <HeroSection
          title="KJSEA Performance Analytics"
          description="The first-ever nationwide KJSEA results are now available! Explore detailed performance analytics, trends, and score distributions right here on our website. Celebrate achievements and gain insights to guide future learning."     
        />

        <div className="max-w-full mx-auto px-4 w-full">
          {/* ---------- KJSEA ACCORDION ---------- */}
          <div className="bg-white rounded-xl shadow mb-12 animate-fadeIn">
            <button
              onClick={() => setKJSEAOpen((prev) => !prev)}
              className="w-full flex justify-between items-center p-5 text-left font-bold text-xl text-[#093057]"
            >
              KJSEA Results
              <ChevronDown className={`transition-transform ${KJSEAOpen ? "rotate-180" : ""}`} />
            </button>

            {KJSEAOpen && (
              <div className="p-5 border-t grid gap-6">
                {KJSEADashboards.map((dashboard) => (
                  <DashboardCard key={dashboard.id} dashboard={dashboard} />
                ))}
              </div>
            )}
          </div>
          </div>
          </div>
     
    </>
  );
}
