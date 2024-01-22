export type TCategory =
  | 'Arts and crafts'
  | 'Sports and recreation'
  | 'Volunteering and community service'
  | 'Bars and nightlife'
  | 'Cheap and free events'
  | 'Theater and film'
  | 'Learning'
  | 'Concerts and events'
  | 'Tools';

export type TBookmark = {
  title: string;
  description: string;
  url: string;
  categories: TCategory[];
};
