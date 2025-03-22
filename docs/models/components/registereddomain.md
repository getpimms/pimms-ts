# RegisteredDomain

The registered domain record.

## Example Usage

```typescript
import { RegisteredDomain } from "pimms/models/components";

let value: RegisteredDomain = {
  id: "<id>",
  createdAt: "1739211049517",
  expiresAt: "1768077837412",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The ID of the registered domain record. |
| `createdAt`                             | *string*                                | :heavy_check_mark:                      | The date the domain was created.        |
| `expiresAt`                             | *string*                                | :heavy_check_mark:                      | The date the domain expires.            |