function App() {
  const links = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@ywaps',
      image: '/4834215.png',
      gradient: 'from-cyan-500 via-purple-600 to-pink-600'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@yWaps',
      image: '/Youtube_logo.png',
      gradient: 'from-red-600 to-red-700'
    },
    {
      name: 'Spotify Playlist',
      url: 'https://open.spotify.com/playlist/6fJphnE9P9f5lEu1IZgRwV?si=7a02f62eae8440b6',
      image: '/Spotify-Icon-Logo.wine.svg',
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/BEmgx3sbQR',
      image: '/discord-6.svg',
      gradient: 'from-blue-600 to-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img
              src="/channels4_profile.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 relative shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">@yWaps</h1>
          <p className="text-purple-300 text-lg">Meus links</p>
        </div>

        <div className="space-y-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-purple-800/60 backdrop-blur-sm"></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

              <div className="relative flex items-center justify-between p-5 border border-purple-700/50 group-hover:border-purple-500/80 rounded-2xl transition-colors">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <img
                      src={link.image}
                      alt={link.name}
                      className={`object-contain ${link.name === 'Spotify Playlist' ? 'w-20 h-20' : 'w-9 h-9'}`}
                    />
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">{link.name}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center group-hover:bg-purple-500/50 transition-all group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-700/30 rounded-full">
            <p className="text-purple-300 text-sm font-medium">© 2025 yWaps</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
