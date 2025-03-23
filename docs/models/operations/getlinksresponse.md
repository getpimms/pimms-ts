# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "pimms/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "excitable-validity.com",
      key: "<key>",
      url: "https://trim-hoof.biz/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1764614329625",
      expiredUrl: "https://unimportant-sprinkles.com/",
      password: "lOVaNGvlypZcIVX",
      title: "<value>",
      description: "pulp except scout mortally",
      image: "https://loremflickr.com/3096/703?lock=8151928473513959",
      video: "https://picsum.videos/seed/uyIo58Y3/2778/2946",
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
        "brr which reproach past finer square vice indolent stir-fry psst custom vestment excluding owlishly behind whereas ultimately bah serene woefully",
      shortLink: "https://pointed-kielbasa.biz/",
      qrCode: "https://big-marksman.org",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1715675460364",
      updatedAt: "1742707464606",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |