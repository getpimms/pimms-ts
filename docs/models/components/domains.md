# Domains

## Example Usage

```typescript
import { Domains } from "pimms/models/components";

let value: Domains = {
  slug: "acme.com",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `slug`                                                      | *string*                                                    | :heavy_check_mark:                                          | The domain name.                                            | acme.com                                                    |
| `primary`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the domain is the primary domain for the workspace. |                                                             |
| `verified`                                                  | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the domain is verified.                             |                                                             |