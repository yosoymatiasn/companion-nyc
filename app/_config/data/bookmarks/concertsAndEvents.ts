import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Concerts and events';

export const concertsAndEventsBookmarks: TBookmark[] = [
  {
    title: 'Do NYC',
    description:
      'Do NYC posts all types of events and concerts going on in the city on a daily basis.',
    url: 'https://donyc.com/',
    categories: [category],
  },
];

export const concertsAndEventsAuxiliaryBookmarks: TBookmark[] = [];
