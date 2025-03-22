# UpdateDomainRequest

## Example Usage

```typescript
import { UpdateDomainRequest } from "pimms/models/operations";

let value: UpdateDomainRequest = {
  slug: "acme.com",
  requestBody: {
    slug: "acme.com",
    expiredUrl: "https://acme.com/expired",
    notFoundUrl: "https://acme.com/not-found",
    placeholder: "https://dub.co/help/article/what-is-dub",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The domain name.                                                                         | acme.com                                                                                 |
| `requestBody`                                                                            | [operations.UpdateDomainRequestBody](../../models/operations/updatedomainrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |