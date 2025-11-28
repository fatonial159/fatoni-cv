import { MapPin, Eye, ExternalLink, User } from 'lucide-react';

const Profile = ({ profile }) => {
if (!profile) return null;

return (
<div
    className="w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800 text-white mb-8 transform transition hover:scale-[1.01] duration-300 relative overflow-hidden">
    <div
        className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none">
    </div>

    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="relative group">
            <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl bg-gray-800">
                <img src={profile.photo_url} alt={profile.full_name} className="w-full h-full object-cover"
                    onError={(e)=> {e.target.src = 'https://via.placeholder.com/150?text=Foto';}}
                />
            </div>
            <div
                className="absolute -bottom-3 -right-3 bg-gray-800 text-green-400 p-2 rounded-full shadow-lg border border-gray-700">
                <User className="w-5 h-5" />
            </div>
        </div>
        <div className="flex-1 text-center md:text-left">
            <h1
                className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {profile.full_name}
            </h1>
            <p className="text-gray-300 font-medium text-lg mb-4">{profile.headline}</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 text-gray-300">
                    {profile.nim}
                </span>
                <span
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 text-gray-300">
                    {profile.prodi}
                </span>
                <span
                    className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 text-gray-300">
                    Angkatan {profile.angkatan}
                </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-red-400" />
                    {profile.location}
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-blue-400" />
                    {profile.views_count} views
                </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed">
                {profile.short_bio}
            </p>

            <a href={profile.portfolio_url} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white-600 px-6 py-2.5 rounded-xl font-bold hover:bg-white hover:text-blue-300 transition-colors shadow-lg">
                <ExternalLink className="w-4 h-4" />
                Visit Portfolio
            </a>
        </div>
    </div>
</div>
);
};

export default Profile;