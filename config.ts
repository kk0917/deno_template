const env = Deno.env;

export const ENDPOINT = env.set('endpoint','127.0.0.1');
export const PORT     = env.set('port', '8080');
