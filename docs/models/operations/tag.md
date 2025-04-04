# Tag

## Example Usage

```typescript
import { Tag } from "pimms/models/operations";

let value: Tag = {
  id: "<id>",
  name: "<value>",
  color: "yellow",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | The unique ID of the tag.                            |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | The name of the tag.                                 |
| `color`                                              | [operations.Color](../../models/operations/color.md) | :heavy_check_mark:                                   | The color of the tag.                                |