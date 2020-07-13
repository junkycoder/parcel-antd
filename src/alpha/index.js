// @flow

import { bootstrap, render } from '../application';
import AlphaApp from './AlphaApp';

(async function alpha() {
  await bootstrap();
  render(AlphaApp);
})();