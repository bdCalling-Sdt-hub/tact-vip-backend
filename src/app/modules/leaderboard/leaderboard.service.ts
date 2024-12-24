import { getExcelSheetValue } from './leaderboard.utils';

const getWagerCurrent = async (): Promise<any[]> => {
  const values: any[] = await getExcelSheetValue(
    '1w_z8Qgqpv4hkNuUAH8Jjy0gL4ySeWFEkIGxuYYFchI4',
    'Sheet1',
  );

  if (values.length < 2) {
    return []; // Return empty array if no data rows
  }

  const [keys, ...rows] = values; // Destructure keys and data rows
  return rows
    .map(row =>
      keys.reduce((acc: Record<string, any>, key: string, index: number) => {
        // acc[key] = isNaN(row[index]) ? row[index] : Number(row[index]);
        acc[key] = row[index];
        return acc;
      }, {}),
    )
    .sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
};

const getWagerPast = async () => {};

export const leaderboardService = {
  getWagerCurrent,
  getWagerPast,
};
