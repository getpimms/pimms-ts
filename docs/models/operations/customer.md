# Customer

## Example Usage

```typescript
import { Customer } from "pimms/models/operations";

let value: Customer = {
  name: "<value>",
  email: "Anjali.Green66@hotmail.com",
  avatar: "https://loremflickr.com/2663/2069?lock=4996183616789047",
  externalId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | Customer name provided during the lead event.                                           |
| `email`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Customer email provided during the lead event.                                          |
| `avatar`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | Customer avatar URL provided during the lead event.                                     |
| `externalId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | External ID from your internal database linking this lead to your own customer records. |