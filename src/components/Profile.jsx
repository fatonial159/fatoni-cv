import { MapPin, Eye, ExternalLink, User } from 'lucide-react'; 

const Profile = ({ profile }) => {
    return (
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 md:p-10 shadow-xl text-white mb-8 transform transition hover:scale-[1.01] duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
            
            <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white/30 shadow-lg bg-white">
                <img 
                    src={profile.photo_url} 
                    alt={profile.full_name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=Foto';}} 
                />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white text-blue-600 p-2 rounded-full shadow-lg">
                    <User className="w-5 h-5" /> 
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.full_name}</h1>
            <p className="text-blue-100 font-medium text-lg mb-4">{profile.headline}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {profile.nim}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {profile.prodi}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Angkatan {profile.angkatan}
                </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-50 mb-6">
                <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {profile.location}
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {profile.views_count} views
                </div>
            </div>

            <p className="text-blue-50 mb-6 max-w-2xl leading-relaxed opacity-90">
                {profile.short_bio}
            </p>

            <a 
                href={profile.portfolio_url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
                <ExternalLink className="w-4 h-4" />
                Visit Portfolio
            </a>
            </div>
        </div>
        </div>
    );
};

export default Profile;