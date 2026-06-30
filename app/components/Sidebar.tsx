'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '/assets/013_SidebarMenuMenuIconActivityGraph.png', href: '#dashboard' },
    { name: 'Discover', icon: '/assets/011_SidebarMenuMenuIconActivityDiscovery.png', href: '#discover' },
    { name: 'Trending', icon: '/assets/008_SidebarMenuIconActivityActivity.png', href: '#trending' },
    { name: 'Your Videos', icon: '/assets/003_SidebarYOUR_VIDEOSMenuIconActivityVideo.png', href: '#videos' },
    { name: 'Chat', icon: '/assets/006_SidebarCHATMenuIconActivitySend.png', href: '#chat' },
  ];

  const newsSubItems = [
    { name: 'Latest Updates', href: '#news/latest' },
    { name: 'Industry News', href: '#news/industry' },
    { name: 'Press Releases', href: '#news/press' },
    { name: 'Announcements', href: '#news/announcements' },
    { name: 'Blog Posts', href: '#news/blog' },
  ];

  return (
    <aside className="w-64 border-r border-zinc-800 h-screen sticky top-0 flex flex-col flex-shrink-0" style={{ background: 'linear-gradient(to bottom, #001924, #000000)' }}>
      {/* Logo/Header */}
      <div className="p-6 border-b border-zinc-800">
        <img src="/assets/110_HeaderNDM.png" alt="NeedleDrop Media" className="h-8" />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeItem === item.name
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
          
          {/* News Dropdown */}
          <li>
            <button
              onClick={() => setIsNewsOpen(!isNewsOpen)}
              className={`flex items-center justify-between w-full gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeItem.startsWith('News')
                  ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <img src="/assets/009_SidebarMenuMenuIconActivityPaper.png" alt="News" className="w-5 h-5" />
                <span className="font-medium">News</span>
              </div>
              <span className={`transition-transform duration-250 ease-out ${isNewsOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {/* Dropdown Items */}
            <div
              className={`overflow-hidden transition-all duration-250 ease-in-out ${
                isNewsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="mt-2 ml-4 space-y-1">
                {newsSubItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.href}
                      onClick={() => setActiveItem(`News - ${subItem.name}`)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeItem === `News - ${subItem.name}`
                          ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-50'
                          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          
          {/* Settings */}
          <li>
            <Link
              href="#settings"
              onClick={() => setActiveItem('Settings')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeItem === 'Settings'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <img src="/assets/005_SidebarSETTINGSIconActivitySetting.png" alt="Settings" className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
          © 2026 NeedleDrop Media
        </p>
      </div>
    </aside>
  );
}
