import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapePage(url: string, selectors: Record<string, string>) {
  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);

  const result: Record<string, string> = {};
  for (const [key, selector] of Object.entries(selectors)) {
    result[key] = $(selector).first().text().trim();
  }
  return result;
}
