import * as types from '../constants/BasicTypes';
import { setLocale } from 'react-redux-i18n';

export const changeLanguage = (lang) => setLocale(lang);