#!/usr/bin/env node

'use strict'

import inquirer from 'inquirer'
import chalk from 'chalk'
import { data } from './data.js'
import { BACK, EXIT, EXIT_PROMPT_NAME, GREETING, MAIN_PROMPT_NAME } from './constants.js'
import { exitPrompt, mainPrompt } from './prompts.js'

const chalkOutput = chalk.bold.blue

export function main() {
  console.log(GREETING)

  inquirer
    .prompt(mainPrompt)
    .then(answerObj => {
      const answer = answerObj[MAIN_PROMPT_NAME]
      if (answer === EXIT) return

      const options = data[answer]
      if (options) {
        console.log(chalkOutput(new inquirer.Separator()))
        options.forEach(info => {
          console.log(chalkOutput('|   => ' + info))
        })
        console.log(chalkOutput(new inquirer.Separator()))
      }

      inquirer.prompt(exitPrompt).then(choice => {
        if (choice[EXIT_PROMPT_NAME] === BACK) {
          main()
        } else {
          return
        }
      })
    })
    .catch(err => console.log('Ooops,', err))
}

main()
