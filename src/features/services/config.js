import {DEV_URL} from '@env';
import axios from 'axios';

export const config = axios.create({
  baseURL: DEV_URL,
  timeout: 1000,
  headers: {
    Authorization: '',
  },
});
