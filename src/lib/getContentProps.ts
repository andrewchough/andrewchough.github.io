import fs from "fs";
import path from "path";

import { parseDatedBullets, type DatedBulletGroup } from "./datedBullets";

export type ContentPageProps = {
  groups: DatedBulletGroup[];
};

export function getContentProps(filename: string): ContentPageProps {
  const filePath = path.join(process.cwd(), "src", "content", filename);
  const markdown = fs.readFileSync(filePath, "utf8");
  const groups = parseDatedBullets(markdown);
  return { groups };
}
