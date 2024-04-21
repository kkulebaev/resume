import { BACK, EXIT, EXIT_PROMPT_NAME, MAIN_PROMPT_NAME } from './constants.js'
import { data } from './data.js'

const PromptType = {
  input: 'input',
  number: 'number',
  confirm: 'confirm',
  list: 'list',
  rawlist: 'rawlist',
  expand: 'expand',
  checkbox: 'checkbox',
  password: 'password',
  editor: 'editor',
}

export const mainPrompt = {
  type: PromptType.list,
  name: MAIN_PROMPT_NAME,
  message: 'What do you want to know',
  choices: [...Object.keys(data), EXIT],
}

export const exitPrompt = {
  type: PromptType.list,
  name: EXIT_PROMPT_NAME,
  message: 'Go back or Exit?',
  choices: [BACK, EXIT],
}
