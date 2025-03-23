# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "pimms/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1723994694995",
  data: {
    id: "<id>",
    domain: "perfumed-safe.info",
    key: "<key>",
    url: "https://square-farm.org",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1763253321822",
    expiredUrl: "https://nimble-release.net",
    password: "wVIxtOegwlPc3Nr",
    title: "<value>",
    description: "continually rebuke circa anticodon self-reliant yowza nor",
    image: "https://loremflickr.com/2855/3661?lock=8279156352698940",
    video: "https://picsum.videos/seed/cE6EPGpnoA/1647/1221",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "gee funny brief where daintily role infatuated ew lazily elegantly celebrate until furthermore conceal er anti browse develop freely",
    shortLink: "https://idealistic-pressure.info",
    qrCode: "https://gentle-switchboard.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1717773875619",
    updatedAt: "1742747477125",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.Event*                                 | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |