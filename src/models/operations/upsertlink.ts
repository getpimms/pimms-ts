/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * List of existing tag IDs to categorize and filter links by campaigns, audiences, or purposes.
 */
export type UpsertLinkTagIds = string | Array<string>;

/**
 * New or existing tag names to assign for improved readability and organization.
 */
export type UpsertLinkTagNames = string | Array<string>;

export type UpsertLinkRequestBody = {
  /**
   * Destination URL the deep link redirects to. Supports standard webpages and in-app routing for mobile apps.
   */
  url: string;
  /**
   * Custom domain for your branded deep link. Defaults to the workspace’s primary domain or 'pim.ms'.
   */
  domain?: string | undefined;
  /**
   * Custom slug for the short URL. If omitted, an automatic 7-character key is generated.
   */
  key?: string | undefined;
  /**
   * External identifier for syncing link data with your internal CRM or analytics tools. Passed in query parameters prefixed by 'ext_'.
   */
  externalId?: string | null | undefined;
  /**
   * Custom URL path prefix for grouping auto-generated slugs (e.g., '/promo/' resulting in '/promo/abc123'). Ignored if 'key' is specified.
   */
  prefix?: string | undefined;
  /**
   * Enable detailed conversion tracking to attribute actions like signups or purchases directly to this link.
   */
  trackConversion?: boolean | undefined;
  /**
   * Archive the link to hide it from primary analytics while keeping it active for redirects.
   */
  archived?: boolean | undefined;
  /**
   * List of existing tag IDs to categorize and filter links by campaigns, audiences, or purposes.
   */
  tagIds?: string | Array<string> | undefined;
  /**
   * New or existing tag names to assign for improved readability and organization.
   */
  tagNames?: string | Array<string> | undefined;
  /**
   * Internal notes for team members about link context, purpose, or specific campaign details.
   */
  comments?: string | null | undefined;
  /**
   * ISO 8601 timestamp when the link should stop redirecting users.
   */
  expiresAt?: string | null | undefined;
  /**
   * Fallback destination URL after link expiration, preventing broken user experiences.
   */
  expiredUrl?: string | null | undefined;
  /**
   * Custom Open Graph (OG) title to optimize social media sharing and improve link previews.
   */
  title?: string | null | undefined;
  /**
   * Custom Open Graph description for better engagement when shared on social platforms.
   */
  description?: string | null | undefined;
  /**
   * URL for a custom OG image to enhance visual appeal and click-through rates on social media.
   */
  image?: string | null | undefined;
  /**
   * Custom video URL for rich media previews via Open Graph when sharing links.
   */
  video?: string | null | undefined;
  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null | undefined;
  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android?: string | null | undefined;
  /**
   * Allow search engine indexing of the deep link. Defaults to false for privacy.
   */
  doIndex?: boolean | undefined;
  /**
   * UTM source parameter for tracking the origin of traffic (e.g., 'linkedin', 'facebook', 'newsletter').
   */
  utmSource?: string | null | undefined;
  /**
   * UTM medium parameter identifying traffic medium such as 'post', 'email', 'social', or 'cpc'.
   */
  utmMedium?: string | null | undefined;
  /**
   * UTM campaign parameter for tracking specific marketing initiatives or promotions.
   */
  utmCampaign?: string | null | undefined;
  /**
   * UTM term parameter for keyword analysis, often used in paid search campaigns.
   */
  utmTerm?: string | null | undefined;
  /**
   * UTM content parameter distinguishing different content variations or link placements within a campaign.
   */
  utmContent?: string | null | undefined;
  /**
   * Custom referral parameter appended as '?ref=' for downstream attribution and analysis.
   */
  ref?: string | null | undefined;
  /**
   * Webhook IDs to trigger real-time notifications upon link clicks, ideal for integrating with analytics or marketing automation tools.
   */
  webhookIds?: Array<string> | null | undefined;
};

/**
 * The color of the tag.
 */
export const UpsertLinkColor = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Pink: "pink",
  Brown: "brown",
} as const;
/**
 * The color of the tag.
 */
export type UpsertLinkColor = ClosedEnum<typeof UpsertLinkColor>;

export type UpsertLinkTag = {
  /**
   * The unique ID of the tag.
   */
  id: string;
  /**
   * The name of the tag.
   */
  name: string;
  /**
   * The color of the tag.
   */
  color: UpsertLinkColor;
};

/**
 * The upserted link
 */
