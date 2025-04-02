import fs from 'fs';
import { Readable } from 'stream';
import chalk from 'chalk';

export function parseHeaders(headers: string[]) {
  return headers
    ? Object.fromEntries(
        headers.map((h) => {
          const [key, ...val] = h.split(':');
          return [key.trim(), val.join(':').trim()];
        }),
      )
    : {};
}

export async function saveResponseToFile(response: any, filePath: string) {
  try {
    const metadata = {
      statusCode: response.status,
      headers: response.headers,
    };

    if (response.body instanceof Readable) {
      // If body is a stream, write metadata first, then append the stream
      fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2) + '\n\n');

      const fileStream = fs.createWriteStream(filePath, { flags: 'a' });

      response.body.pipe(fileStream);
      fileStream.on('finish', () => {
        console.log(chalk.green(`File written successfully to: ${filePath}`));
      });
    } else {
      // If body is JSON or string, store it with metadata
      const dataToSave = {
        ...metadata,
        body: response.data,
      };

      const data: string = JSON.stringify(dataToSave, null, 2);
      fs.writeFileSync(filePath, data);
      console.log(chalk.green(`File written successfully to: ${filePath}\n`));
    }
  } catch (err: any) {
    console.error(chalk.red(`Error while writing to file: ${err.message}`));
  }
}
