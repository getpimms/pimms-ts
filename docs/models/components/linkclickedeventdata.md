# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "pimms/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://sparse-collectivization.name",
    country: "India",
    city: "East Vincenzoborough",
    region: "<value>",
    continent: "South America",
    device: "Desktop",
    browser: "Firefox",
    os: "MacOS",
    referer: "accomplished-marksman.com",
    refererUrl: "https://rundown-compromise.org",
    ip: "6fa7:87dd:3d0e:9bfa:ebba:b5d6:c339:9520",
  },
  link: {
    id: "<id>",
    domain: "all-dredger.info",
    key: "<key>",
    url: "https://liquid-term.com",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1748463068463",
    expiredUrl: "https://orderly-sticker.info/",
    password: "oEWkmjTFZGe7zbj",
    title: "<value>",
    description: "pfft pigpen aha",
    image: "https://loremflickr.com/2074/2661?lock=244975953521618",
    video: "https://loremflickr.com/1270/2382?lock=6237977518948984",
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
      "entice ah excepting inexperienced mothball oh helpful shakily nor per beside sweet",
    shortLink: "https://inexperienced-heroine.org",
    qrCode: "https://boring-majority.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1742369503138",
    updatedAt: "1742680534102",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `click`                                              | [components.Click](../../models/components/click.md) | :heavy_check_mark:                                   | N/A                                                  |
| `link`                                               | [components.Link](../../models/components/link.md)   | :heavy_check_mark:                                   | N/A                                                  |