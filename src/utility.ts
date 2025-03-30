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
