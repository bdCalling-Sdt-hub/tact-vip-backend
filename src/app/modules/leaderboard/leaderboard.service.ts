import { getExcelSheetValue } from './leaderboard.utils';

const getWagerCurrent = async (): Promise<any[]> => {
  const values: any[] = await getExcelSheetValue(
    '1-y_myT8NSI-11XSY2SOVLtbwNL9areffR4clvAB6OFE',
    'Top Wager Current Month',
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

const getWagerPast = async (): Promise<any[]> => {
  const values: any[] = await getExcelSheetValue(
    // ad361888359135a48f6a5ecb9df1504d1618dfb0
    '1-y_myT8NSI-11XSY2SOVLtbwNL9areffR4clvAB6OFE',
    'Top Wager Past Month',
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

export const leaderboardService = {
  getWagerCurrent,
  getWagerPast,
};
