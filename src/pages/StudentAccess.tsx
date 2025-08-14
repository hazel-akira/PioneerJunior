// src/pages/StudentAccess.tsx


import {
  EnvelopeIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  VideoCameraIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

const accessItems = [
  {
    title: 'Student Email',
    url: 'https://login.microsoftonline.com',
    Icon: EnvelopeIcon,
  },
  {
    title: 'Moodle Access',
    url: 'https://elearning.pioneerschools.ac.ke',
    Icon: ComputerDesktopIcon,
  },
  {
    title: 'Online Library',
    url: 'https://elearning.pioneerschools.ac.ke',
    Icon: BookOpenIcon,
  },
  {
    title: 'Online Classes',
    url: 'https://teams.microsoft.com',
    Icon: VideoCameraIcon,
  },
  {
    title: 'Register to Club & Sport',
    url: '/student-life', // replace with actual club & sport registration link if available
    Icon: UserGroupIcon,
  },
]

const StudentAccess: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-[#083056]">
    {/* Hero */}
    <section
      className="relative h-[60vh]  flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/studentAccess.webp')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-[#093056]/30" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Student Access</h1>
        <p className="mt-2 text-lg max-w-xl">
          Quick links to all the platforms our students need to stay connected.
        </p>
      </div>
    </section>

    {/* Access Cards */}
    <main className="flex-grow container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessItems.map(({ title, url, Icon }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e4af23] rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            <Icon className="w-12 h-12 text-[#093056] mb-4" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
          </a>
        ))}
      </div>
    </main>
  </div>
)

export default StudentAccess
