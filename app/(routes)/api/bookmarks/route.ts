import { auxiliaryBookmarks, bookmarks } from '@/app/_config/data/bookmarks';

export async function GET() {
  const data = { bookmarks, auxiliaryBookmarks };
  return Response.json({ data });
}
