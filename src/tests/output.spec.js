import { afterAll, describe, expect, it, vi } from 'vitest'
import { main } from '../index.js'

describe('CLI', () => {
  const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)

  afterAll(() => {
    consoleMock.mockReset()
  })

  it('should display greeting when started`', () => {
    main()
    expect(consoleMock).toHaveBeenCalledWith('Hello, this is my resume')
    expect(consoleMock).toHaveBeenCalledTimes(1)
  })
})
