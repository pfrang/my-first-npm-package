import { describe, it, expect } from "vitest"
import { printInput } from "./functions"

describe('hello', () => {
  it('should pass', () => {
    expect(1).toBe(1)
  })
})

describe('hello', () => {
  it('should pass', () => {
    expect(2).toBe(2)
  })
})

describe('printInput', () => {
  it('should print input', () => {
    const input = 'Hei turid'
    const result = printInput(input)
    expect(result).toEqual(input)
  })
})