export type UpsertLinkLink = {
  /**
   * Unique internal identifier for the deep link.
   */
  id: string;
  /**
   * Domain used for the deep link, e.g., 'yourbrand.com' or 'pim.ms'.
   */
  domain: string;
  /**
   * Short URL slug appended after the domain, uniquely identifying the link.
   */
  key: string;
  /**
   * Complete original destination URL or mobile app route to which the link redirects users.
   */
  url: string;
  /**
   * Indicates whether this link actively tracks conversion events like leads or sales.
   */
  trackConversion?: boolean | undefined;
  /**
   * Determines if the link is archived, thus excluded from standard analytics views.
   */
  archived?: boolean | undefined;
  /**
   * Expiration timestamp in ISO 8601 format; after this, the link redirects to an expired URL or returns a 404.
   */
  expiresAt: string | null;
  /**
   * OG title for optimized social media link previews, fetched or set manually.
   */
  title: string | null;
  /**
   * OG description for enhanced social previews, either automatically fetched or manually customized.
   */
  description: string | null;
  /**
   * URL to the OG image displayed in social previews, improving shareability.
   */
  image: string | null;
  /**
   * Optional video URL used in rich media previews via Open Graph.
   */
  video: string | null;
  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios: string | null;
  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android: string | null;
  /**
   * Associated tags for organizing links by campaigns, audiences, or other criteria.
   */
  tags: Array<UpsertLinkTag> | null;
  /**
   * Webhooks triggered on each click event for real-time tracking and integration purposes.
   */
  webhookIds: Array<string>;
  /**
   * Internal team notes describing the context, strategy, or use of the link.
   */
  comments: string | null;
  /**
   * Fully constructed deep link URL including domain and protocol.
   */
  shortLink: string;
  /**
   * Direct link to the dynamically generated QR code for offline or print campaigns.
   */
  qrCode: string;
  /**
   * Assigned UTM source parameter for tracking marketing origins.
   */
  utmSource: string | null;
  /**
   * Assigned UTM medium for categorizing the traffic source.
   */
  utmMedium: string | null;
  /**
   * Assigned UTM campaign for detailed campaign-level tracking.
   */
  utmCampaign: string | null;
  /**
   * Assigned UTM term parameter used for keyword or search tracking.
   */
  utmTerm: string | null;
  /**
   * Assigned UTM content for distinguishing content variations within the same campaign.
   */
  utmContent: string | null;
  /**
   * Identifier of the user who created the link.
   */
  userId: string | null;
  /**
   * Identifier of the workspace that the link belongs to.
   */
  workspaceId: string;
  /**
   * Total click count tracking user engagements.
   */
  clicks?: number | undefined;
  /**
   * Timestamp of the most recent click event.
   */
  lastClicked: string | null;
  /**
   * Total conversions attributed directly to this link.
   */
  leads?: number | undefined;
  /**
   * Timestamp when the link was first created.
   */
  createdAt: string;
  /**
   * Timestamp when the link was last modified.
   */
  updatedAt: string;
};

/** @internal */
export const UpsertLinkTagIds$inboundSchema: z.ZodType<
  UpsertLinkTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertLinkTagIds$Outbound = string | Array<string>;

/** @internal */
export const UpsertLinkTagIds$outboundSchema: z.ZodType<
  UpsertLinkTagIds$Outbound,
  z.ZodTypeDef,
  UpsertLinkTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkTagIds$ {
  /** @deprecated use `UpsertLinkTagIds$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkTagIds$inboundSchema;
  /** @deprecated use `UpsertLinkTagIds$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkTagIds$outboundSchema;
  /** @deprecated use `UpsertLinkTagIds$Outbound` instead. */
  export type Outbound = UpsertLinkTagIds$Outbound;
}

export function upsertLinkTagIdsToJSON(
  upsertLinkTagIds: UpsertLinkTagIds,
): string {
  return JSON.stringify(
    UpsertLinkTagIds$outboundSchema.parse(upsertLinkTagIds),
  );
}

export function upsertLinkTagIdsFromJSON(
  jsonString: string,
): SafeParseResult<UpsertLinkTagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertLinkTagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertLinkTagIds' from JSON`,
  );
}

/** @internal */
export const UpsertLinkTagNames$inboundSchema: z.ZodType<
  UpsertLinkTagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertLinkTagNames$Outbound = string | Array<string>;

