import { Code } from 'lucide-react';

const getProgressWidth = (level) => {
switch (level) {
case 'advanced': return '100%';
case 'intermediate': return '66%';
case 'beginner': return '33%';
default: return '50%';
}
};

const Skills = ({ skills }) => {
return (
<div
    className="w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-white" />
        Skills & Expertise
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
        <div key={skill.id}
            className="bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300 bg-gray-50/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <img src={skill.icon_url} alt={skill.name} className="w-10 h-10" onError={(e)=>
                    e.target.style.display = 'none'} />
                    <div>
                        <h3 className="font-bold text-white-800 text-lg">{skill.name}</h3>
                        <p className="text-sm text-gray-500">{skill.years_of_experience} years experience</p>
                    </div>
                </div>
                {skill.is_main && (
                <span
                    className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-blue-200 shadow-lg">
                    Main
                </span>
                )}
            </div>

            <div className="flex justify-between text-xs font-medium text-gray-500 mb-1 mt-4">
                <span className="capitalize">{skill.level}</span>
                <span>{skill.level === 'advanced' ? '100%' : skill.level === 'intermediate' ? '66%' : '33%'}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: getProgressWidth(skill.level) }}></div>
            </div>
        </div>
        ))}
    </div>
</div>
);
};

export default Skills;