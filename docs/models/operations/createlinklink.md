# CreateLinkLink

The created link

## Example Usage

```typescript
import { CreateLinkLink } from "pimms/models/operations";

let value: CreateLinkLink = {
  id: "<id>",
  domain: "perky-making.info",
  key: "<key>",
  url: "https://jealous-tapioca.org",
  expiresAt: "1755636292895",
  title: "<value>",
  description:
    "triumphantly close phew typewriter gadzooks yet athwart skateboard newsstand",
  image: "https://loremflickr.com/2957/157?lock=1082634376581685",
  video: "https://loremflickr.com/1185/475?lock=3731349335459307",
  ios: "<value>",
  android: "<id>",
  tags: [
    {
      id: "<id>",
      name: "<value>",
      color: "red",
    },
  ],
  webhookIds: [
    "<value>",
  ],
  comments:
    "factorise although dishearten unaccountably unconscious notwithstanding but intrepid calculating queasily ha intensely settle pluck shallow meh",
  shortLink: "https://fake-backburn.info/",
  qrCode: "https://rubbery-gift.biz/",
  utmSource: "<value>",
  utmMedium: "<value>",
  utmCampaign: "<value>",
  utmTerm: "<value>",
  utmContent: "<value>",
  userId: "<id>",
  workspaceId: "<id>",
  lastClicked: "<value>",
  createdAt: "1712786348899",
  updatedAt: "1743463490846",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Unique internal identifier for the deep link.                                                               |
| `domain`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Domain used for the deep link, e.g., 'yourbrand.com' or 'pim.ms'.                                           |
| `key`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Short URL slug appended after the domain, uniquely identifying the link.                                    |
| `url`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Complete original destination URL or mobile app route to which the link redirects users.                    |
| `trackConversion`                                                                                           | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Indicates whether this link actively tracks conversion events like leads or sales.                          |
| `archived`                                                                                                  | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Determines if the link is archived, thus excluded from standard analytics views.                            |
| `expiresAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Expiration timestamp in ISO 8601 format; after this, the link redirects to an expired URL or returns a 404. |
| `title`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | OG title for optimized social media link previews, fetched or set manually.                                 |
| `description`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | OG description for enhanced social previews, either automatically fetched or manually customized.           |
| `image`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | URL to the OG image displayed in social previews, improving shareability.                                   |
| `video`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Optional video URL used in rich media previews via Open Graph.                                              |
| `ios`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The iOS destination URL for the short link for iOS device targeting.                                        |
| `android`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The Android destination URL for the short link for Android device targeting.                                |
| `tags`                                                                                                      | [operations.Tag](../../models/operations/tag.md)[]                                                          | :heavy_check_mark:                                                                                          | Associated tags for organizing links by campaigns, audiences, or other criteria.                            |
| `webhookIds`                                                                                                | *string*[]                                                                                                  | :heavy_check_mark:                                                                                          | Webhooks triggered on each click event for real-time tracking and integration purposes.                     |
| `comments`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Internal team notes describing the context, strategy, or use of the link.                                   |
| `shortLink`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Fully constructed deep link URL including domain and protocol.                                              |
| `qrCode`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Direct link to the dynamically generated QR code for offline or print campaigns.                            |
| `utmSource`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Assigned UTM source parameter for tracking marketing origins.                                               |
| `utmMedium`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Assigned UTM medium for categorizing the traffic source.                                                    |
| `utmCampaign`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Assigned UTM campaign for detailed campaign-level tracking.                                                 |
| `utmTerm`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Assigned UTM term parameter used for keyword or search tracking.                                            |
| `utmContent`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Assigned UTM content for distinguishing content variations within the same campaign.                        |
| `userId`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier of the user who created the link.                                                                |
| `workspaceId`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier of the workspace that the link belongs to.                                                       |
| `clicks`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Total click count tracking user engagements.                                                                |
| `lastClicked`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Timestamp of the most recent click event.                                                                   |
| `leads`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Total conversions attributed directly to this link.                                                         |
| `createdAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Timestamp when the link was first created.                                                                  |
| `updatedAt`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Timestamp when the link was last modified.                                                                  |