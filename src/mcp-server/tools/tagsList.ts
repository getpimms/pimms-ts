/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagsList } from "../../funcs/tagsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTagsRequest$inboundSchema,
};

export const tool$tagsList: ToolDefinition<typeof args> = {
  name: "tags-list",
  description: `Retrieve a list of tags

Retrieve a list of tags for the authenticated workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tagsList(
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
