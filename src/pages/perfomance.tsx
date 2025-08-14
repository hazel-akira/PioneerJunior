import React, { useState} from 'react';
import { BarChart3, TrendingUp, Award, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
interface DashboardData {
  id: string;
  year: string;
  title: string;
  description: string;
  embedUrl: string;
  aspectRatio: string;
  icon: React.ReactNode;
}

const dashboardsData: DashboardData[] = [
  {
    id: 'kpsea-202-1',
    year: '2023',
    title: 'Kenya Primary School Education Assessment(KPSEA) 2023',
    description: '',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiOTg0OWYxZDAtMjYzNi00NWUyLTg2YjMtMmQzODZiZjhjY2I1IiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&amp;embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/10]',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: 'kcpe-2023-2',
    year: '2023',
    title: 'ST PAUL THOMAS ACADEMY COMPARISON AGAINST NATIONAL KCPE 2023',
    description: '',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYjZiZTkzNDQtN2I1OC00MzU4LTkxNzMtNzg4NDk1ZjMxOGNhIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&amp;pageName=3a6be48f43c92a05c63e&amp;embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/10]',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'kcpe-2023',
    year: '2023',
    title: 'Kenya National Examination results 2023',
    description: '',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTdmYjY3MmItNWM5NS00OGU3LWIwMjktMTAwMWM1Mzg1MzI3IiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/9]',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 'kcpe-2022',
    year: '2022',
    title: 'Kenya National Examination results 2022',
    description: '',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDEzM2EwMmUtM2I0OS00NTMwLWEzYTMtOTM3ZGIwOTk1MGU1IiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/9]',
    icon: <Award className="w-6 h-6" />
  },

  {
    id: 'kcpe-2019 to 2021',
    year: '2019 - 2021',
    title: 'Kenya National Examination results 2019 to 2021',
    description: '',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTYwYzQ1YTgtZmU4ZS00NzA1LWFiZWItZWY1ZDU3M2Q4ZjUxIiwidCI6ImJkNzIyMmM3LTBjZWYtNGJjNS05ZTllLWQ1ZjhiNWJiYjFlMiIsImMiOjl9&embedImagePlaceholder=true',
    aspectRatio: 'aspect-[16/9]',
    icon: <Award className="w-6 h-6" />
  }
];

const DashboardCard: React.FC<{ dashboard: DashboardData }> = ({ dashboard }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 bg-gradient-to-br from-[#093057] to-[#093057ae] border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#df8811] text-[#ffff] rounded-xl transition-colors">
              {dashboard.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#df8811]  transition-colors">
                {dashboard.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <Calendar className="w-4 h-4 text-[white]" />
                <span className="text-sm font-medium text-[white]">{dashboard.year}</span>
              </div>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-[#df8811] group-hover:text-[#093057] transition-colors" />
        </div>
       
      </div>

      {/* Dashboard Embed */}
      <div className="relative">
        {isLoading && (
          <div className={`${dashboard.aspectRatio} flex items-center justify-center bg-gray-50 border-t border-gray-100`}>
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-[#093057] animate-spin mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Loading dashboard...</p>
              <div className="flex space-x-1 mt-2 justify-center">
                <div className="w-2 h-2 bg-[#df8811] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#093057] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#093057] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className={`${dashboard.aspectRatio} flex items-center justify-center bg-red-50 border-t border-red-100`}>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-red-600 font-medium">Unable to load dashboard</p>
              <p className="text-red-500 text-sm mt-1">Please check your connection and try again</p>
            </div>
          </div>
        )}

        <iframe
          src={dashboard.embedUrl}
          className={`w-full ${dashboard.aspectRatio} ${isLoading || hasError ? 'hidden' : 'block'} border-0`}
          title={dashboard.title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default function BeInspired() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  
  const filteredDashboards = selectedYear === 'all' 
    ? dashboardsData 
    : dashboardsData.filter(d => d.year === selectedYear);

  const uniqueYears = ['all', ...Array.from(new Set(dashboardsData.map(d => d.year)))];

  return (
    <>
      <Helmet>
        <title>KCPE Results | St Paul Thomas Academy</title>
      </Helmet>
      <div className="min-h-screen font-sans bg-gradient-to-br from-slate-200 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#13365e] via-blue-900 to-[#093057]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="w-7 h-7 text-[#df8811]" />
                <span className="text-blue-100 font-medium"> Our Educational Excellence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#df8811] mb-6">
                KCPE Results
                <span className="bg-gradient-to-r from-yellow-400 to-[#df8811] bg-clip-text text-transparent"> Analytics</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl font-sans mx-auto leading-relaxed ">
                
              "Parents often choose academies over public schools for various reasons, with academic performance being a significant factor".
<br />
<br />
Well, they are not wrong, see our results over the past few years below
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter by Year</h2>
            <div className="flex flex-wrap gap-2">
              {uniqueYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedYear === year
                      ? 'bg-[#093057] text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-8 lg:gap-12">
            {filteredDashboards.map((dashboard) => (
              <DashboardCard key={dashboard.id} dashboard={dashboard} />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-[#093057] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
              <Link
          to="/nurture"
          className="inline-block border mb-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
      Nurturing Students
        </Link>
        <Link
          to="/studylife"
          className="inline-block border ml-10 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
      Study Life
        </Link>
           
          </div>
        </div>
      </div>
    </>
  );
}