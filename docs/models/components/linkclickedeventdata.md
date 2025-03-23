# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "pimms/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://orderly-comestible.com/",
    country: "India",
    city: "Domenicville",
    region: "<value>",
    continent: "Africa",
    device: "Desktop",
    browser: "Chrome",
    os: "Chrome OS",
    referer: "severe-intent.org",
    refererUrl: "https://delicious-flame.name/",
    ip: "751c:8cf0:3bba:bf8d:19f5:ef6a:1f1e:5a05",
  },
  link: {
    id: "<id>",
    domain: "sinful-lotion.com",
    key: "<key>",
    url: "https://hot-metabolite.net/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1769283934733",
    expiredUrl: "https://imaginative-charm.net/",
    password: "dGR0YObnOqWgcdC",
    title: "<value>",
    description: "barring wise finally enlightened aha reiterate",
    image: "https://loremflickr.com/3687/869?lock=6521865520250145",
    video: "https://loremflickr.com/814/705?lock=7357306805578289",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "offend poorly square boring engage",
    shortLink: "https://tired-tomatillo.com",
    qrCode: "https://free-steeple.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1728225536723",
    updatedAt: "1742691012357",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `click`                                              | [components.Click](../../models/components/click.md) | :heavy_check_mark:                                   | N/A                                                  |
| `link`                                               | [components.Link](../../models/components/link.md)   | :heavy_check_mark:                                   | N/A                                                  |