import { TBookmark } from '../_types/bookmarks';

const template: TBookmark = {
  title: 'title',
  description: 'description',
  url: 'url',
  category: [],
};

export const bookmarks: TBookmark[] = [
  {
    title: 'The Skint',
    description:
      'The Skint posts a weekly roundup of free and cheap things to do in the city. This is an amazing resource you can check once a week and find interesting activities.',
    url: 'https://www.theskint.com/',
    category: ['cheap and free events'],
  },
  {
    title: 'Cool Stuff NYC',
    description:
      'Here you find carefully curated guides to different neighborhoods in the city.',
    url: 'https://www.coolstuff.nyc/guides',
    category: ['cheap and free events'],
  },
  {
    title: 'Do NYC',
    description:
      'Do NYC posts all types of events and concerts going on in the city on a daily basis.',
    url: 'https://donyc.com/',
    category: ['concerts and events'],
  },
];
