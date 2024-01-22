import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Arts and crafts';

export const artsAndCraftsBookmarks: TBookmark[] = [
  {
    title: 'Painting Lounge',
    description:
      'Painting Lounge has studios in Williamsburg, Chelsea, Midtown, and Harlem. They host classes where you can bring your own drinks and snacks, and learn to paint. Fun right?',
    url: 'https://www.rezclick.com/paintinglounge/',
    categories: [category],
  },
];

export const artsAndCraftsAuxiliaryBookmarks: TBookmark[] = [];
