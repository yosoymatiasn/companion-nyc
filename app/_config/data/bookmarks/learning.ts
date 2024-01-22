import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Learning';

export const learningBookmarks: TBookmark[] = [
  {
    title: 'Brooklyn Brainery!',
    description:
      'Brooklyn Brainery hosts classes of all types. These are a great way to learn something new and meet like minded people along the way.',
    url: 'https://brooklynbrainery.com/courses',
    categories: [category],
  },
];

export const learningAuxiliaryBookmarks: TBookmark[] = [];
