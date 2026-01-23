import { Enemy } from '../../types';
import { perorodzilla } from './perorodzilla';
import { binah } from './binah';

export const enemies: Enemy[] = [perorodzilla, binah];

export const enemyMap: Record<string, Enemy> = {
  perorodzilla,
  binah,
};

export { perorodzilla, binah };
