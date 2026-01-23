import { Character, CharacterInFormation, SkillType } from '../../types';

interface CharacterSelectProps {
  characters: Character[];
  selectedCharacter: CharacterInFormation | null;
  onSelect: (character: CharacterInFormation | null) => void;
  label?: string;
}

const DEFAULT_SKILL_LEVELS = {
  ex: 5,
  normal: 10,
  passive: 10,
  sub: 10,
};

export function CharacterSelect({
  characters,
  selectedCharacter,
  onSelect,
  label = 'キャラクター選択',
}: CharacterSelectProps) {
  const handleCharacterChange = (characterId: string) => {
    if (!characterId) {
      onSelect(null);
      return;
    }

    const character = characters.find((c) => c.id === characterId);
    if (character) {
      onSelect({
        character,
        skillLevels: { ...DEFAULT_SKILL_LEVELS },
      });
    }
  };

  const handleSkillLevelChange = (skillType: SkillType, level: number) => {
    if (!selectedCharacter) return;

    onSelect({
      ...selectedCharacter,
      skillLevels: {
        ...selectedCharacter.skillLevels,
        [skillType]: level,
      },
    });
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

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={selectedCharacter?.character.id || ''}
        onChange={(e) => handleCharacterChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">-- 選択してください --</option>
        {characters.map((character) => (
          <option key={character.id} value={character.id}>
            {character.name} ({attackTypeLabels[character.attackType]})
          </option>
        ))}
      </select>

      {selectedCharacter && (
        <div className="mt-4 space-y-3">
          {/* キャラクター情報 */}
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 text-xs text-white rounded ${
                attackTypeColors[selectedCharacter.character.attackType]
              }`}
            >
              {attackTypeLabels[selectedCharacter.character.attackType]}
            </span>
            <span className="text-sm text-gray-600">
              {selectedCharacter.character.role === 'striker'
                ? 'ストライカー'
                : 'スペシャル'}
            </span>
          </div>

          {/* ステータス表示 */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">攻撃力:</span>{' '}
              <span className="font-medium">
                {selectedCharacter.character.baseStats.attack.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-gray-500">会心値:</span>{' '}
              <span className="font-medium">
                {selectedCharacter.character.baseStats.criticalValue}
              </span>
            </div>
            <div>
              <span className="text-gray-500">会心ダメージ:</span>{' '}
              <span className="font-medium">
                {selectedCharacter.character.baseStats.criticalDamage}%
              </span>
            </div>
            <div>
              <span className="text-gray-500">安定値:</span>{' '}
              <span className="font-medium">
                {selectedCharacter.character.baseStats.stability}
              </span>
            </div>
          </div>

          {/* 地形適性 */}
          <div className="flex gap-2 text-sm">
            <span className="text-gray-500">地形適性:</span>
            <span>屋外: {selectedCharacter.character.terrain.outdoor}</span>
            <span>市街地: {selectedCharacter.character.terrain.urban}</span>
            <span>屋内: {selectedCharacter.character.terrain.indoor}</span>
          </div>

          {/* スキルレベル設定 */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">スキルレベル</p>
            <div className="grid grid-cols-2 gap-2">
              {(['ex', 'normal', 'passive', 'sub'] as SkillType[]).map(
                (skillType) => (
                  <div key={skillType} className="flex items-center gap-2">
                    <label className="text-xs text-gray-600 w-16">
                      {skillType.toUpperCase()}:
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={skillType === 'ex' ? 5 : 10}
                      value={selectedCharacter.skillLevels[skillType]}
                      onChange={(e) =>
                        handleSkillLevelChange(
                          skillType,
                          parseInt(e.target.value) || 1
                        )
                      }
                      className="w-16 p-1 text-sm border border-gray-300 rounded"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* EXスキル情報 */}
          <div className="bg-gray-50 p-2 rounded text-sm">
            <p className="font-medium text-gray-700">
              {selectedCharacter.character.skills.ex.name}
            </p>
            <p className="text-gray-500 text-xs">
              コスト: {selectedCharacter.character.skills.ex.cost}
            </p>
            <p className="text-gray-500 text-xs">
              {selectedCharacter.character.skills.ex.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
