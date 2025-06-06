# RateLimitExceededError

## Example Usage

```typescript
import { RateLimitExceededError } from "pimms/models/errors";

let value: RateLimitExceededError = {
  code: "rate_limit_exceeded",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | [errors.RateLimitExceededCode](../../models/errors/ratelimitexceededcode.md) | :heavy_check_mark:                                                           | A short code indicating the error code returned.                             | rate_limit_exceeded                                                          |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | A human readable explanation of what went wrong.                             | The requested resource was not found.                                        |