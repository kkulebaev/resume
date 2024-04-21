import { describe, expect, it, vi } from 'vitest'
import inquirer from 'inquirer'
import { main } from '../src/index.js'

describe('CLI', () => {
  it('should display greeting when started', () => {
    const consoleMock = vi.spyOn(console, 'log')

    main()

    expect(consoleMock).toHaveBeenCalledWith('Hello, this is my resume')
    expect(consoleMock).toHaveBeenCalledTimes(1)
  })

  it('should finished when user select exit', () => {
    const inquirerMock = vi
      .spyOn(inquirer, 'prompt')
      .mockImplementation(() => Promise.resolve({ resumeOptions: 'Exit' }))

    main()

    expect(inquirerMock).toHaveBeenCalledTimes(1)
  })
})
