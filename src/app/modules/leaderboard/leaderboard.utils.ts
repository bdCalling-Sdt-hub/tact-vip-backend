import { google } from 'googleapis';
import config from '../../config';
import googleAuth from '../../utils/googleAuth';

export async function getExcelSheetValue(
  sheetId: string,
  sheetName: string,
): Promise<any[]> {
  // Initialize Google Auth

  // Create client instance and Google Sheets API instance
  const client = await googleAuth?.getClient();
  //@ts-ignore
  const googleSheets = google.sheets({ version: 'v4', auth: client });

  // Read rows from the specified sheet
  const { data } = await googleSheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: sheetName,
  });

  return data.values || [];
}
