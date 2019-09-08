import { JestEnvironment } from "@jest/environment";
import itChanged from "./index";

describe("it-changed", () => {
  it("initializes", () => {
    let detector = itChanged();
    expect(detector).toBeDefined();
    expect(detector.add).toBeDefined();
  });

  describe("intializes with options", () => {
    it("sets an add callback", () => {
      const addCallBack = obj => 42;
      let detector = itChanged({ add: addCallBack });
      expect(detector.add()).toBe(42);
    });
  });

  describe(".add()", () => {
    it("calls the add callback", () => {
      let addCallBack = jest.fn(obj => obj);
      let detector = itChanged({
        add: addCallBack
      });

      let addedObj = { id: "1234", stuff: "testing stuff" };
      detector.add(addedObj);
      expect(addCallBack.mock.calls.length).toBe(1);
    });

    it("doesn't call the add callback when exists === true", () => {
      let addCallBack = jest.fn(obj => obj);
      let existsCallback = jest.fn(obj => true);
      let detector = itChanged({
        add: addCallBack,
        exists: existsCallback
      });

      let addedObj = { id: "1234", stuff: "testing stuff" };
      detector.add(addedObj);
      expect(addCallBack.mock.calls.length).toBe(0);
      expect(existsCallback.mock.calls.length).toBe(1);
    });
  });
});
