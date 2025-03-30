import axios from 'axios';
import ora from 'ora';
import chalk from 'chalk';
import { formatResponse } from './output';
import { parseHeaders } from '../utility';

export async function sendRequest(method: string, url: string, option: any) {
  const spinner = ora(`Sending a ${method} request...`).start();

  const { data, Header } = option;
  const headers = parseHeaders(Header || []);

  try {
    const response = await axios({
      method,
      url,
      data: data ? JSON.parse(data) : undefined,
      headers,
    });

    spinner.succeed(chalk.green('Request succeeded!'));
    formatResponse(response);
  } catch (err: any) {
    spinner.fail(chalk.red('Request failed!'));

    if (err.response) {
      console.error(
        chalk.red(`\nError ${err.response.status}: ${err.response.statusText}`),
      );
      console.error(chalk.yellow(JSON.stringify(err.response.data, null, 2)));
    } else if (err.request) {
      console.error(chalk.red('No response received from server.'));
    } else {
      console.error(chalk.red('Request error:'), err.message);
    }
  }
}
