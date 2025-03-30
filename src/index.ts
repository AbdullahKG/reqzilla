import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import { sendRequest } from './RESTful/request';
import { parseHeaders } from './utility';

const program = new Command();

console.log(
  chalk.white(figlet.textSync('ReqZilla', { horizontalLayout: 'full' })),
);

program
  .name('reqzilla')
  .description('lightweight and powerful CLI tool for testing REST APIs')
  .version('1.0.0');

program
  .command('get <url>')
  .description('Send a GET request')
  .option('-H, --Header <header...>', 'Request headers')
  .action((url, option) => {
    const headers = parseHeaders(option.Header || []);
    sendRequest('GET', url, undefined, headers);
  });

program
  .command('post <url>')
  .description('Send a POST request')
  .option('-d, --data <data>', 'Request body as JSON string')
  .option('-H, --Header <header...>', 'Request headers')
  .action((url, option) => {
    const headers = parseHeaders(option.Header || []);
    sendRequest('POST', url, option.data, headers);
  });

program
  .command('patch <url>')
  .description('Send a PATCH request')
  .option('-d, --data <data>', 'Request body as JSON string')
  .option('-H, --Header <header...>', 'Request headers')
  .action((url, option) => {
    const headers = parseHeaders(option.Header || []);
    sendRequest('PATCH', url, option.data, headers);
  });

program
  .command('delete <url>')
  .description('Send a DELETE request')
  .option('-H, --Header <header...>', 'Request headers')
  .action((url, option) => {
    const headers = parseHeaders(option.Header || []);
    sendRequest('DELETE', url, undefined, headers);
  });

program.parse(process.argv);
