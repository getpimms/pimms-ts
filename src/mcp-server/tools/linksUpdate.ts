/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { linksUpdate } from "../../funcs/linksUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  linkId: z.string(),
  requestBody: operations.UpdateLinkRequestBody$inboundSchema.optional(),
};

export const tool$linksUpdate: ToolDefinition<typeof args> = {
  name: "links-update",
  description: `Update a link

Update a link for the authenticated workspace. If there's no change, returns it as it is.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksUpdate(
      client,
      args.linkId,
      args.requestBody,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
