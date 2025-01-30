import { google } from 'googleapis';
import googleAuth from './googleAuth';
import generateRandomString from './generateRendomString';

async function watchGoogleSheet(sheetId: string) {
  const id = generateRandomString(5);
  try {
    const client = await googleAuth.getClient();  
    //@ts-ignore
    const drive = google.drive({ version: 'v3', auth: client });

    // Watch the file for changes
    const response = await drive.files.watch({
      fileId: sheetId,
      requestBody: {
        id, // Unique channel ID
        type: 'web_hook',
        address: 'https://api.tati.techcrafters.tech/webhook', // Your webhook endpoint
      },
    });

    console.log('Watch set up:', response.data);
  } catch (error) {
    console.log('------------------------->>', error);
  }
}

export default watchGoogleSheet;
