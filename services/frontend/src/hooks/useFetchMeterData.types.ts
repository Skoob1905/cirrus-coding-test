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
