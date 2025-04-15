import Link from 'next/link'
import Image from 'next/image';
import { faSearch, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



type NavItem = {
    label: string;
    href: string;
  };
  
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'TV Show', href: '/tv-shows' },
    { label: 'New & Popular', href: '/new-popular' },
    { label: 'My List', href: '/my-list' },
    { label: 'Browse by Languages', href: '/languages' },
  ];

export default function Navbar() {
    return (
        <div className='flex justify-between px-12 py-4'>
            <div className='flex items-center gap-8'>
                <Image
                    src="/Vector.png" 
                    height={144} 
                    width={139} 
                    alt="Logo App"
                />            
                <div className='flex gap-4'>
                    {navItems.map((item) => (
                        <Link href={item.href}>{item.label}</Link>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4 text-white'>
                <FontAwesomeIcon icon={faSearch}/> 
                <Link href="/">Kids</Link>       
                <FontAwesomeIcon icon={faBell}/> 
                <div className='flex items-center gap-2'>
                    <div className='bg-gray-400 w-8 h-8 rounded-sm'/>
                    <FontAwesomeIcon icon={faCaretDown}/>

                </div>
            </div>
        </div>
    );
}
