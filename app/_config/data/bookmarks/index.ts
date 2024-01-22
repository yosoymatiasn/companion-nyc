import {
  artsAndCraftsAuxiliaryBookmarks,
  artsAndCraftsBookmarks,
} from './artsAndCrafts';
import {
  concertsAndEventsAuxiliaryBookmarks,
  concertsAndEventsBookmarks,
} from './concertsAndEvents';
import {
  cheapEventsAuxiliaryBookmarks,
  cheapEventsBookmarks,
} from './cheapEvents';
import {
  sportAndRecreationAuxiliaryBookmarks,
  sportsAndRecreationBookmarks,
} from './sportsAndRecreation';
import {
  volunteeringAndServiceAuxiliaryBookmarks,
  volunteeringAndServiceBookmarks,
} from './volunteeringAndServices';
import { learningAuxiliaryBookmarks, learningBookmarks } from './learning';
import {
  barsAndNighlifeBookmarks,
  barsAndNightlifeAuxiliaryBookmarks,
} from './barsAndNightlife';
import {
  theaterAndFilmAuxiliaryBookmarks,
  theaterAndFilmBookmarks,
} from './theaterAndFilm';

export const bookmarks = [
  ...cheapEventsBookmarks,
  ...sportsAndRecreationBookmarks,
  ...artsAndCraftsBookmarks,
  ...volunteeringAndServiceBookmarks,
  ...concertsAndEventsBookmarks,
  ...learningBookmarks,
  ...barsAndNighlifeBookmarks,
  ...theaterAndFilmBookmarks,
];

export const auxiliaryBookmarks = [
  ...cheapEventsAuxiliaryBookmarks,
  ...sportAndRecreationAuxiliaryBookmarks,
  ...artsAndCraftsAuxiliaryBookmarks,
  ...volunteeringAndServiceAuxiliaryBookmarks,
  ...concertsAndEventsAuxiliaryBookmarks,
  ...learningAuxiliaryBookmarks,
  ...barsAndNightlifeAuxiliaryBookmarks,
  ...theaterAndFilmAuxiliaryBookmarks,
];

export const lifeSystemToolBookmarks = [];
