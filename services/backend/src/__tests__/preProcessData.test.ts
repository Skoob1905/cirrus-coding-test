import { describe, test, expect, expectTypeOf } from "vitest";
import { preprocessCustomerData } from "../util/preProcessData";
import { customerData } from "./data/customerData";

describe("PreProcessData", () => {
  // Should format the address properly, and preserve the rest of the object
  test("should format the object correctly", () => {
    expect(preprocessCustomerData(customerData)).toStrictEqual({
      fullName: `${customerData.firstName} ${customerData.lastName}`,
      address: `${customerData.address.firstLine}, ${customerData.address.postCode}`,
      commsHub: {
        ...customerData.commsHub,
        events: customerData.commsHub.events.length,
      },
      avatar: customerData.avatar,
      hasSmartMeter: customerData.hasSmartMeter,
      guid: customerData.guid,
    });
  });

  // Should remove the commsHub events array and replace it with the length
  test("should remove the commsHub events array, and replace it with a number", () => {
    const processedData = preprocessCustomerData(customerData);
    expectTypeOf(processedData.commsHub.events).not.toEqualTypeOf<
      { type: string; timestamp: string }[]
    >();
    expectTypeOf(processedData.commsHub.events).toEqualTypeOf<number>();
  });
});
