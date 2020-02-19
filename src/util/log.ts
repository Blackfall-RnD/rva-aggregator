import Chalk from 'chalk';

export function log(message: string, color: string = 'blue') {
  console.log(Chalk`{${color} ${message}}`);
}
