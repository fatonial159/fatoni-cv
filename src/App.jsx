import { useState, useEffect } from "react";
import dataMahasiswa from './dataMahasiswa.json';
import Skills from './components/Skills.jsx';
import Experiences from './components/Experiences.jsx';
import Profile from './components/Profile.jsx';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(dataMahasiswa);
  }, []);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-gray-900 pb-20">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        
        <Profile profile={data.profile} />

        <Skills skills={data.skills} />

        <Experiences experiences={data.experiences} />

        <footer className="text-center text-gray-400 text-sm mt-12">
            © {new Date().getFullYear()} {data.profile.full_name}. Built with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}