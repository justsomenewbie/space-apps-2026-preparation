import assert from 'node:assert/strict';
import { increment } from './increment.mjs';

assert.equal(increment(0), 1, 'One click must add exactly one');
assert.equal(increment(increment(0)), 2, 'Two clicks must yield two');
assert.equal(increment(9), 10, 'Carry across a decimal digit');
console.log('PASS: 3 assertions');
