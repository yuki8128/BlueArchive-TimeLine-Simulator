import { DamageResult as DamageResultType } from '../../types';

interface DamageResultProps {
  result: DamageResultType | null;
  characterName?: string;
  skillName?: string;
}

export function DamageResult({
  result,
  characterName,
  skillName,
}: DamageResultProps) {
  if (!result) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">ダメージ計算結果</h3>
        <p className="text-gray-500 text-sm">
          キャラクターと敵を選択してダメージを計算してください
        </p>
      </div>
    );
  }

  const formatNumber = (num: number) => Math.floor(num).toLocaleString();
  const formatPercent = (num: number) => `${(num * 100).toFixed(1)}%`;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-700 mb-2">ダメージ計算結果</h3>

      {characterName && skillName && (
        <p className="text-sm text-gray-600 mb-3">
          {characterName} - {skillName}
        </p>
      )}

      {/* メインダメージ表示 */}
      <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white mb-4">
        <div className="text-center">
          <p className="text-sm opacity-80">期待値ダメージ</p>
          <p className="text-3xl font-bold">
            {formatNumber(result.expectedDamage)}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
          <div className="text-center">
            <p className="opacity-80">最小</p>
            <p className="font-medium">{formatNumber(result.minDamage)}</p>
          </div>
          <div className="text-center">
            <p className="opacity-80">最大</p>
            <p className="font-medium">{formatNumber(result.maxDamage)}</p>
          </div>
        </div>
      </div>

      {/* 会心率 */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">会心率</span>
          <span className="font-medium">{formatPercent(result.critRate)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: `${Math.min(result.critRate * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* 計算内訳 */}
      <details className="text-sm">
        <summary className="cursor-pointer text-gray-600 hover:text-gray-800 font-medium">
          計算内訳を表示
        </summary>
        <div className="mt-2 space-y-1 bg-gray-50 p-3 rounded-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">基礎攻撃力</span>
            <span>{formatNumber(result.breakdown.baseAttack)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">バフ後攻撃力</span>
            <span>{formatNumber(result.breakdown.attackAfterBuffs)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">スキル倍率</span>
            <span>×{result.breakdown.skillMultiplier.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ヒット数</span>
            <span>{result.breakdown.hitCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">防御倍率</span>
            <span>÷{result.breakdown.defenseMultiplier.toFixed(3)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">装甲相性</span>
            <span>×{result.breakdown.armorMultiplier.toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">地形適性</span>
            <span>×{result.breakdown.terrainMultiplier.toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">会心ダメージ倍率</span>
            <span>×{result.breakdown.critDamageMultiplier.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">与ダメージ倍率</span>
            <span>×{result.breakdown.damageDealtMultiplier.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">被ダメージ倍率</span>
            <span>×{result.breakdown.damageTakenMultiplier.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">安定値範囲</span>
            <span>
              {(result.breakdown.stabilityRange.min * 100).toFixed(1)}% ~{' '}
              {(result.breakdown.stabilityRange.max * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </details>
    </div>
  );
}
