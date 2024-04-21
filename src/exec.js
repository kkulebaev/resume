import inquirer from 'inquirer'
import chalk from 'chalk'
import { data } from './data.js'
import { BACK, EXIT, EXIT_PROMPT_NAME, MAIN_PROMPT_NAME } from './constants.js'

const chalkOutput = chalk.bold.blue

const mainPrompt = {
  type: 'list',
  name: MAIN_PROMPT_NAME,
  message: 'What do you want to know',
  choices: [...Object.keys(data), EXIT],
}

const exitPrompt = {
  type: 'list',
  name: EXIT_PROMPT_NAME,
  message: 'Go back or Exit?',
  choices: [BACK, EXIT],
}

export function exec() {
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
          exec()
        } else {
          return
        }
      })
    })
    .catch(err => console.log('Ooops,', err))
}
