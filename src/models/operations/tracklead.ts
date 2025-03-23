/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TrackLeadRequestBody = {
  /**
   * Unique identifier for the click event in PIMMS, typically retrieved from the 'pimms_id' browser cookie for accurate attribution.
   */
  clickId: string;
  /**
   * Name of the specific lead or conversion event you want to track (e.g., 'Sign up', 'Free Trial Registration').
   */
  eventName: string;
  /**
   * A unique identifier from your internal system (such as user ID) to link customer journeys across platforms.
   */
  externalId?: string | undefined;
  /**
   * Optional customer name, useful for personalized reporting and CRM integrations.
   */
  customerName?: string | null | undefined;
  /**
   * Customer email address to enhance CRM synchronization and facilitate personalized marketing efforts.
   */
  customerEmail?: string | null | undefined;
  /**
   * URL to the customer's avatar image, used for richer user profiles in integrated CRM or analytics platforms.
   */
  customerAvatar?: string | null | undefined;
  /**
   * Additional structured data or context about the lead event, aiding advanced segmentation and reporting.
   */
  metadata?: { [k: string]: any } | null | undefined;
};

export type Click = {
  /**
   * The unique identifier of the recorded click event associated with this lead.
   */
  id: string;
};

export type Customer = {
  /**
   * Customer name provided during the lead event.
   */
  name: string | null;
  /**
   * Customer email provided during the lead event.
   */
  email: string | null;
  /**
   * Customer avatar URL provided during the lead event.
   */
  avatar: string | null;
  /**
   * External ID from your internal database linking this lead to your own customer records.
   */
  externalId: string | null;
};

/**
 * A lead was tracked.
 */
export type TrackLeadResponseBody = {
  click: Click;
  customer: Customer;
};

/** @internal */
export const TrackLeadRequestBody$inboundSchema: z.ZodType<
  TrackLeadRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  clickId: z.string(),
  eventName: z.string(),
  externalId: z.string().default(""),
  customerName: z.nullable(z.string()).default(null),
  customerEmail: z.nullable(z.string()).default(null),
  customerAvatar: z.nullable(z.string()).default(null),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type TrackLeadRequestBody$Outbound = {
  clickId: string;
  eventName: string;
  externalId: string;
  customerName: string | null;
  customerEmail: string | null;
  customerAvatar: string | null;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const TrackLeadRequestBody$outboundSchema: z.ZodType<
  TrackLeadRequestBody$Outbound,
  z.ZodTypeDef,
  TrackLeadRequestBody
> = z.object({
  clickId: z.string(),
  eventName: z.string(),
  externalId: z.string().default(""),
  customerName: z.nullable(z.string()).default(null),
  customerEmail: z.nullable(z.string()).default(null),
  customerAvatar: z.nullable(z.string()).default(null),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadRequestBody$ {
  /** @deprecated use `TrackLeadRequestBody$inboundSchema` instead. */
  export const inboundSchema = TrackLeadRequestBody$inboundSchema;
  /** @deprecated use `TrackLeadRequestBody$outboundSchema` instead. */
  export const outboundSchema = TrackLeadRequestBody$outboundSchema;
  /** @deprecated use `TrackLeadRequestBody$Outbound` instead. */
  export type Outbound = TrackLeadRequestBody$Outbound;
}

export function trackLeadRequestBodyToJSON(
  trackLeadRequestBody: TrackLeadRequestBody,
): string {
  return JSON.stringify(
    TrackLeadRequestBody$outboundSchema.parse(trackLeadRequestBody),
  );
}

export function trackLeadRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackLeadRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackLeadRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackLeadRequestBody' from JSON`,
  );
}

/** @internal */
export const Click$inboundSchema: z.ZodType<Click, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type Click$Outbound = {
  id: string;
};

/** @internal */
export const Click$outboundSchema: z.ZodType<
  Click$Outbound,
  z.ZodTypeDef,
  Click
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Click$ {
  /** @deprecated use `Click$inboundSchema` instead. */
  export const inboundSchema = Click$inboundSchema;
  /** @deprecated use `Click$outboundSchema` instead. */
  export const outboundSchema = Click$outboundSchema;
  /** @deprecated use `Click$Outbound` instead. */
  export type Outbound = Click$Outbound;
}

export function clickToJSON(click: Click): string {
  return JSON.stringify(Click$outboundSchema.parse(click));
}

export function clickFromJSON(
  jsonString: string,
): SafeParseResult<Click, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Click$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Click' from JSON`,
  );
}

/** @internal */
export const Customer$inboundSchema: z.ZodType<
  Customer,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/** @internal */
export type Customer$Outbound = {
  name: string | null;
  email: string | null;
  avatar: string | null;
  externalId: string | null;
};

/** @internal */
export const Customer$outboundSchema: z.ZodType<
  Customer$Outbound,
  z.ZodTypeDef,
  Customer
> = z.object({
  name: z.nullable(z.string()),
  email: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  externalId: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Customer$ {
  /** @deprecated use `Customer$inboundSchema` instead. */
  export const inboundSchema = Customer$inboundSchema;
  /** @deprecated use `Customer$outboundSchema` instead. */
  export const outboundSchema = Customer$outboundSchema;
  /** @deprecated use `Customer$Outbound` instead. */
  export type Outbound = Customer$Outbound;
}

export function customerToJSON(customer: Customer): string {
  return JSON.stringify(Customer$outboundSchema.parse(customer));
}

export function customerFromJSON(
  jsonString: string,
): SafeParseResult<Customer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Customer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Customer' from JSON`,
  );
}

/** @internal */
export const TrackLeadResponseBody$inboundSchema: z.ZodType<
  TrackLeadResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  click: z.lazy(() => Click$inboundSchema),
  customer: z.lazy(() => Customer$inboundSchema),
});

/** @internal */
export type TrackLeadResponseBody$Outbound = {
  click: Click$Outbound;
  customer: Customer$Outbound;
};

/** @internal */
export const TrackLeadResponseBody$outboundSchema: z.ZodType<
  TrackLeadResponseBody$Outbound,
  z.ZodTypeDef,
  TrackLeadResponseBody
> = z.object({
  click: z.lazy(() => Click$outboundSchema),
  customer: z.lazy(() => Customer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadResponseBody$ {
  /** @deprecated use `TrackLeadResponseBody$inboundSchema` instead. */
  export const inboundSchema = TrackLeadResponseBody$inboundSchema;
  /** @deprecated use `TrackLeadResponseBody$outboundSchema` instead. */
  export const outboundSchema = TrackLeadResponseBody$outboundSchema;
  /** @deprecated use `TrackLeadResponseBody$Outbound` instead. */
  export type Outbound = TrackLeadResponseBody$Outbound;
}

export function trackLeadResponseBodyToJSON(
  trackLeadResponseBody: TrackLeadResponseBody,
): string {
  return JSON.stringify(
    TrackLeadResponseBody$outboundSchema.parse(trackLeadResponseBody),
  );
}

export function trackLeadResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<TrackLeadResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackLeadResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackLeadResponseBody' from JSON`,
  );
}
