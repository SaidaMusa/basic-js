const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = Math.log(2);

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const a = Number(sampleActivity.trim());
  if (!isFinite(a) || a <= 0 || a >= MODERN_ACTIVITY) return false;
  const k = LN2 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / a) / k;
  return Math.ceil(t);
}
module.exports = { dateSample };
