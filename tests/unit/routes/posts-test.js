import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | posts', function(hooks) {
  setupTest(hooks);

  test('should be a model for wordpress posts', function(assert) {
    let route = this.owner.lookup('service:store').modelFor('wordpress/post');
    console.log('Currently storing ${route}')
    assert.ok(route);

  });
});
