import { useEffect, useRef } from 'react';
import { TBookmark } from '../_types/bookmarks';
import Link from 'next/link';
import { useDisableBodyScroll } from '../_hooks/useDisableBodyScroll';

type Props = {
  isOpen: boolean;
  setIsOpen: (_: boolean) => void;
  bookmark: TBookmark | null;
};

const Sidebar = ({ isOpen, setIsOpen, bookmark }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useDisableBodyScroll(isOpen);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [ref]);

  if (!bookmark) return null;
  const { title, description, url } = bookmark;

  const className = `${isOpen ? 'translate-x-0' : '-translate-x-full'}`;
  return (
    <div
      className={`${className} fixed top-0 left-0 h-screen w-screen bg-black/40`}
    >
      <div
        ref={ref}
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform p-8 fixed flex justify-center bg top-0 left-0 bg-white h-screen w-96 shadow-xl`}
      >
        <div className='flex flex-col gap-2'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={url} target='_blank'>
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
