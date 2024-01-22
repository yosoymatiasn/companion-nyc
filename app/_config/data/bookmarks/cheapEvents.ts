import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Cheap and free events';

export const cheapEventsBookmarks: TBookmark[] = [
  {
    title: 'The Skint',
    description:
      'The Skint posts a weekly roundup of free and cheap things to do in the city. This is an amazing resource you can check once a week and find interesting activities.',
    url: 'https://www.theskint.com/',
    categories: [category],
  },
  {
    title: 'Cool Stuff NYC',
    description:
      'Here you find carefully curated guides to different neighborhoods in the city.',
    url: 'https://www.coolstuff.nyc/guides',
    categories: [category],
  },
];

export const cheapEventsAuxiliaryBookmarks: TBookmark[] = [];
