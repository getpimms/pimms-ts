/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksGet } from "../../funcs/linksGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetLinkInfoRequest$inboundSchema,
};

export const tool$linksGet: ToolDefinition<typeof args> = {
  name: "links-get",
  description: `Retrieve a link

Retrieve the info for a link.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksGet(
      client,
      args.request,
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
