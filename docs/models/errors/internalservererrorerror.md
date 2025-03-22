# InternalServerErrorError

## Example Usage

```typescript
import { InternalServerErrorError } from "pimms/models/errors";

let value: InternalServerErrorError = {
  code: "internal_server_error",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | [errors.InternalServerErrorCode](../../models/errors/internalservererrorcode.md) | :heavy_check_mark:                                                               | A short code indicating the error code returned.                                 | internal_server_error                                                            |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | A human readable explanation of what went wrong.                                 | The requested resource was not found.                                            |