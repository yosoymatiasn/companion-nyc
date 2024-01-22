import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Sports and recreation';

export const sportsAndRecreationBookmarks: TBookmark[] = [
  {
    title: 'Volo Sports',
    description:
      'Volo sports is a sport and recreation league organization. You can sign up and join one-off games or leagues. Join or create teams.',
    url: 'https://www.volosports.com/',
    categories: [category],
  },
];

export const sportAndRecreationAuxiliaryBookmarks: TBookmark[] = [];
