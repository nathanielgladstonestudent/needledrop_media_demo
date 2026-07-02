import Image from "next/image";
import Sidebar from "./components/Sidebar";
import StreamerImage from "./components/StreamerImage";
import ContentThumbnails from "./components/ContentThumbnails";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom, #001924, #000000)' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-zinc-800 px-8 py-4 flex items-center justify-between flex-shrink-0" style={{ background: 'transparent' }}>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">Welcome, Michael</span>
            <img src="/needledrop_media_demo/assets/107_HeaderProfileModelight_dark_switchmoon.png" alt="Theme" className="w-6 h-6 cursor-pointer" />
            <div className="relative">
              <img src="/needledrop_media_demo/assets/105_HeaderProfileNotificationNotification.png" alt="Notifications" className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
            </div>
            <img src="/needledrop_media_demo/assets/099_HeaderProfilePIC_masked.png" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Main Content with Right Sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Center Content */}
          <div className="flex-1 overflow-y-auto px-8 py-4">
            {/* City Blocks Section */}
            <div className="bg-[#151a1f] rounded-lg overflow-hidden mb-3 flex" style={{ height: '240px' }}>
              {/* Movie Poster */}
              <div className="w-[180px] flex-shrink-0 bg-black flex items-center justify-center">
                <img
                  src="/needledrop_media_demo/assets/098_YOU_JUST_WATCHEDCITY_BLOCKS_copy_5.png"
                  alt="City Blocks"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Details */}
              <div className="flex-1 p-4 flex flex-col justify-center">
                <div className="text-zinc-400 text-xs mb-1 font-bold">2 MIN AGO</div>
                <div className="text-zinc-400 text-xs italic mb-1 font-bold">You just watched</div>
                <h1 className="text-yellow-400 text-3xl font-bold mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>City Blocks</h1>
                
                <div className="space-y-1 text-white">
                  <p className="text-sm font-bold"><span className="font-bold">Executive Producer:</span> Kendrick Lamar</p>
                  <p className="text-sm font-bold"><span className="font-bold">Cast:</span> Shemeik Moore, Marcello Hernandez, Taylor Tomlinson and Jeff Goldblum</p>
                  <p className="text-sm font-bold"><span className="font-bold">Music:</span> Kendrick Lamar, SZA, ScHoolboy Q, and others.</p>
                  <p className="text-sm font-bold"><span className="font-bold">Genre:</span> Comedy</p>
                </div>
              </div>
            </div>

            {/* Your Other Streaming Services */}
            <h2 className="text-yellow-400 text-xl font-bold mb-2" style={{ fontFamily: 'Unbounded, sans-serif' }}>Your Other Streaming Services</h2>

            {/* Spotify Section */}
            <div className="bg-[#151a1f] rounded-lg mb-2 flex overflow-hidden" style={{ height: '120px' }}>
              <div className="w-[120px] flex-shrink-0 bg-[#1a1a1a] flex items-center justify-center">
                <img
                  src="/needledrop_media_demo/assets/096_YOUR_OTHER_STREAMERSSPOTIFYSPOTIFY.png"
                  alt="Spotify"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="flex-1 p-2 flex flex-col">
                <p className="text-white text-xs mb-1 leading-tight line-clamp-2 flex-shrink-0 font-bold">
                  Because you watched City Blocks and are a monthly Kendrick Lamar listener, you might also like to listen to the following artists:
                </p>
                
                <div className="flex gap-2 flex-1 min-h-0">
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/080_YOUR_OTHER_STREAMERSSPOTIFY01.png" alt="SZA" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">SZA</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Artist</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/084_YOUR_OTHER_STREAMERSSPOTIFY02.png" alt="ScHoolboy Q" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">ScHoolboy Q</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Artist</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/088_YOUR_OTHER_STREAMERSSPOTIFY03.png" alt="Baby Keem" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Baby Keem</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Artist</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/092_YOUR_OTHER_STREAMERSSPOTIFY04.png" alt="Doechii" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Doechii</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Artist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Netflix Section */}
            <div className="bg-[#151a1f] rounded-lg mb-2 flex overflow-hidden" style={{ height: '120px' }}>
              <div className="w-[120px] flex-shrink-0 bg-[#1a1a1a] flex items-center justify-center">
                <img
                  src="/needledrop_media_demo/assets/077_YOUR_OTHER_STREAMERSNETFLIXNET.png"
                  alt="Netflix"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
             <div className="flex-1 p-2 flex flex-col">
                <p className="text-white text-xs mb-1 leading-tight line-clamp-2 flex-shrink-0 font-bold">
                  Because you watched City Blocks, you might also like to watch the following movies and TV shows:
                </p>
                
                <div className="flex gap-2 flex-1 min-h-0">
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/061_YOUR_OTHER_STREAMERSNETFLIX01.png" alt="Dope" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Dope</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Movie</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/065_YOUR_OTHER_STREAMERSNETFLIX02.png" alt="You People" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">You People</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Movie</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/069_YOUR_OTHER_STREAMERSNETFLIX03.png" alt="Dave" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Dave</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">TV Show</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden flex flex-col min-w-0">
                    <img src="/needledrop_media_demo/assets/073_YOUR_OTHER_STREAMERSNETFLIX04.png" alt="I'm A Virgo" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">I&apos;m A Virgo</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">TV Show</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="bg-[#151a1f] rounded-lg mb-2 flex overflow-hidden" style={{ height: '120px' }}>
              <div className="w-[120px] flex-shrink-0 bg-[#1a1a1a] flex items-center justify-center">
                <img
                  src="/needledrop_media_demo/assets/058_YOUR_OTHER_STREAMERSYOUTUBE_MUSICYOUTUBE.png"
                  alt="YouTube Music"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="flex-1 p-2 flex flex-col">
                <p className="text-white text-xs mb-1 leading-tight line-clamp-2 flex-shrink-0 font-bold">
                  Because you watched City Blocks and are a subscriber to Kendrick Lamar and ScHoolboy Q channels, we thought you might like the following:
                </p>
                
                <div className="flex justify-start flex-1 min-h-0">
                  <div className="rounded-lg overflow-hidden flex flex-col min-w-0" style={{ width: 'calc(25% - 1.5px)', marginRight: 'calc(25% + 0.5px)' }}>
                    <img src="/needledrop_media_demo/assets/049_YOUR_OTHER_STREAMERSYOUTUBE_MUSIC01.png" alt="Kendrick Lamar" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Kendrick Lamar</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Squabble Up</div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden flex flex-col min-w-0" style={{ width: 'calc(25% - 1.5px)' }}>
                    <img src="/needledrop_media_demo/assets/054_YOUR_OTHER_STREAMERSYOUTUBE_MUSIC01_copy.png" alt="Doechii" className="w-full h-14 object-cover flex-shrink-0" />
                    <div className="text-white text-xs py-0.5 px-1 flex-shrink-0">
                      <div className="font-bold truncate">Doechii</div>
                      <div className="text-[10px] text-zinc-400 truncate font-bold">Artist channel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Instagram Social */}
          <div className="w-[320px] bg-[#0f2137] border-l border-zinc-800 flex-shrink-0 overflow-y-auto">
            <div className="p-6">
              {/* Instagram Header */}
              <div className="flex items-center gap-3 mb-6">
                <img src="/needledrop_media_demo/assets/046_RIGHT_PANELIG_MODULEIG.png" alt="Instagram" className="w-12 h-12" />
                <div>
                  <span className="text-white font-bold text-xl">Instagram</span>
                  <span className="text-zinc-400 text-xl"> Social</span>
                </div>
              </div>

              {/* City Blocks Fans You Follow */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-2">City Blocks Fans You Follow</h3>
                <p className="text-zinc-400 text-sm mb-4">11 MEMBERS</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    '/needledrop_media_demo/assets/023_RIGHT_PANELIG_MODULEJENNIJENNI.png',
                    '/needledrop_media_demo/assets/024_RIGHT_PANELIG_MODULEJENNIJENNI_copy.png',
                    '/needledrop_media_demo/assets/025_RIGHT_PANELIG_MODULEJENNIJENNI_copy_2.png',
                    '/needledrop_media_demo/assets/026_RIGHT_PANELIG_MODULEJENNIJENNI_copy_3.png',
                    '/needledrop_media_demo/assets/018_RIGHT_PANELIG_MODULEBOTTOMJENNI.png',
                    '/needledrop_media_demo/assets/019_RIGHT_PANELIG_MODULEBOTTOMJENNI_copy.png',
                    '/needledrop_media_demo/assets/020_RIGHT_PANELIG_MODULEBOTTOMJENNI_copy_2.png',
                    '/needledrop_media_demo/assets/021_RIGHT_PANELIG_MODULEBOTTOMJENNI_copy_3.png',
                    '/needledrop_media_demo/assets/029_RIGHT_PANELIG_MODULEJENNI_copy_2.png',
                    '/needledrop_media_demo/assets/030_RIGHT_PANELIG_MODULEJENNI_copy_3.png',
                    '/needledrop_media_demo/assets/022_RIGHT_PANELIG_MODULEJENNILayer_1457_masked.png',
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Fan ${i + 1}`} className="w-full h-auto rounded-full" />
                  ))}
                </div>
              </div>

              {/* City Blocks Fans Following You */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-2">City Blocks Fans Following You</h3>
                <p className="text-zinc-400 text-sm mb-4">4 MEMBERS</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    '/needledrop_media_demo/assets/031_RIGHT_PANELIG_MODULECITY_BLOCK_-_FOLLOW_YOUJENNI_c.png',
                    '/needledrop_media_demo/assets/032_RIGHT_PANELIG_MODULECITY_BLOCK_-_FOLLOW_YOUJENNI_c.png',
                    '/needledrop_media_demo/assets/033_RIGHT_PANELIG_MODULECITY_BLOCK_-_FOLLOW_YOUJENNI_c.png',
                    '/needledrop_media_demo/assets/034_RIGHT_PANELIG_MODULECITY_BLOCK_-_FOLLOW_YOUJENNI_c.png',
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Follower ${i + 1}`} className="w-full h-auto rounded-full" />
                  ))}
                </div>
              </div>

              {/* Kendrick Lamar Fans You Follow */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Kendrick Lamar Fans You Follow</h3>
                <p className="text-zinc-400 text-sm mb-4">7 MEMBERS</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    '/needledrop_media_demo/assets/035_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/036_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/037_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/038_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/039_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/040_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                    '/needledrop_media_demo/assets/041_RIGHT_PANELIG_MODULECITY_BLOCK_-_YOU_FOLLOWJENNI_0.png',
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`KL Fan ${i + 1}`} className="w-full h-auto rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
