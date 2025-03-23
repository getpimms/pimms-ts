# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "pimms/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1713722737706",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://likely-fishery.com",
    country: "Ireland",
    city: "Botsfordborough",
    region: "<value>",
    continent: "North America",
    device: "Mobile",
    browser: "Chrome",
    os: "MacOS",
    referer: "unsung-eggplant.biz",
    refererUrl: "https://fuzzy-cassava.info",
    ip: "237.34.23.23",
  },
  link: {
    id: "<id>",
    domain: "unsung-hyphenation.com",
    key: "<key>",
    url: "https://mysterious-council.name",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1753497044983",
    expiredUrl: "https://menacing-elver.biz/",
    password: "tE5jTBtDQrhbsbf",
    title: "<value>",
    description: "towards yet whoa premise customise gah ew despite separately",
    image: "https://loremflickr.com/1236/279?lock=6286261524471032",
    video: "https://picsum.videos/seed/kPfklN/1099/3445",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "bitter ah versus alongside ouch whenever",
    shortLink: "https://vivid-toothpick.com",
    qrCode: "https://fantastic-median.biz",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1716077540062",
    updatedAt: "1742719515936",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customer`                                                                           | [components.Customer](../../models/components/customer.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `click`                                                                              | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |