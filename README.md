## Mustache template render

Published to JSR by Jenny

forked from [github:alosaur/mustache](https://github.com/alosaur/mustache) which is in turn a fork of
[github:janl/mustache.js](https://github.com/janl/mustache.js)

### How to use renderer in Alosaur

```ts
import { renderFile } from 'https://deno.land/x/mustache/mod.ts';

app.useViewRender({
    type: 'mustache',
    basePath: `${Deno.cwd()}/views/`, // path to folder views
    getBody: (path: string, model: Object, config: ViewRenderConfig) =>
        renderFile(normalize(`${config.basePath}${path}.html`), model),
});
```
