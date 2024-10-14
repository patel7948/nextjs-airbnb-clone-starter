import { AirbndServerWhereInput } from "./AirbndServerWhereInput";
import { AirbndServerOrderByInput } from "./AirbndServerOrderByInput";

export type AirbndServerFindManyArgs = {
  where?: AirbndServerWhereInput;
  orderBy?: Array<AirbndServerOrderByInput>;
  skip?: number;
  take?: number;
};
