import type { Access, FieldAccess, Where } from "payload";

export const anyone: Access = () => true;

export const loggedIn: Access = ({ req }) => Boolean(req.user);

export const adminOnly: Access = ({ req }) => req.user?.role === "admin";

export const adminOnlyField: FieldAccess = ({ req }) => req.user?.role === "admin";

/** Visitors only ever see published documents; signed-in editors see drafts too. */
export const publishedOrLoggedIn: Access = ({ req }) => (req.user ? true : PUBLISHED);

export const PUBLISHED: Where = { _status: { equals: "published" } };
