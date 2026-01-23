import { useState, useMemo, useCallback } from 'react';
import {
  CharacterSelect,
  EnemySelect,
  DamageResult,
  Timeline,
} from './components';
import { characters } from './data/characters';
import { enemies } from './data/enemies';
import {
  CharacterInFormation,
  Enemy,
  TimelineAction,
  DamageResult as DamageResultType,
  SkillType,
} from './types';
import { calculateDamage, runTimeline } from './engine';

function App() {
  // 選択されたキャラクター（最大4ストライカー + 2スペシャル）
  const [selectedStrikers, setSelectedStrikers] = useState<
    (CharacterInFormation | null)[]
  >([null, null, null, null]);
  const [selectedSpecials, setSelectedSpecials] = useState<
    (CharacterInFormation | null)[]
  >([null, null]);

  // 選択された敵
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [selectedPhase, setSelectedPhase] = useState(0);

  // タイムラインアクション
  const [timelineActions, setTimelineActions] = useState<TimelineAction[]>([]);

  // 単発ダメージ計算用の選択
  const [calcCharacter, setCalcCharacter] =
    useState<CharacterInFormation | null>(null);
  const [calcSkillType, setCalcSkillType] = useState<SkillType>('ex');

  // 編成内のすべてのキャラクター
  const allCharacters = useMemo(() => {
    return [
      ...selectedStrikers.filter((c): c is CharacterInFormation => c !== null),
      ...selectedSpecials.filter((c): c is CharacterInFormation => c !== null),
    ];
  }, [selectedStrikers, selectedSpecials]);

  // ストライカーの更新
  const handleStrikerChange = (
    index: number,
    char: CharacterInFormation | null
  ) => {
    setSelectedStrikers((prev) => {
      const updated = [...prev];
      updated[index] = char;
      return updated;
    });
  };

  // スペシャルの更新
  const handleSpecialChange = (
    index: number,
    char: CharacterInFormation | null
  ) => {
    setSelectedSpecials((prev) => {
      const updated = [...prev];
      updated[index] = char;
      return updated;
    });
  };

  // タイムラインアクションの追加
  const handleAddAction = useCallback(
    (action: Omit<TimelineAction, 'id'>) => {
      const newAction: TimelineAction = {
        ...action,
        id: `action_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      };
      setTimelineActions((prev) => [...prev, newAction]);
    },
    []
  );

  // タイムラインアクションの削除
  const handleRemoveAction = useCallback((actionId: string) => {
    setTimelineActions((prev) => prev.filter((a) => a.id !== actionId));
  }, []);

  // タイムラインのクリア
  const handleClearActions = useCallback(() => {
    setTimelineActions([]);
  }, []);

  // 単発ダメージ計算
  const singleDamageResult = useMemo<DamageResultType | null>(() => {
    if (!calcCharacter || !selectedEnemy) return null;

    const skill = calcCharacter.character.skills[calcSkillType];
    const skillLevel = calcCharacter.skillLevels[calcSkillType];
    const phase = selectedEnemy.phases[selectedPhase];

    try {
      return calculateDamage(
        calcCharacter.character,
        skill,
        skillLevel,
        selectedEnemy,
        phase,
        [],
        90
      );
    } catch {
      return null;
    }
  }, [calcCharacter, calcSkillType, selectedEnemy, selectedPhase]);

  // タイムラインシミュレーション結果
  const simulationResult = useMemo(() => {
    if (allCharacters.length === 0 || !selectedEnemy) return null;

    const formation = {
      strikers: selectedStrikers,
      specials: selectedSpecials,
    };

    return runTimeline(
      formation,
      selectedEnemy,
      selectedPhase,
      timelineActions
    );
  }, [
    allCharacters,
    selectedEnemy,
    selectedPhase,
    selectedStrikers,
    selectedSpecials,
    timelineActions,
  ]);

  // フィルタリング用: ストライカー/スペシャルキャラのみ
  const strikerCharacters = characters.filter((c) => c.role === 'striker');
  const specialCharacters = characters.filter((c) => c.role === 'special');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">
            ブルーアーカイブ タイムラインシミュレーター
          </h1>
          <p className="text-sm opacity-80">
            総力戦/大決戦のダメージ計算シミュレーター
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左カラム: 編成 */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2">
              編成
            </h2>

            {/* ストライカー */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                ストライカー (1-4)
              </h3>
              <div className="space-y-2">
                {[0, 1, 2, 3].map((index) => (
                  <CharacterSelect
                    key={`striker_${index}`}
                    characters={strikerCharacters}
                    selectedCharacter={selectedStrikers[index]}
                    onSelect={(char) => handleStrikerChange(index, char)}
                    label={`ストライカー ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* スペシャル */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                スペシャル (1-2)
              </h3>
              <div className="space-y-2">
                {[0, 1].map((index) => (
                  <CharacterSelect
                    key={`special_${index}`}
                    characters={specialCharacters}
                    selectedCharacter={selectedSpecials[index]}
                    onSelect={(char) => handleSpecialChange(index, char)}
                    label={`スペシャル ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 中央カラム: 敵選択 & 単発ダメージ計算 */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2">
              敵 & ダメージ計算
            </h2>

            <EnemySelect
              enemies={enemies}
              selectedEnemy={selectedEnemy}
              selectedPhase={selectedPhase}
              onEnemySelect={setSelectedEnemy}
              onPhaseSelect={setSelectedPhase}
            />

            {/* 単発ダメージ計算 */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                単発ダメージ計算
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    キャラクター
                  </label>
                  <select
                    value={calcCharacter?.character.id || ''}
                    onChange={(e) => {
                      const char = allCharacters.find(
                        (c) => c.character.id === e.target.value
                      );
                      setCalcCharacter(char || null);
                    }}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  >
                    <option value="">選択</option>
                    {allCharacters.map((char) => (
                      <option
                        key={char.character.id}
                        value={char.character.id}
                      >
                        {char.character.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    スキルタイプ
                  </label>
                  <select
                    value={calcSkillType}
                    onChange={(e) =>
                      setCalcSkillType(e.target.value as SkillType)
                    }
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  >
                    <option value="ex">EXスキル</option>
                    <option value="normal">ノーマルスキル</option>
                  </select>
                </div>
              </div>
            </div>

            <DamageResult
              result={singleDamageResult}
              characterName={calcCharacter?.character.name}
              skillName={
                calcCharacter?.character.skills[calcSkillType].name
              }
            />
          </div>

          {/* 右カラム: タイムライン */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2">
              タイムライン
            </h2>

            <Timeline
              actions={timelineActions}
              characters={allCharacters}
              damageLog={simulationResult?.damageLog || []}
              totalDamage={simulationResult?.totalDamage || 0}
              onAddAction={handleAddAction}
              onRemoveAction={handleRemoveAction}
              onClearActions={handleClearActions}
            />

            {/* コスト情報 */}
            {simulationResult && (
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  コスト情報
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">最大コスト:</span>{' '}
                    <span className="font-medium">
                      {simulationResult.maxCost.toFixed(1)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">回復速度:</span>{' '}
                    <span className="font-medium">
                      {simulationResult.costRecoveryRate.toFixed(3)}/秒
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">1コスト回復時間:</span>{' '}
                    <span className="font-medium">
                      {(1 / simulationResult.costRecoveryRate).toFixed(2)}秒
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-400 text-sm py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            データ参考:{' '}
            <a
              href="https://schaledb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              SchaleDB
            </a>
            {' | '}
            <a
              href="https://zenn.dev/1m_lcei/books/b380b976c908d9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              ダメージ計算の仕組み
            </a>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            This is a fan-made tool. Blue Archive is a trademark of NEXON Games
            Co., Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
