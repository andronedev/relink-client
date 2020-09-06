# relink-shortener

## A simple shortener with [rel.ink API](https://rel.ink/)

---

# Example

```js
const relink = require("relink-client")

relink.short("https://google.com").then(resp => console.log(resp.url))

```

# resp :

- `resp.url` : get the url of the shortcut link
- `resp.hashid` : get the hashid
- `resp.created_at` : link creation date

---
***Developed by AndroneDev***

[My WebSite](https://androne.dev) | [My Discord](https://discord.androne.dev)
