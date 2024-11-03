import redisClient from "./redisClient";

/**
 * Set the customer data in the cache
 * @param key The GUID for the customer
 * @param value The processed customer data
 */
export async function setCache(key: string, value: string) {
  await redisClient.set(key, value, {
    // 1 day = 86400 seconds
    EX: 86400,
  });
}

/**
 * Return the value stored in the cache, or null if it doesn't exist
 * @param key The GUID for the customer
 * @returns The processed customer data
 */
export async function getCache(key: string) {
  return await redisClient.get(key);
}
