// customerRoutes.ts
import { Request, Response, Router } from "express";
import { preprocessCustomerData } from "../util/preProcessData";
import customerData from "../db/data.json";
import { getCache, setCache } from "../services/cache";

const router = Router();

// Define your route
router.get("/:id", async (req: Request, res: Response) => {
  // Fetch ID from the request
  const id = req.params.id;

  // Check if data exists in the cache
  let data = await getCache(id);
  if (data) {
    // If data exists in the cache, parse it and send it back
    res.json(JSON.parse(data));
  } else {
    // Simulate a delay of 100ms for a db call
    setTimeout(async () => {
      // If data does not exist in the cache, query the database
      const customer = customerData.find((customer) => customer.guid === id);

      // If customer is found, preprocess the data, cache it, and send it back
      if (customer) {
        const processedData = preprocessCustomerData(customer);
        await setCache(id, JSON.stringify(processedData));
        res.json(processedData);
      } else {
        res.status(404).json({ error: "Customer not found" });
      }
    }, 100);
  }
});

export default router;
