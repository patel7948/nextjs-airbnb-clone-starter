import { AirbndServer as TAirbndServer } from "../api/airbndServer/AirbndServer";

export const AIRBNDSERVER_TITLE_FIELD = "id";

export const AirbndServerTitle = (record: TAirbndServer): string => {
  return record.id?.toString() || String(record.id);
};
