import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Bars and nightlife';

export const barsAndNighlifeBookmarks: TBookmark[] = [
  {
    title: 'NYC Trivia League',
    description:
      'NYC Trivia League hosts trivia nights on just about every weekdays at different bars all across the city. Check their website and find a time and a place that works for you.',
    url: 'https://nyctrivialeague.com/',
    categories: [category],
  },
];

export const barsAndNightlifeAuxiliaryBookmarks: TBookmark[] = [];
