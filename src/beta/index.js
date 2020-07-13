// @flow

import { bootstrap, render } from '../application';
import BetaApp from './BetaApp';

(async function alpha() {
  await bootstrap();
  render(BetaApp);
})();