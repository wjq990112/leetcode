/**
 * @file 键名转译-I
 */
import keyNameTranslator from '../key_name_translator-I';

describe('键名转译-I', () => {
  it('input: obj = { "a.b": 1, c: 3 }', () => {
    expect(keyNameTranslator({ 'a.b': 1, c: 3 })).toEqual({
      a: { b: 1 },
      c: 3
    });
  });

  it('input: obj = { "a.b.d": 1, "c.f.e": 3 }', () => {
    expect(keyNameTranslator({ 'a.b.d': 1, 'c.f.e': 3 })).toEqual({
      a: {
        b: {
          d: 1
        }
      },
      c: {
        f: {
          e: 3
        }
      }
    });
  });
});
