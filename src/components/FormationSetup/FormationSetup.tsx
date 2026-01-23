import { useState } from 'react';
import { Character, CharacterInFormation, SkillType } from '../../types';
import { CharacterEditor } from '../CharacterEditor';

interface FormationSetupProps {
  strikerCharacters: Character[];
  specialCharacters: Character[];
  strikers: (CharacterInFormation | null)[];
  specials: (CharacterInFormation | null)[];
  onStrikerChange: (index: number, char: CharacterInFormation | null) => void;
  onSpecialChange: (index: number, char: CharacterInFormation | null) => void;
}

const DEFAULT_SKILL_LEVELS = {
  ex: 5,
  normal: 10,
  passive: 10,
  sub: 10,
};

const attackTypeColors: Record<string, string> = {
  explosive: 'bg-red-500',
  piercing: 'bg-yellow-500',
  mystic: 'bg-blue-500',
  sonic: 'bg-purple-500',
  normal: 'bg-gray-500',
};

const attackTypeLabels: Record<string, string> = {
  explosive: '爆発',
  piercing: '貫通',
  mystic: '神秘',
  sonic: '振動',
  normal: 'ノーマル',
};

function CharacterSlot({
  characters,
  selected,
  onSelect,
  label,
}: {
  characters: Character[];
  selected: CharacterInFormation | null;
  onSelect: (char: CharacterInFormation | null) => void;
  label: string;
}) {
  const [showEditor, setShowEditor] = useState(false);

  const handleChange = (characterId: string) => {
    if (!characterId) {
      onSelect(null);
      return;
    }
    const character = characters.find((c) => c.id === characterId);
    if (character) {
      onSelect({
        character,
        skillLevels: { ...DEFAULT_SKILL_LEVELS },
        level: 90,
        starLevel: character.rarity,
        bond: 50,
      });
    }
  };

  const handleSkillLevelChange = (skillType: SkillType, level: number) => {
    if (!selected) return;
    onSelect({
      ...selected,
      skillLevels: {
        ...selected.skillLevels,
        [skillType]: level,
      },
    });
  };

  // 実効ステータスを取得
  const getEffectiveStat = (statKey: keyof CharacterInFormation['character']['baseStats']): number => {
    if (!selected) return 0;
    const base = selected.character.baseStats[statKey];
    const override = selected.statOverrides?.[statKey] ?? 0;
    return base + override;
  };

  return (
    <div className="border border-gray-200 rounded-lg p-3 bg-white">
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs text-gray-500">{label}</label>
        {selected && (
          <button
            onClick={() => setShowEditor(true)}
            className="text-xs text-blue-500 hover:text-blue-700"
          >
            編集
          </button>
        )}
      </div>
      <select
        value={selected?.character.id || ''}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-sm mb-2"
      >
        <option value="">-- 未選択 --</option>
        {characters.map((char) => (
          <option key={char.id} value={char.id}>
            {char.name} ({attackTypeLabels[char.attackType]})
          </option>
        ))}
      </select>

      {selected && (
        <div className="space-y-2">
          {/* キャラクター情報 */}
          <div className="flex items-center gap-1 flex-wrap">
            <span
              className={`px-1.5 py-0.5 text-xs text-white rounded ${
                attackTypeColors[selected.character.attackType]
              }`}
            >
              {attackTypeLabels[selected.character.attackType]}
            </span>
            <span className="text-xs text-gray-500">
              ATK: {getEffectiveStat('attack').toLocaleString()}
            </span>
            {selected.statOverrides && Object.keys(selected.statOverrides).length > 0 && (
              <span className="text-xs text-blue-500">*補正あり</span>
            )}
          </div>

          {/* スキルレベル設定 */}
          <div className="grid grid-cols-2 gap-1 text-xs">
            {(['ex', 'normal', 'passive', 'sub'] as SkillType[]).map(
              (skillType) => (
                <div key={skillType} className="flex items-center gap-1">
                  <label className="text-gray-500 w-8 uppercase">
                    {skillType === 'passive' ? 'PS' : skillType === 'normal' ? 'NS' : skillType === 'sub' ? 'SS' : 'EX'}:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={skillType === 'ex' ? 5 : 10}
                    value={selected.skillLevels[skillType]}
                    onChange={(e) =>
                      handleSkillLevelChange(
                        skillType,
                        parseInt(e.target.value) || 1
                      )
                    }
                    className="w-12 p-1 text-xs border border-gray-300 rounded text-center"
                  />
                </div>
              )
            )}
          </div>

          {/* EXスキル情報 */}
          <div className="text-xs bg-gray-50 p-1.5 rounded">
            <span className="font-medium">{selected.character.skills.ex.name}</span>
            <span className="text-gray-500 ml-1">
              (Cost: {selected.character.skills.ex.cost})
            </span>
          </div>
        </div>
      )}

      {/* 編集モーダル */}
      {showEditor && selected && (
        <CharacterEditor
          character={selected}
          onChange={onSelect}
          onClose={() => setShowEditor(false)}
        />
      )}
    </div>
  );
}

export function FormationSetup({
  strikerCharacters,
  specialCharacters,
  strikers,
  specials,
  onStrikerChange,
  onSpecialChange,
}: FormationSetupProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-3">パーティー編成</h2>

      {/* ストライカー */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
          <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded">STRIKER</span>
          <span className="text-gray-400">(前衛4枠)</span>
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((index) => (
            <CharacterSlot
              key={`striker_${index}`}
              characters={strikerCharacters}
              selected={strikers[index]}
              onSelect={(char) => onStrikerChange(index, char)}
              label={`#${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* スペシャル */}
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
          <span className="px-2 py-0.5 bg-yellow-500 text-white text-xs rounded">SPECIAL</span>
          <span className="text-gray-400">(後衛2枠)</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1].map((index) => (
            <CharacterSlot
              key={`special_${index}`}
              characters={specialCharacters}
              selected={specials[index]}
              onSelect={(char) => onSpecialChange(index, char)}
              label={`#${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
