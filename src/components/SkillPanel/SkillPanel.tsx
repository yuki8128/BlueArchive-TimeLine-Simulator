import { CharacterInFormation, SkillType } from '../../types';

interface SkillPanelProps {
  character: CharacterInFormation;
  onUseSkill: (skillType: SkillType, time: number) => void;
  currentCost: number;
  currentTime: number;
}

export function SkillPanel({
  character,
  onUseSkill,
  currentCost,
  currentTime,
}: SkillPanelProps) {
  const exSkill = character.character.skills.ex;
  const canUseEx = currentCost >= (exSkill.cost || 0);

  return (
    <div className="bg-white rounded-lg shadow p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-700">
          {character.character.name}
        </span>
        <span className="text-xs text-gray-500">
          EX Lv.{character.skillLevels.ex}
        </span>
      </div>

      <button
        onClick={() => onUseSkill('ex', currentTime)}
        disabled={!canUseEx}
        className={`w-full p-2 rounded text-sm font-medium transition-colors ${
          canUseEx
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        <div className="flex justify-between items-center">
          <span>{exSkill.name}</span>
          <span className="text-xs opacity-80">
            Cost: {exSkill.cost}
          </span>
        </div>
      </button>
    </div>
  );
}