/** @internal */
export const UpsertLinkTagNames$outboundSchema: z.ZodType<
  UpsertLinkTagNames$Outbound,
  z.ZodTypeDef,
  UpsertLinkTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkTagNames$ {
  /** @deprecated use `UpsertLinkTagNames$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkTagNames$inboundSchema;
  /** @deprecated use `UpsertLinkTagNames$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkTagNames$outboundSchema;
  /** @deprecated use `UpsertLinkTagNames$Outbound` instead. */
  export type Outbound = UpsertLinkTagNames$Outbound;
}

export function upsertLinkTagNamesToJSON(
  upsertLinkTagNames: UpsertLinkTagNames,
): string {
  return JSON.stringify(
    UpsertLinkTagNames$outboundSchema.parse(upsertLinkTagNames),
  );
}

export function upsertLinkTagNamesFromJSON(
  jsonString: string,
): SafeParseResult<UpsertLinkTagNames, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertLinkTagNames$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertLinkTagNames' from JSON`,
  );
}

/** @internal */
export const UpsertLinkRequestBody$inboundSchema: z.ZodType<
  UpsertLinkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().optional(),
  archived: z.boolean().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  doIndex: z.boolean().optional(),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "utm_source": "utmSource",
    "utm_medium": "utmMedium",
    "utm_campaign": "utmCampaign",
    "utm_term": "utmTerm",
    "utm_content": "utmContent",
  });
});

/** @internal */
export type UpsertLinkRequestBody$Outbound = {
  url: string;
  domain?: string | undefined;
  key?: string | undefined;
  externalId?: string | null | undefined;
  prefix?: string | undefined;
  trackConversion?: boolean | undefined;
  archived?: boolean | undefined;
  tagIds?: string | Array<string> | undefined;
  tagNames?: string | Array<string> | undefined;
  comments?: string | null | undefined;
  expiresAt?: string | null | undefined;
  expiredUrl?: string | null | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  video?: string | null | undefined;
  ios?: string | null | undefined;
  android?: string | null | undefined;
  doIndex?: boolean | undefined;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
  ref?: string | null | undefined;
  webhookIds?: Array<string> | null | undefined;
};

/** @internal */
export const UpsertLinkRequestBody$outboundSchema: z.ZodType<
  UpsertLinkRequestBody$Outbound,
  z.ZodTypeDef,
  UpsertLinkRequestBody
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().optional(),
  archived: z.boolean().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  doIndex: z.boolean().optional(),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkRequestBody$ {
  /** @deprecated use `UpsertLinkRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkRequestBody$inboundSchema;
  /** @deprecated use `UpsertLinkRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkRequestBody$outboundSchema;
  /** @deprecated use `UpsertLinkRequestBody$Outbound` instead. */
  export type Outbound = UpsertLinkRequestBody$Outbound;
}

export function upsertLinkRequestBodyToJSON(
  upsertLinkRequestBody: UpsertLinkRequestBody,
): string {
  return JSON.stringify(
    UpsertLinkRequestBody$outboundSchema.parse(upsertLinkRequestBody),
  );
}

export function upsertLinkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpsertLinkRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertLinkRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertLinkRequestBody' from JSON`,
  );
}

/** @internal */
export const UpsertLinkColor$inboundSchema: z.ZodNativeEnum<
  typeof UpsertLinkColor
> = z.nativeEnum(UpsertLinkColor);

/** @internal */
export const UpsertLinkColor$outboundSchema: z.ZodNativeEnum<
  typeof UpsertLinkColor
> = UpsertLinkColor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkColor$ {
  /** @deprecated use `UpsertLinkColor$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkColor$inboundSchema;
  /** @deprecated use `UpsertLinkColor$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkColor$outboundSchema;
}

/** @internal */
export const UpsertLinkTag$inboundSchema: z.ZodType<
  UpsertLinkTag,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  color: UpsertLinkColor$inboundSchema,
});

/** @internal */
export type UpsertLinkTag$Outbound = {
  id: string;
  name: string;
  color: string;
};

/** @internal */
export const UpsertLinkTag$outboundSchema: z.ZodType<
  UpsertLinkTag$Outbound,
  z.ZodTypeDef,
  UpsertLinkTag
