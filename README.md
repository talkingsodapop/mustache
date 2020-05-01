## Mustache template render

### How to use renderer in Alosaur

```ts
app.useViewRender({
    type: 'mustache',
    basePath: `${Deno.cwd()}/views/`, // path to folder views
    getBody: (path: string, model: Object, config: ViewRenderConfig) =>
        renderFile(normalize(`${config.basePath}${path}.html`), model),
});
```
