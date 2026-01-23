import { useState } from 'react';
import {
  TimelineAction,
  CharacterInFormation,
  SkillType,
  DamageLogEntry,
} from '../../types';

interface TimelineProps {
  actions: TimelineAction[];
  characters: CharacterInFormation[];
  damageLog: DamageLogEntry[];
  totalDamage: number;
  onAddAction: (action: Omit<TimelineAction, 'id'>) => void;
  onRemoveAction: (actionId: string) => void;
  onClearActions: () => void;
}

export function Timeline({
  actions,
  characters,
  damageLog,
  totalDamage,
  onAddAction,
  onRemoveAction,
  onClearActions,
}: TimelineProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedSkillType, setSelectedSkillType] = useState<SkillType>('ex');
  const [time, setTime] = useState<number>(0);

  const handleAddAction = () => {
    if (!selectedCharacter) return;

    const char = characters.find((c) => c.character.id === selectedCharacter);
    if (!char) return;

    onAddAction({
      time,
      characterId: selectedCharacter,
      skillType: selectedSkillType,
      skillLevel: char.skillLevels[selectedSkillType],
    });
  };

  const sortedActions = [...actions].sort((a, b) => a.time - b.time);

  const getCharacterName = (characterId: string) => {
    const char = characters.find((c) => c.character.id === characterId);
    return char?.character.name || characterId;
  };

  const getSkillName = (characterId: string, skillType: SkillType) => {
    const char = characters.find((c) => c.character.id === characterId);
    return char?.character.skills[skillType].name || skillType;
  };

  const getDamageForAction = (action: TimelineAction) => {
    const entry = damageLog.find(
      (log) =>
        log.time === action.time &&
        log.characterId === action.characterId &&
        log.skillType === action.skillType
    );
    return entry?.damage.expectedDamage;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">タイムライン</h3>
        {actions.length > 0 && (
          <button
            onClick={onClearActions}
            className="text-sm text-red-600 hover:text-red-800"
          >
            クリア
          </button>
        )}
      </div>

      {/* アクション追加フォーム */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">時間(秒)</label>
          <input
            type="number"
            min={0}
            step={1}
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">キャラ</label>
          <select
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          >
            <option value="">選択</option>
            {characters.map((char) => (
              <option key={char.character.id} value={char.character.id}>
                {char.character.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">スキル</label>
          <select
            value={selectedSkillType}
            onChange={(e) => setSelectedSkillType(e.target.value as SkillType)}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          >
            <option value="ex">EX</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleAddAction}
            disabled={!selectedCharacter}
            className="w-full p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            追加
          </button>
        </div>
      </div>

      {/* タイムライン表示 */}
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {sortedActions.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-4">
            タイムラインにスキルを追加してください
          </p>
        ) : (
          sortedActions.map((action) => {
            const damage = getDamageForAction(action);
            return (
              <div
                key={action.id}
                className="flex items-center justify-between bg-gray-50 p-2 rounded"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-gray-600 w-12">
                    {formatTime(action.time)}
                  </span>
                  <span className="text-sm font-medium">
                    {getCharacterName(action.characterId)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {getSkillName(action.characterId, action.skillType)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {damage !== undefined && (
                    <span className="text-sm text-blue-600 font-medium">
                      {Math.floor(damage).toLocaleString()}
                    </span>
                  )}
                  <button
                    onClick={() => onRemoveAction(action.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 合計ダメージ */}
      {totalDamage > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">合計ダメージ</span>
            <span className="text-xl font-bold text-blue-600">
              {Math.floor(totalDamage).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
