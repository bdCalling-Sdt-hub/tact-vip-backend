import { google } from 'googleapis';
import config from '../config';

const googleAuth = new google.auth.GoogleAuth({
  keyFile: config.excel.sheet_key_file,
  scopes: config.excel.sheet_scope,
});

export default googleAuth;
