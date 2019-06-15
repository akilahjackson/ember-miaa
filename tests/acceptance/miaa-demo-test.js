import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';


module('Acceptance | miaa demo', function(hooks) {
  setupApplicationTest(hooks);

test('should show homepage', async function (assert) {
  await visit('/');
  assert.equal(currentURL(),'/');

});

});
