# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "pimms/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1728267977892",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://well-off-monster.org",
      country: "Vanuatu",
      city: "Lakinport",
      region: "<value>",
      continent: "South America",
      device: "Desktop",
      browser: "Chrome",
      os: "MacOS",
      referer: "slushy-flat.name",
      refererUrl: "https://idolized-longboat.name",
      ip: "cd1e:bb19:55bd:90ff:40be:ec67:da25:62ae",
    },
    link: {
      id: "<id>",
      domain: "realistic-bell.com",
      key: "<key>",
      url: "https://heavenly-sanity.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1754989831056",
      expiredUrl: "https://young-replacement.name",
      password: "w4qcCSTdRjG9Wv1",
      title: "<value>",
      description: "rudely aware within reckless in",
      image: "https://picsum.photos/seed/YfIvt/2483/3332",
      video: "https://loremflickr.com/976/2888?lock=8921210309936519",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "deployment circa trolley from deduction yummy pish cluttered whose manipulate sweet for badly",
      shortLink: "https://digital-cutover.info/",
      qrCode: "https://white-forage.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1716940842041",
      updatedAt: "1742747099035",
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