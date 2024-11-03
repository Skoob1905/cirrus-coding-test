import { useEffect, useState } from "react";
import axios from "axios";
import type { ProcessedCustomerData } from "./useFetchMeterData.types";

export function useFetchMeterData(guid: string | undefined) {
  const [data, setData] = useState<ProcessedCustomerData>();

  // Construct fetch url
  const baseURL = import.meta.env.VITE_APP_METER_BASE_API_URL ?? "";
  const meterURL = `${baseURL}/meter/${guid}`;

  useEffect(() => {
    (async function () {
      const response = await axios.get(meterURL);
      setData(response.data);
    })();
  }, [meterURL]);

  return { data };
}
