#!/usr/bin/env node

'use strict'

import { exec } from './exec.js'
import { GREETING } from './constants.js'

export function main() {
  console.log(GREETING)
  exec()
}

main()
