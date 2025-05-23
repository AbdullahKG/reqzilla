#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';
import { sendRequest } from './RESTful/request';

const program = new Command();

console.log(
  chalk.white(figlet.textSync('ReqZilla', { horizontalLayout: 'full' })),
);

program
  .name('reqzilla')
  .description('lightweight and powerful CLI tool for testing REST APIs')
  .version('1.0.0');

// Common action to handle request sending
const handleRequest = (method: string) => (url: string, option: any) => {
  sendRequest(method, url, option);
};

program
  .command('get <url>')
  .description('Send a GET request')
  .option('-H, --Header <header...>', 'Request headers')
  .option(
    '-o, --outputFile <FileName>',
    'Save Response to File with custome File name',
  )
  .option('-v, --verbose', 'Show verbose info about the response')
  .option('-I, --onlyHeaders', 'Show response Headers only')
  .action(handleRequest('GET'));

program
  .command('post <url>')
  .description('Send a POST request')
  .option('-d, --data <data>', 'Request body as JSON string')
  .option('-H, --Header <header...>', 'Request headers')
  .option(
    '-o, --outputFile <FileName>',
    'Save Response to File with custome File name',
  )
  .option('-v, --verbose', 'Show verbose info about the response')
  .option('-I, --onlyHeaders', 'Show response Headers only')
  .action(handleRequest('POST'));

program
  .command('patch <url>')
  .description('Send a PATCH request')
  .option('-d, --data <data>', 'Request body as JSON string')
  .option('-H, --Header <header...>', 'Request headers')
  .option(
    '-o, --outputFile <FileName>',
    'Save Response to File with custome File name',
  )
  .option('-v, --verbose', 'Show verbose info about the response')
  .option('-I, --onlyHeaders', 'Show response Headers only')
  .action(handleRequest('PATCH'));

program
  .command('delete <url>')
  .description('Send a DELETE request')
  .option('-H, --Header <header...>', 'Request headers')
  .option(
    '-o, --outputFile <FileName>',
    'Save Response to File with custome File name',
  )
  .option('-v, --verbose', 'Show verbose info about the response')
  .option('-I, --onlyHeaders', 'Show response Headers only')
  .action(handleRequest('DELETE'));

program.parse(process.argv);
