# UpsertLinkTag

## Example Usage

```typescript
import { UpsertLinkTag } from "pimms/models/operations";

let value: UpsertLinkTag = {
  id: "<id>",
  name: "<value>",
  color: "blue",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The unique ID of the tag.                                                |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the tag.                                                     |
| `color`                                                                  | [operations.UpsertLinkColor](../../models/operations/upsertlinkcolor.md) | :heavy_check_mark:                                                       | The color of the tag.                                                    |