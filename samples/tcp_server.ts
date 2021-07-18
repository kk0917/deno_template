import { copy } from 'io/util.ts';

const hostNum = '0.0.0.0',
      portNum = 8080,
      listener = Deno.listen({ hostname: hostNum, port: portNum });

console.log(`Listening on ${hostNum}:${portNum}`);

for await (const conn of listener) {
  copy(conn, conn);
}
