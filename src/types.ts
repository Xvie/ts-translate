import { Map } from 'immutable';

export interface AppState {
  translate: TranslatorOptions;
}

export interface AppStore {
  getState: () => AppState;
}

export type TranslationResult = string | number | boolean | null | object;
export type Messages = Map<string, Map<string, TranslationResult> | TranslationResult>;

export interface TranslatorOptions {
  locale: string;
  fallbackLocale?: string;
  messages?: Messages | any;
}

export interface MsgOptions {
  disableDefault?: boolean;
  scope?: string;
}

export interface InterpolationDictionary {
  [key: string]: string | number;
}

export type Version = string;

export type Locale = string;

export interface ApiConfig {
  apiUrl?: string;
  apiToken?: string;
  releasesDir?: string;
  sync?: boolean;
  liveSync?: boolean;
}

export interface ReleaseVersion {
  locale: Locale;
  version: Version;
  created_at: string;
}

export interface Releases {
  [locale: string]: ReleaseVersion[];
}

export type ApiMethod = 'POST' | 'GET' | 'PUT';

export type ApiEndpoint = string;

export interface ApiData {
  [key: string]: number | string | ApiData;
}
