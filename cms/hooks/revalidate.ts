import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook, PayloadRequest } from "payload";

/**
 * Content is small and heavily cross-linked (settings feed every page, projects appear on the
 * home page), so any edit refreshes the whole site rather than tracking individual paths.
 */
async function refreshSite(req: PayloadRequest) {
  if (req.context.skipRevalidate) return;
  try {
    // Imported lazily: the Payload CLI loads this file under plain Node ESM, where `next/cache` does not resolve.
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch {
    // Outside a Next.js request (seed or migration scripts) there is no cache to refresh.
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
  await refreshSite(req);
  return doc;
};

export const revalidateAfterDelete: CollectionAfterDeleteHook = async ({ doc, req }) => {
  await refreshSite(req);
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = async ({ doc, req }) => {
  await refreshSite(req);
  return doc;
};

export const revalidateHooks = { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] };
