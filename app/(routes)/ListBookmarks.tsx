'use client';

import Link from 'next/link';
import { TBookmark, TCategory } from '../_types/bookmarks';
import Sidebar from '../_components/Sidebar';
import { useState } from 'react';

type Props = {
  bookmarks: TBookmark[];
  auxiliaryBookmarks: TBookmark[];
};

const ListBookmarks = ({ bookmarks, auxiliaryBookmarks }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState<TBookmark | null>(null);

  const getBookmarksFromCategory = (
    bookmarks: TBookmark[],
    category: TCategory
  ) => {
    return bookmarks.filter((bookmark) =>
      bookmark.categories.includes(category)
    );
  };

  const listCategory = (category: TCategory) => {
    const theseBookmarks = getBookmarksFromCategory(bookmarks, category);
    const theseAuxiliaryBookmarks = getBookmarksFromCategory(
      auxiliaryBookmarks,
      category
    );

    return (
      <div className=''>
        <h2 className=''>{category}</h2>

        <div className='ml-4 flex'>
          <div className='flex gap-2 w-3/4'>
            {theseBookmarks.map((bookmark) => (
              <Link
                key={bookmark.title}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSidebarOpen(true);
                  setActiveBookmark(bookmark);
                }}
                href={bookmark.url}
                target='_blank'
                className='p-4 flex justify-center items-center w-32 h-32 rounded-md border border-black'
              >
                <h4 className='text-center'>{bookmark.title}</h4>
              </Link>
            ))}
          </div>

          {theseAuxiliaryBookmarks.length > 0 ? (
            <div className='ml-8 pl-4 border-l border-black w-1/4'>
              <h3>Related links</h3>
              <div className='flex flex-col gap-4'>
                {theseAuxiliaryBookmarks.map(
                  ({ title, url, description }, id) => (
                    <div
                      key={title}
                      className='p-2 rounded-md border border-black'
                    >
                      <Link href={url} target='_blank'>
                        <h4 className='m-0'>{title}</h4>
                      </Link>{' '}
                    </div>
                  )
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        bookmark={activeBookmark}
      />
      <div className='flex flex-col gap-8'>
        {listCategory('Volunteering and community service')}
        {listCategory('Cheap and free events')}
        {listCategory('Sports and recreation')}
        {listCategory('Learning')}
        {/* {listCategory('Theater and film')} */}
        {listCategory('Concerts and events')}
        {listCategory('Arts and crafts')}
        {listCategory('Bars and nightlife')}
      </div>
    </div>
  );
};

export default ListBookmarks;
