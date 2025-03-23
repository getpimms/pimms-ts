# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "pimms/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1730535489695",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://formal-volleyball.org",
      country: "Turkey",
      city: "New Eleanorahaven",
      region: "<value>",
      continent: "Europe",
      device: "Mobile",
      browser: "Chrome",
      os: "Chrome OS",
      referer: "prestigious-valuable.name",
      refererUrl: "https://whispered-pear.name",
      ip: "227.7.29.26",
    },
    link: {
      id: "<id>",
      domain: "slushy-flat.name",
      key: "<key>",
      url: "https://idolized-longboat.name",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1772439563960",
      expiredUrl: "https://pleasing-bathhouse.org",
      password: "SmH9lJ5SwXvO8Lx",
      title: "<value>",
      description:
        "despite vainly scratchy dividend investigate minty louse ferret",
      image: "https://picsum.photos/seed/Fq7zTpUvC/3286/2192",
      video: "https://loremflickr.com/3332/2258?lock=8835876927805584",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "spattering knickers bracelet gosh geez knotty so indeed sour jovially forceful synergy not home why absentmindedly",
      shortLink: "https://weird-amnesty.org",
      qrCode: "https://hasty-thongs.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1724137290862",
      updatedAt: "1742687710061",
      projectId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |