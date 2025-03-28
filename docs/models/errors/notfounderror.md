# NotFoundError

## Example Usage

```typescript
import { NotFoundError } from "pimms/models/errors";

let value: NotFoundError = {
  code: "not_found",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `code`                                                     | [errors.NotFoundCode](../../models/errors/notfoundcode.md) | :heavy_check_mark:                                         | A short code indicating the error code returned.           | not_found                                                  |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | A human readable explanation of what went wrong.           | The requested resource was not found.                      |