> = z.object({
  id: z.string(),
  name: z.string(),
  color: UpsertLinkColor$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkTag$ {
  /** @deprecated use `UpsertLinkTag$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkTag$inboundSchema;
  /** @deprecated use `UpsertLinkTag$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkTag$outboundSchema;
  /** @deprecated use `UpsertLinkTag$Outbound` instead. */
  export type Outbound = UpsertLinkTag$Outbound;
}

export function upsertLinkTagToJSON(upsertLinkTag: UpsertLinkTag): string {
  return JSON.stringify(UpsertLinkTag$outboundSchema.parse(upsertLinkTag));
}

export function upsertLinkTagFromJSON(
  jsonString: string,
): SafeParseResult<UpsertLinkTag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertLinkTag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertLinkTag' from JSON`,
  );
}

/** @internal */
export const UpsertLinkLink$inboundSchema: z.ZodType<
  UpsertLinkLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  url: z.string(),
  trackConversion: z.boolean().default(false),
  archived: z.boolean().default(false),
  expiresAt: z.nullable(z.string()),
  title: z.nullable(z.string()),
  description: z.nullable(z.string()),
  image: z.nullable(z.string()),
  video: z.nullable(z.string()),
  ios: z.nullable(z.string()),
  android: z.nullable(z.string()),
  tags: z.nullable(z.array(z.lazy(() => UpsertLinkTag$inboundSchema))),
  webhookIds: z.array(z.string()),
  comments: z.nullable(z.string()),
  shortLink: z.string(),
  qrCode: z.string(),
  utm_source: z.nullable(z.string()),
  utm_medium: z.nullable(z.string()),
  utm_campaign: z.nullable(z.string()),
  utm_term: z.nullable(z.string()),
  utm_content: z.nullable(z.string()),
  userId: z.nullable(z.string()),
  workspaceId: z.string(),
  clicks: z.number().default(0),
  lastClicked: z.nullable(z.string()),
  leads: z.number().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    "utm_source": "utmSource",
    "utm_medium": "utmMedium",
    "utm_campaign": "utmCampaign",
    "utm_term": "utmTerm",
    "utm_content": "utmContent",
  });
});

/** @internal */
export type UpsertLinkLink$Outbound = {
  id: string;
  domain: string;
  key: string;
  url: string;
  trackConversion: boolean;
  archived: boolean;
  expiresAt: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  video: string | null;
  ios: string | null;
  android: string | null;
  tags: Array<UpsertLinkTag$Outbound> | null;
  webhookIds: Array<string>;
  comments: string | null;
  shortLink: string;
  qrCode: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  userId: string | null;
  workspaceId: string;
  clicks: number;
  lastClicked: string | null;
  leads: number;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const UpsertLinkLink$outboundSchema: z.ZodType<
  UpsertLinkLink$Outbound,
  z.ZodTypeDef,
  UpsertLinkLink
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  url: z.string(),
  trackConversion: z.boolean().default(false),
  archived: z.boolean().default(false),
  expiresAt: z.nullable(z.string()),
  title: z.nullable(z.string()),
  description: z.nullable(z.string()),
  image: z.nullable(z.string()),
  video: z.nullable(z.string()),
  ios: z.nullable(z.string()),
  android: z.nullable(z.string()),
  tags: z.nullable(z.array(z.lazy(() => UpsertLinkTag$outboundSchema))),
  webhookIds: z.array(z.string()),
  comments: z.nullable(z.string()),
  shortLink: z.string(),
  qrCode: z.string(),
  utmSource: z.nullable(z.string()),
  utmMedium: z.nullable(z.string()),
  utmCampaign: z.nullable(z.string()),
  utmTerm: z.nullable(z.string()),
  utmContent: z.nullable(z.string()),
  userId: z.nullable(z.string()),
  workspaceId: z.string(),
  clicks: z.number().default(0),
  lastClicked: z.nullable(z.string()),
  leads: z.number().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkLink$ {
  /** @deprecated use `UpsertLinkLink$inboundSchema` instead. */
  export const inboundSchema = UpsertLinkLink$inboundSchema;
  /** @deprecated use `UpsertLinkLink$outboundSchema` instead. */
  export const outboundSchema = UpsertLinkLink$outboundSchema;
  /** @deprecated use `UpsertLinkLink$Outbound` instead. */
  export type Outbound = UpsertLinkLink$Outbound;
}

export function upsertLinkLinkToJSON(upsertLinkLink: UpsertLinkLink): string {
  return JSON.stringify(UpsertLinkLink$outboundSchema.parse(upsertLinkLink));
}

export function upsertLinkLinkFromJSON(
  jsonString: string,
): SafeParseResult<UpsertLinkLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertLinkLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertLinkLink' from JSON`,
  );
}
