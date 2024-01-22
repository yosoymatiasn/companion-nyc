import Image from 'next/image';
import { TBookmark, TCategory } from '../_types/bookmarks';
import Link from 'next/link';
import Sidebar from '../_components/Sidebar';
import { useEffect, useState } from 'react';
import ListBookmarks from './ListBookmarks';

async function getBookmarks(): Promise<{
  bookmarks: TBookmark[];
  auxiliaryBookmarks: TBookmark[];
}> {
  const res = await fetch('http://localhost:3000/api/bookmarks');
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const { bookmarks, auxiliaryBookmarks } = await getBookmarks();

  return (
    <main className=''>
      <div className='mb-10 p-4 border-2 border-black rounded-md'>
        <p className='text-2xl'>
          We&apos;ve all heard it, and it&apos;s true. New York City can be one
          of the most isolating and lonely places to live. I&apos;ve experienced
          it, and I know so many others have. I wanted to share some resources
          that have helped me to beat it and start living life by my terms. I
          hope this website helps.
        </p>
      </div>
      <ListBookmarks
        bookmarks={bookmarks}
        auxiliaryBookmarks={auxiliaryBookmarks}
      />
    </main>
  );
}
