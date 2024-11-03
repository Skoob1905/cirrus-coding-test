import { CustomerData } from "../types";

/**
 * Function to format name and address so it can be displayed in the UI
 * @param customerData Raw Customer data object
 * @returns Customer data which has been preprocessed
 */
export function preprocessCustomerData(customerData: CustomerData) {
  // Destructure props we want to change, spread the rest
  const {
    firstName,
    lastName,
    address: { firstLine, postCode },
    ...initialProps
  } = customerData;

  // Create the full name and address strings
  const fullName = `${firstName} ${lastName}`;

  // Create the address string
  const address = `${firstLine}, ${postCode}`;

  // Return the new object which is spreaded with the rest of the props
  return {
    ...initialProps,
    fullName,
    address,
    commsHub: {
      ...customerData.commsHub,
      events: customerData.commsHub.events.length,
      deviceTime: new Date(customerData.commsHub.deviceTime).toISOString(),
    },
  };
}
