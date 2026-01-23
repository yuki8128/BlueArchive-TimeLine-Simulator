import { Character } from '../../types';
import { mika } from './mika';
import { aru } from './aru';
import { himari } from './himari';

export const characters: Character[] = [mika, aru, himari];

export const characterMap: Record<string, Character> = {
  mika,
  aru,
  himari,
};

export { mika, aru, himari };
