# UpdateLinkRequest

## Example Usage

```typescript
import { UpdateLinkRequest } from "pimms/models/operations";

let value: UpdateLinkRequest = {
  linkId: "<id>",
  requestBody: {
    url: "https://google.com",
    externalId: "123456",
    tagIds: [
      "clux0rgak00011...",
    ],
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `linkId`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| `requestBody`                                                                                                                         | [operations.UpdateLinkRequestBody](../../models/operations/updatelinkrequestbody.md)                                                  | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |