# UnprocessableEntityError

## Example Usage

```typescript
import { UnprocessableEntityError } from "pimms/models/errors";

let value: UnprocessableEntityError = {
  code: "unprocessable_entity",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | [errors.UnprocessableEntityCode](../../models/errors/unprocessableentitycode.md) | :heavy_check_mark:                                                               | A short code indicating the error code returned.                                 | unprocessable_entity                                                             |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | A human readable explanation of what went wrong.                                 | The requested resource was not found.                                            |