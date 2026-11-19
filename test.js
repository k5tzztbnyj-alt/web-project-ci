const test = require('node:test');
const assert = require('node:assert');

test('Проверка сложения', () => {
  assert.strictEqual(2 + 2, 4);
});

test('Проверка строки', () => {
  assert.strictEqual('Hello'.length, 5);
});
