# ConflictError

## Example Usage

```typescript
import { ConflictError } from "pimms/models/errors";

let value: ConflictError = {
  code: "conflict",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `code`                                                     | [errors.ConflictCode](../../models/errors/conflictcode.md) | :heavy_check_mark:                                         | A short code indicating the error code returned.           | conflict                                                   |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | A human readable explanation of what went wrong.           | The requested resource was not found.                      |