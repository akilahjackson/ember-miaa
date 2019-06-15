import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function htmlfix(post) {
  return htmlSafe(post);
}

export default helper(htmlfix);
