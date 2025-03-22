/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The level of error correction to use for the QR code. Defaults to `L` if not provided.
 */
export const Level = {
  L: "L",
  M: "M",
  Q: "Q",
  H: "H",
} as const;
/**
 * The level of error correction to use for the QR code. Defaults to `L` if not provided.
 */
export type Level = ClosedEnum<typeof Level>;

export type GetQRCodeRequest = {
  /**
   * The URL to generate a QR code for.
   */
  url: string;
  /**
   * The logo to include in the QR code. Can only be used with a paid plan on Dub.co.
   */
  logo?: string | undefined;
  /**
   * The size of the QR code in pixels. Defaults to `600` if not provided.
   */
  size?: number | undefined;
  /**
   * The level of error correction to use for the QR code. Defaults to `L` if not provided.
   */
  level?: Level | undefined;
  /**
   * The foreground color of the QR code in hex format. Defaults to `#000000` if not provided.
   */
  fgColor?: string | undefined;
  /**
   * The background color of the QR code in hex format. Defaults to `#ffffff` if not provided.
   */
  bgColor?: string | undefined;
  /**
   * Whether to hide the logo in the QR code. Can only be used with a paid plan on Dub.co.
   */
  hideLogo?: boolean | undefined;
  /**
   * The size of the margin around the QR code. Defaults to 2 if not provided.
   */
  margin?: number | undefined;
  /**
   * DEPRECATED: Margin is included by default. Use the `margin` prop to customize the margin size.
   */
  includeMargin?: boolean | undefined;
};

/** @internal */
export const Level$inboundSchema: z.ZodNativeEnum<typeof Level> = z.nativeEnum(
  Level,
);

/** @internal */
export const Level$outboundSchema: z.ZodNativeEnum<typeof Level> =
  Level$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Level$ {
  /** @deprecated use `Level$inboundSchema` instead. */
  export const inboundSchema = Level$inboundSchema;
  /** @deprecated use `Level$outboundSchema` instead. */
  export const outboundSchema = Level$outboundSchema;
}

/** @internal */
export const GetQRCodeRequest$inboundSchema: z.ZodType<
  GetQRCodeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  logo: z.string().optional(),
  size: z.number().default(600),
  level: Level$inboundSchema.default("L"),
  fgColor: z.string().default("#000000"),
  bgColor: z.string().default("#FFFFFF"),
  hideLogo: z.boolean().default(false),
  margin: z.number().default(2),
  includeMargin: z.boolean().default(true),
});

/** @internal */
export type GetQRCodeRequest$Outbound = {
  url: string;
  logo?: string | undefined;
  size: number;
  level: string;
  fgColor: string;
  bgColor: string;
  hideLogo: boolean;
  margin: number;
  includeMargin: boolean;
};

/** @internal */
export const GetQRCodeRequest$outboundSchema: z.ZodType<
  GetQRCodeRequest$Outbound,
  z.ZodTypeDef,
  GetQRCodeRequest
> = z.object({
  url: z.string(),
  logo: z.string().optional(),
  size: z.number().default(600),
  level: Level$outboundSchema.default("L"),
  fgColor: z.string().default("#000000"),
  bgColor: z.string().default("#FFFFFF"),
  hideLogo: z.boolean().default(false),
  margin: z.number().default(2),
  includeMargin: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetQRCodeRequest$ {
  /** @deprecated use `GetQRCodeRequest$inboundSchema` instead. */
  export const inboundSchema = GetQRCodeRequest$inboundSchema;
  /** @deprecated use `GetQRCodeRequest$outboundSchema` instead. */
  export const outboundSchema = GetQRCodeRequest$outboundSchema;
  /** @deprecated use `GetQRCodeRequest$Outbound` instead. */
  export type Outbound = GetQRCodeRequest$Outbound;
}

export function getQRCodeRequestToJSON(
  getQRCodeRequest: GetQRCodeRequest,
): string {
  return JSON.stringify(
    GetQRCodeRequest$outboundSchema.parse(getQRCodeRequest),
  );
}

export function getQRCodeRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetQRCodeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetQRCodeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetQRCodeRequest' from JSON`,
  );
}
