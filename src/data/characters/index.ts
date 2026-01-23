import { Character } from '../../types';

// Mystic (神秘)
import { mika } from './mika';
import { nagisa } from './nagisa';
import { hoshinoSwimsuit } from './hoshino_swimsuit';

// Explosive (爆発)
import { aru } from './aru';
import { hina } from './hina';
import { wakamo } from './wakamo';
import { kayoko } from './kayoko';
import { shiroko } from './shiroko';

// Piercing (貫通)
import { iori } from './iori';

// Support (スペシャル)
import { himari } from './himari';
import { ako } from './ako';
import { kotama } from './kotama';
import { ui } from './ui';

export const characters: Character[] = [
  // Mystic Strikers
  mika,
  nagisa,
  hoshinoSwimsuit,
  // Explosive Strikers
  aru,
  hina,
  wakamo,
  kayoko,
  shiroko,
  // Piercing Strikers
  iori,
  // Specials
  himari,
  ako,
  kotama,
  ui,
];

export const characterMap: Record<string, Character> = {
  mika,
  nagisa,
  hoshino_swimsuit: hoshinoSwimsuit,
  aru,
  hina,
  wakamo,
  kayoko,
  shiroko,
  iori,
  himari,
  ako,
  kotama,
  ui,
};

export {
  mika,
  nagisa,
  hoshinoSwimsuit,
  aru,
  hina,
  wakamo,
  kayoko,
  shiroko,
  iori,
  himari,
  ako,
  kotama,
  ui,
};
