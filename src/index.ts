import { log } from './util/log';

const commandLineArgs = process.argv.slice(2);

switch (commandLineArgs[0]) {
  case "start":
    log("start");
    break;
  default:
    console.log("default");
    break;
}
