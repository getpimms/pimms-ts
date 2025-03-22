# Partners
(*partners*)

## Overview

### Available Operations

* [create](#create) - Create a new partner
* [createLink](#createlink) - Create a link for a partner
* [upsertLink](#upsertlink) - Upsert a link for a partner
* [analytics](#analytics) - Retrieve analytics for a partner

## create

Create a new partner for a program. If partner exists, automatically enrolls them.

### Example Usage

```typescript
import { Pimms } from "pimms";

const pimms = new Pimms({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await pimms.partners.create({
    programId: "<id>",
    name: "<value>",
    email: "Loyal79@yahoo.com",
    username: "Aaliyah_Borer",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PimmsCore } from "pimms/core.js";
import { partnersCreate } from "pimms/funcs/partnersCreate.js";

// Use `PimmsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pimms = new PimmsCore({
  token: "DUB_API_KEY",
});

async function run() {
  const res = await partnersCreate(pimms, {
    programId: "<id>",
    name: "<value>",
    email: "Loyal79@yahoo.com",
    username: "Aaliyah_Borer",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePartnerRequestBody](../../models/operations/createpartnerrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePartnerResponseBody](../../models/operations/createpartnerresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.Conflict            | 409                        | application/json           |
| errors.InviteExpired       | 410                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.RateLimitExceeded   | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createLink

Create a new link for a partner that is enrolled in your program.

### Example Usage

```typescript
import { Pimms } from "pimms";

const pimms = new Pimms({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await pimms.partners.createLink({
    programId: "<id>",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PimmsCore } from "pimms/core.js";
import { partnersCreateLink } from "pimms/funcs/partnersCreateLink.js";

// Use `PimmsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pimms = new PimmsCore({
  token: "DUB_API_KEY",
});

async function run() {
  const res = await partnersCreateLink(pimms, {
    programId: "<id>",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePartnerLinkRequestBody](../../models/operations/createpartnerlinkrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LinkSchema](../../models/components/linkschema.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.Conflict            | 409                        | application/json           |
| errors.InviteExpired       | 410                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.RateLimitExceeded   | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## upsertLink

Upsert a link for a partner that is enrolled in your program. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.

### Example Usage

```typescript
import { Pimms } from "pimms";

const pimms = new Pimms({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await pimms.partners.upsertLink({
    programId: "<id>",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PimmsCore } from "pimms/core.js";
import { partnersUpsertLink } from "pimms/funcs/partnersUpsertLink.js";

// Use `PimmsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pimms = new PimmsCore({
  token: "DUB_API_KEY",
});

async function run() {
  const res = await partnersUpsertLink(pimms, {
    programId: "<id>",
    linkProps: {
      externalId: "123456",
      tagIds: [
        "clux0rgak00011...",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertPartnerLinkRequestBody](../../models/operations/upsertpartnerlinkrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LinkSchema](../../models/components/linkschema.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.Conflict            | 409                        | application/json           |
| errors.InviteExpired       | 410                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.RateLimitExceeded   | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## analytics

Retrieve analytics for a partner within a program. The response type vary based on the `groupBy` query parameter.

### Example Usage

```typescript
import { Pimms } from "pimms";

const pimms = new Pimms({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await pimms.partners.analytics({
    programId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PimmsCore } from "pimms/core.js";
import { partnersAnalytics } from "pimms/funcs/partnersAnalytics.js";

// Use `PimmsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pimms = new PimmsCore({
  token: "DUB_API_KEY",
});

async function run() {
  const res = await partnersAnalytics(pimms, {
    programId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrievePartnerAnalyticsRequest](../../models/operations/retrievepartneranalyticsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RetrievePartnerAnalyticsResponseBody](../../models/operations/retrievepartneranalyticsresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.Conflict            | 409                        | application/json           |
| errors.InviteExpired       | 410                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.RateLimitExceeded   | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |