import express, { Request, Response } from "express";
import { scrapePage } from "../scraper/scraper";

const router = express.Router();

router.post("/scrape", async (req: Request, res: Response) => {
  const { url, selectors } = req.body;
  if (!url || !selectors) {
    return res.status(400).json({ error: "Missing url or selectors in request body." });
  }
  try {
    const data = await scrapePage(url, selectors);
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Scraping failed" });
  }
});

export default router;
