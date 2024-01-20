export type TCategory =
  | 'arts and crafts'
  | 'sports and recreation'
  | 'volunteering and community service'
  | 'bars and nightlife'
  | 'cheap and free events'
  | 'theater and film'
  | 'learning'
  | 'concerts and events';

export type TBookmark = {
  title: string;
  description: string;
  url: string;
  category: TCategory[];
};
