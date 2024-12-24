import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Dropdown from './UserItems';
import { useCurrentUser } from '@/hooks/use-current-user';
import logout from '@/lib/logout';
import Router from 'next/router';

type UserRole = 'REGULAR' | 'donor' | 'admin';

interface UserData {
  name: string;
  role: UserRole;
  avatar: string;
}

const defaultUser: UserData = {
  name: 'Loading...',
  role: 'REGULAR',
  avatar: '/avatar.png',
};

export default function Navbar() {
  const fetchedUser = useCurrentUser();
  const [user, setUser] = useState<UserData>(defaultUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (fetchedUser) {
      setUser({
        name: fetchedUser.name || 'Anonymous',
        role: (fetchedUser.role || 'REGULAR') as UserRole,
        avatar: fetchedUser.image || '/avatar.png',
      });
    }
  }, [fetchedUser]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(defaultUser); // Reset to default state after logout
      closeDropdown();
      Router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const dropdownOptions = [
    { label: 'Update Profile', onClick: () => Router.push('/profile') },
    { label: 'Privacy Policy', onClick: () => alert('Privacy Policy') },
    { label: 'About', onClick: () => alert('About') },
    { label: 'Terms of Service', onClick: () => alert('Terms of Service') },
    { label: 'Logout', onClick: handleLogout },
  ];

  return (
    <nav className="flex items-center justify-between p-4 relative">
      <div className="flex items-center gap-6 w-full justify-end">
        {/* User Info */}
        <div className="flex flex-col text-right">
          <span className="text-xs leading-3 font-medium">{user.name}</span>
          <span className="text-[10px] text-gray-500 capitalize">{user.role}</span>
        </div>

        {/* Avatar and Dropdown */}
        <div className="relative">
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          <Dropdown isOpen={dropdownOpen} options={dropdownOptions} onClose={closeDropdown} />
        </div>
      </div>
    </nav>
  );
}
