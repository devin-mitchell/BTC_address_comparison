import { describe, expect, test } from 'vitest'
import { fmtBtc, truncate } from '.'

describe('fmtBtc', () => {
  test('formats numbers < 7 digits as expected', () => {
    expect(fmtBtc(98745)).toBe(0.0098745)
  })

  test('formats numbers > 7 digits as expected', () => {
    expect(fmtBtc(9132238745)).toBe(913.2238745)
  })

  test('handles 0 as expected', () => {
    expect(fmtBtc(0)).toBe(0)
  })
})

describe('truncate', () => {
  test('truncates as expected', () => {
    expect(
      truncate('Here is a sample string', 5)
    ).toBe('Here ...')
  })

})
