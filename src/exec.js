import inquirer from 'inquirer'
import chalk from 'chalk'
import { data } from './data.js'
import { BACK, EXIT } from './constants.js'

const chalkOutput = chalk.bold.blue

const mainPrompt = {
  type: 'list',
  name: 'resumeOptions',
  message: 'What do you want to know',
  choices: [...Object.keys(data), EXIT],
}

const exitPrompt = {
  type: 'list',
  name: 'exitBack',
  message: 'Go back or Exit?',
  choices: [BACK, EXIT],
}

export function exec() {
  inquirer
    .prompt(mainPrompt)
    .then(answer => {
      if (answer.resumeOptions === EXIT) return

      const options = data[`${answer.resumeOptions}`]
      if (options) {
        console.log(chalkOutput(new inquirer.Separator()))
        options.forEach(info => {
          console.log(chalkOutput('|   => ' + info))
        })
        console.log(chalkOutput(new inquirer.Separator()))
      }

      inquirer.prompt(exitPrompt).then(choice => {
        if (choice.exitBack === BACK) {
          exec()
        } else {
          return
        }
      })
    })
    .catch(err => console.log('Ooops,', err))
}
