#### It Changed

Monitor a store for when objects change and emit event when they do

```
let detector = itChanged({
  add: (obj) => {/_ called when `detector.add(obj)` is called. detects if object already exists and emits `detector.on('change') _/},
  exists: (obj) => {/_ called during `add` to determine if object exists in store. should return `boolean`_/},
})
```
