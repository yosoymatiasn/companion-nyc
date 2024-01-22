import { TBookmark, TCategory } from '../../../_types/bookmarks';

/*
        {
          title: 'title',
          description: 'description',
          url: 'url',
          categories: [category],
        }

  */

const category: TCategory = 'Volunteering and community service';

export const volunteeringAndServiceBookmarks: TBookmark[] = [
  {
    title: 'New York Cares',
    description:
      'New York Cares works with many different non profit organizations to provide volunteers. Sign up with them and search for the type of service that speaks to you. This is an amazing way to lend a hand and be a part of something bigger.',
    url: 'https://www.newyorkcares.org/home',
    categories: [category],
  },
  {
    title: 'Best Buddies',
    description:
      'New York Cares works with many different non profit organizations to provide volunteers. Sign up with them and search for the type of service that speaks to you. This is an amazing way to lend a hand and be a part of something bigger.',
    url: 'https://www.bestbuddies.org/newyork/volunteer/',
    categories: [category],
  },
  {
    title: 'Volunteer New York',
    description:
      'New York Cares works with many different non profit organizations to provide volunteers. Sign up with them and search for the type of service that speaks to you. This is an amazing way to lend a hand and be a part of something bigger.',
    url: 'https://www.volunteernewyork.org/',
    categories: [category],
  },
  {
    title: 'NYC.gov',
    description:
      'New York Cares works with many different non profit organizations to provide volunteers. Sign up with them and search for the type of service that speaks to you. This is an amazing way to lend a hand and be a part of something bigger.',
    url: 'https://portal.311.nyc.gov/article/?kanumber=KA-01392',
    categories: [category],
  },
];

export const volunteeringAndServiceAuxiliaryBookmarks: TBookmark[] = [
  {
    title: 'Reddit',
    description:
      "Learn from others' experiences volunteering in New York City.",
    url: 'https://www.reddit.com/r/AskNYC/comments/vdwg8v/what_have_been_your_favorite_volunteer/',
    categories: [category],
  },
];
