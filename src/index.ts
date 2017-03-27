export { changeLocale, updateMessages, fetchTranslations } from './actions';
export { formatDate, formatNumber, FormatOptions } from './format';
export { translationReducer } from './reducer';
export { Provider } from './Provider';
export { translate, TranslateProps } from './translate';
export { Translator } from './translator';
export { AppState, TranslatorOptions } from './types';

import translate from './translate';
export default translate;
