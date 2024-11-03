// Props for rendering the meter data
export type meterData = {
  /**
   * Full name of the customer
   */
  fullName: string;
  /**
   * Public URL for the avatar of the customer
   */
  avatar: string;
  /**
   * Address including firstline and postcode
   */
  address: string;
  /**
   * Whether the customer has a smart meter
   */
  hasSmartMeter: boolean;
};

export type ProcessedCustomerData = {
  fullName: string;
  address: string;
  commsHub: {
    events: number;
    deviceTime: string;
    signal: number;
    ipv6: string;
    imei: string;
    icc: string;
    msisdn: string;
    manufacturer: {
      name: string;
      model: string;
      logoBase64: string;
    };
    supplier: {
      name: string;
      logoBase64: string;
    };
  };
  guid: string;
  avatar: string;
  hasSmartMeter: boolean;
};
