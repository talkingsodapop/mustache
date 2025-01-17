import mustache from './mustache.mjs';

const decoder = new TextDecoder();

export async function renderFile(path: string, model: Object | undefined): Promise<string> {
    // @ts-ignore
    return mustache.render(decoder.decode(await Deno.readFile(path)), model);
}

export function render(body: string, model: Object | undefined): string {
    // @ts-ignore
    return mustache.render(body, model);
}
