import { stringify } from 'qs';

export function getQueryString(query: Record<string, any>) {
  return stringify(query, { arrayFormat: 'repeat' });
}