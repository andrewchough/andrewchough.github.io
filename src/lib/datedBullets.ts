export type DatedBulletItem = {
  title: string;
  url?: string;
  children?: DatedBulletItem[];
};

export type DatedBulletGroup = {
  date: string;
  id: string;
  items: DatedBulletItem[];
};

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function isDateLine(line: string) {
  const trimmed = line.trim();
  // Supports MM/DD/YY or YYYY-MM-DD
  return (
    /^\d{1,2}\/\d{1,2}\/\d{2}$/.test(trimmed) ||
    /^\d{4}-\d{2}-\d{2}$/.test(trimmed)
  );
}

export function parseBullet(content: string): DatedBulletItem | null {
  const text = content.trim();
  if (!text) return null;

  // - [Title](https://...)
  const md = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/.exec(text);
  if (md) return { title: md[1].trim(), url: md[2].trim() };

  // - Title - https://...
  const titled = /^(.*?)\s+-\s+(https?:\/\/\S+)$/.exec(text);
  if (titled) return { title: titled[1].trim(), url: titled[2].trim() };

  // - https://...
  if (/^https?:\/\/\S+$/.test(text)) return { title: text, url: text };

  // Fallback: plain text bullet (renders as text)
  return { title: text };
}

/**
 * Parses markdown like:
 *
 * 12/12/25
 * - https://example.com
 *   - nested link
 */
export function parseDatedBullets(markdown: string): DatedBulletGroup[] {
  const lines = markdown.split(/\r?\n/);
  const groups: DatedBulletGroup[] = [];

  let currentDate: string | null = null;
  let currentItems: DatedBulletItem[] = [];
  let lastTopLevel: DatedBulletItem | null = null;

  const flush = () => {
    if (!currentDate) return;
    if (!currentItems.length) {
      currentDate = null;
      return;
    }
    const id = slugify(currentDate);
    groups.push({ date: currentDate, id, items: currentItems });
    currentDate = null;
    currentItems = [];
    lastTopLevel = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line === "---" || line.startsWith("# ")) continue;

    if (isDateLine(line)) {
      flush();
      currentDate = line;
      lastTopLevel = null;
      continue;
    }

    // Nested bullet: indent (2+ spaces) then "- "
    if (/^\s{2,}-\s+/.test(raw)) {
      if (!currentDate || !lastTopLevel) continue;
      const parsed = parseBullet(raw.replace(/^\s{2,}-\s+/, ""));
      if (parsed) {
        if (!lastTopLevel.children) lastTopLevel.children = [];
        lastTopLevel.children.push(parsed);
      }
      continue;
    }

    if (line.startsWith("- ")) {
      if (!currentDate) continue;
      const parsed = parseBullet(line.slice(2));
      if (parsed) {
        currentItems.push(parsed);
        lastTopLevel = parsed;
      }
    }
  }

  flush();
  return groups;
}
