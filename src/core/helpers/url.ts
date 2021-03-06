import {BASE_URL} from 'config/consts';
import {join} from 'path';

export function url(...segments: string[]) {
  return `${BASE_URL}${join(...segments)}`;
}
