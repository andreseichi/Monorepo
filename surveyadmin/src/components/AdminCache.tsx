"use client";

import { APIDashboard } from "./cache/Api";
import { CacheDashboard } from "./cache/Cache";

export const AdminCache = () => (
  <div className="admin-cache">
    <APIDashboard />
    <CacheDashboard />
  </div>
);

export default AdminCache;
