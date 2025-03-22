# GetMetatagsResponseBody

The retrieved metatags

## Example Usage

```typescript
import { GetMetatagsResponseBody } from "pimms/models/operations";

let value: GetMetatagsResponseBody = {
  title: "PIMMS | Deep links that boost your conversions on social media",
  description: "PIMMS is the open-source link management infrastructure ...",
  image: "https://assets.pimms.io/thumbnail.jpg?v=3",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `title`                                                        | *string*                                                       | :heavy_check_mark:                                             | The meta title tag for the URL.                                | PIMMS \| Deep links that boost your conversions on social media |
| `description`                                                  | *string*                                                       | :heavy_check_mark:                                             | The meta description tag for the URL.                          | PIMMS is the open-source link management infrastructure ...    |
| `image`                                                        | *string*                                                       | :heavy_check_mark:                                             | The OpenGraph image for the URL.                               | https://assets.pimms.io/thumbnail.jpg?v=3                      |