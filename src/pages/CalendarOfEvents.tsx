import React from 'react';
import { Calendar, Clock, GraduationCap, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
interface TermData {
  name: string;
  opening: string;
  closing: string;
  halfTerm?: {
    opening: string;
    closing: string;
  };
  holiday?: {
    name: string;
    starting: string;
    ending: string;
  };
}
 

 
const CalendarOfEvents: React.FC = () => {
  const termsData: TermData[] = [
    {
      name: "TERM 1",
      opening: "8TH JANUARY 2025",
      closing: "5TH APRIL 2025",
      halfTerm: {
        opening: "29TH FEBRUARY 2025",
        closing: "3RD MARCH 2025"
      },
      holiday: {
        name: "APRIL HOLIDAY",
        starting: "8TH APRIL 2025",
        ending: "26TH APRIL 2025"
      }
    },
    {
      name: "TERM 2",
      opening: "29TH APRIL 2025",
      closing: "2ND AUGUST 2025",
      halfTerm: {
        opening: "24TH JUNE 2025",
        closing: "1ST JULY 2025"
      },
      holiday: {
        name: "AUGUST HOLIDAY",
        starting: "30TH JULY 2025",
        ending: "2ND SEPTEMBER 2025"
      }
    },
    {
      name: "TERM 3",
      opening: "2ND SEPTEMBER 2025",
      closing: "24TH OCTOBER 2025",
      holiday: {
        name: "CHRISTMAS HOLIDAY",
        starting: "28TH OCTOBER 2025",
        ending: "3RD JANUARY 2026"
      }
    }
  ];
 
  
 
  return (
    <>  <Helmet>
    <title> Calendar Of Events | Pioneer School</title>
  </Helmet>
    <div className="bg-slate-200 font-sans min-h-screen">
      <div className="container mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-10 h-10 text-[#083056]" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Calendar of Events
            </h1>
          </div>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>
 
        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {termsData.map((term, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="bg-[#083056] px-6 py-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" />
                  {term.name} - 2025
                </h2>
              </div>
             
              <div className="p-6 flex-grow">
                {/* Main Term Dates */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      Opening Date
                    </h3>
                    <p className="text-yellow-700 font-medium">{term.opening}</p>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg border border-amber-200">
                    <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                      Closing Date
                    </h3>
                    <p className="text-amber-700 font-medium">{term.closing}</p>
                  </div>
                </div>
 
                {/* Half Term */}
                {term.halfTerm && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Half Term Break
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded border border-blue-200">
                        <span className="text-[#083056] font-medium">From: {term.halfTerm.opening}</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded border border-blue-200">
                        <span className="text-[#083056] font-medium">To: {term.halfTerm.closing}</span>
                      </div>
                    </div>
                  </div>
                )}
 
                {/* Holiday */}
                {term.holiday && (
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {term.holiday.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-3 rounded border border-orange-200">
                        <span className="text-orange-600 font-medium">From: {term.holiday.starting}</span>
                      </div>
                      <div className="bg-red-50 p-3 rounded border border-orange-200">
                        <span className="text-orange-600 font-medium">To: {term.holiday.ending}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
 
        
 
          {/* Footer Notice */}
          <div className="bg-[#083056]  rounded-xl p-6 text-white flex items-center">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 mt-1 flex-shrink-0 text-center text-[#df8811]" />
              <div>
                <p className="font-bold text-left mb-2 text-xl  text-[#df8811]">Important Notice</p>
                <p className="mb-3 opacity-90 font-semibold">
                  Dates may change due to various reasons. This will be communicated in advance to avoid any inconvenience.
                </p>
                <p className="font-semibold">
                  Prospective parents and students can visit the school on any date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};
 
export default CalendarOfEvents;