# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "pimms/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1718226954406",
  data: {
    id: "<id>",
    domain: "magnificent-travel.net",
    key: "<key>",
    url: "https://nervous-wear.name",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1744202738833",
    expiredUrl: "https://impressionable-netsuke.net/",
    password: "HdltUgjwVIxtOeg",
    title: "<value>",
    description:
      "list zealous vastly fledgling facilitate runway oval enormously vastly capsize",
    image: "https://picsum.photos/seed/noASV3b/2604/3309",
    video: "https://loremflickr.com/449/774?lock=4562431794221198",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "upliftingly till whirlwind enthusiastically towards guidance jealously restfully where defiantly sans yum creature clean meh kettledrum",
    shortLink: "https://suburban-birdbath.name",
    qrCode: "https://everlasting-riser.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1736653442445",
    updatedAt: "1742690382712",
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