import { Briefcase, Calendar } from 'lucide-react';

const formatDate = (dateString) => {
if (!dateString) return "Present";
const date = new Date(dateString);
return date.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
};

const getBadgeColor = (type) => {
switch(type) {
case 'internship': return 'bg-blue-100 text-blue-700 border-blue-200';
case 'organization': return 'bg-purple-100 text-purple-700 border-purple-200';
case 'project': return 'bg-green-100 text-green-700 border-green-200';
default: return 'bg-gray-100 text-gray-700 border-gray-200';
}
}

const Experiences = ({ experiences = [] }) => {
if (!experiences || !Array.isArray(experiences)) {
return null;
}

return (
<div
    className="w-full bg-gradient-to-r from-gray-900 to-black p-6 md:p-8 shadow-sm border border-gray-100 rounded-2xl mb-8">
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-white" />
        Experience
    </h2>

    <div className="relative space-y-8">
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block"></div>

        {experiences.map((exp) => (
        <div key={exp.id} className="relative flex flex-col md:flex-row gap-6 group">
            <div
                className="hidden md:flex absolute left-0 bg-white border-2 border-gray-100 rounded-full p-2 z-10 group-hover:border-blue-500 transition-colors">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>

            <div
                className="flex-1 ml-0 md:ml-12 bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-blue-100 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">

                    <div className="flex-shrink-0">
                        {exp.image_url ? (
                        <img src={exp.image_url} alt={exp.title}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200 shadow-sm"
                            onError={(e)=> {
                        e.target.style.display = 'none';
                        if(e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                        }}
                        />
                        ) : null}

                        <div className="w-16 h-16 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center"
                            style={{ display: exp.image_url ? 'none' : 'flex' }}>
                            <Briefcase className="w-8 h-8 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                            <div>
                                <h3
                                    className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {exp.title}
                                </h3>
                                <div className="text-gray-600 font-medium">{exp.organization}</div>
                            </div>

                            <div className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider
                                self-start md:self-center ${getBadgeColor(exp.experience_type)}`}>
                                {exp.experience_type}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                                {formatDate(exp.start_date)} - {exp.is_current ? <span
                                    className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Current</span> :
                                formatDate(exp.end_date)}
                            </span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 border-t border-gray-50 pt-4">
                    {exp.description}
                </p>

                {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                    <span key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg border border-gray-200">
                        {tech}
                    </span>
                    ))}
                </div>
                )}
            </div>
        </div>
        ))}
    </div>
</div>
);
};

export default Experiences;