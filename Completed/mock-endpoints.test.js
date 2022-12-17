const axios = require("axios");
/* Mocking the axios module. */
jest.mock("axios");

describe("getUserData", () => {
  it("makes an API call and returns the response data", async () => {
    // Set up the mock response for the API call
    const mockResponse = {
      data: {
        id: 7,
        name: "Cristian Schumm",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    };
    axios.get.mockResolvedValue(mockResponse);
    const testGetUserData = require("./mock-endpoints");

    /* Calling the function we want to test. */
    testGetUserData.getUserData();

    /* Checking if the axios.get method was called. */
    expect(axios.get).toHaveBeenCalled();
    /* Checking if the axios.get method was called with the correct URL. */
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });

  it("handles API errors correctly", async () => {
    // Set up the mock response for the API call to be a rejected promise
    axios.get.mockRejectedValue(new Error("API error"));
    const testGetUserData = require("./mock-endpoints");

    // Call the function we want to test and catch any errors it throws
    try {
      await testGetUserData.getUserData();
    } catch (error) {
      expect(error.message).toEqual("API error");
    }
  });
});
