import customerData from "./db/data.json";
import { preprocessCustomerData } from "./util/preProcessData";

export type CustomerData = (typeof customerData)[number];

export type ProcessedCustomerData = ReturnType<typeof preprocessCustomerData>;
