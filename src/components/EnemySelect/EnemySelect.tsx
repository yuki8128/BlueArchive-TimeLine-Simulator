import { Enemy } from '../../types';

interface EnemySelectProps {
  enemies: Enemy[];
  selectedEnemy: Enemy | null;
  selectedPhase: number;
  onEnemySelect: (enemy: Enemy | null) => void;
  onPhaseSelect: (phase: number) => void;
}

const armorTypeLabels: Record<string, string> = {
  light: '軽装備',
  heavy: '重装甲',
  special: '特殊装甲',
  elastic: '弾力装甲',
  structure: '構造物',
};

const armorTypeColors: Record<string, string> = {
  light: 'bg-red-400',
  heavy: 'bg-yellow-400',
  special: 'bg-blue-400',
  elastic: 'bg-purple-400',
  structure: 'bg-gray-400',
};

const terrainLabels: Record<string, string> = {
  urban: '市街地',
  outdoor: '屋外',
  indoor: '屋内',
};

export function EnemySelect({
  enemies,
  selectedEnemy,
  selectedPhase,
  onEnemySelect,
  onPhaseSelect,
}: EnemySelectProps) {
  const handleEnemyChange = (enemyId: string) => {
    if (!enemyId) {
      onEnemySelect(null);
      return;
    }

    const enemy = enemies.find((e) => e.id === enemyId);
    if (enemy) {
      onEnemySelect(enemy);
      onPhaseSelect(0);
    }
  };

  const currentPhase = selectedEnemy?.phases[selectedPhase];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        敵（ボス）選択
      </label>
      <select
        value={selectedEnemy?.id || ''}
        onChange={(e) => handleEnemyChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">-- 選択してください --</option>
        {enemies.map((enemy) => (
          <option key={enemy.id} value={enemy.id}>
            {enemy.name} ({enemy.difficulty})
          </option>
        ))}
      </select>

      {selectedEnemy && (
        <div className="mt-4 space-y-3">
          {/* 敵情報 */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`px-2 py-1 text-xs text-white rounded ${
                armorTypeColors[selectedEnemy.armorType]
              }`}
            >
              {armorTypeLabels[selectedEnemy.armorType]}
            </span>
            <span className="px-2 py-1 text-xs bg-gray-200 rounded">
              {terrainLabels[selectedEnemy.terrain]}
            </span>
            <span className="px-2 py-1 text-xs bg-gray-800 text-white rounded">
              {selectedEnemy.difficulty}
            </span>
          </div>

          {/* フェーズ選択 */}
          {selectedEnemy.phases.length > 1 && (
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                フェーズ選択
              </label>
              <select
                value={selectedPhase}
                onChange={(e) => onPhaseSelect(parseInt(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                {selectedEnemy.phases.map((phase, index) => (
                  <option key={index} value={index}>
                    {phase.name || `Phase ${index + 1}`}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* フェーズ詳細 */}
          {currentPhase && (
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">HP:</span>{' '}
                <span className="font-medium">
                  {currentPhase.hp.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-gray-500">防御力:</span>{' '}
                <span className="font-medium">
                  {currentPhase.defense.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-gray-500">レベル:</span>{' '}
                <span className="font-medium">{currentPhase.level}</span>
              </div>
              <div>
                <span className="text-gray-500">会心抵抗:</span>{' '}
                <span className="font-medium">{currentPhase.critResist}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">会心ダメージ抵抗:</span>{' '}
                <span className="font-medium">
                  {currentPhase.critDamageResist}%
                </span>
              </div>
            </div>
          )}

          {/* ギミック情報 */}
          {selectedEnemy.gimmicks && selectedEnemy.gimmicks.length > 0 && (
            <div className="bg-yellow-50 p-2 rounded">
              <p className="text-sm font-medium text-yellow-800 mb-1">
                ギミック
              </p>
              {selectedEnemy.gimmicks.map((gimmick) => (
                <div key={gimmick.id} className="text-xs text-yellow-700">
                  <span className="font-medium">{gimmick.name}:</span>{' '}
                  {gimmick.description}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
