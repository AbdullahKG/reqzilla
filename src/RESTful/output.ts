import chalk from 'chalk';

export function formatResponse(response: any) {
  console.log(chalk.blue('\nStatus:'), response.status);
  console.log(chalk.blue('\nData:'), JSON.stringify(response.data, null, 2));
}

export function verboseOutput(response: any) {
  console.log(chalk.blue('\nStatus:'), response.status);
  console.log(chalk.blue('\nHeaders:'), response.headers);
  console.log(chalk.blue('\nData:'), JSON.stringify(response.data, null, 2));
}

export function displayOnlyHeaders(response: any) {
  console.log(chalk.blue('\nHeaders:'), response.headers);
}
