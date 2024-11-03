import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { ProcessedCustomerData } from "../../../backend/src/types";

export function useFetchMeterData(guid: string | undefined) {
  const [data, setData] = useState<ProcessedCustomerData>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Construct fetch url
  const baseURL = import.meta.env.VITE_APP_METER_BASE_API_URL ?? "";
  const meterURL = `${baseURL}/meter/${guid}`;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(meterURL);
        console.log(response);
        if (response.status === 404) {
          throw Error("Error 404");
        }
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [meterURL]);

  return { data, error, loading };
}
