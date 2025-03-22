# ListDomainsResponse

## Example Usage

```typescript
import { ListDomainsResponse } from "pimms/models/operations";

let value: ListDomainsResponse = {
  result: [
    {
      id: "<id>",
      slug: "acme.com",
      placeholder: "https://dub.co/help/article/what-is-dub",
      expiredUrl: "https://acme.com/expired",
      notFoundUrl: "https://acme.com/not-found",
      logo: "<value>",
      createdAt: "1732078199745",
      updatedAt: "1742603323950",
      registeredDomain: {
        id: "<id>",
        createdAt: "1718326685193",
        expiresAt: "1742823308548",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.DomainSchema](../../models/components/domainschema.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |