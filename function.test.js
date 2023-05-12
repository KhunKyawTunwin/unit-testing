const functions = require("./function");

test("should first 2+3 to equal 5", () => {
  expect(functions.add(2, 3)).toBe(5);
});

test("should first 2+3 to equal 5", () => {
  expect(functions.add(2, 3)).not.toBe(6);
});

/* 

        CHECK FOR TRUTHY & FALSY VALUES
        toBeNull matches only null
        toBeUnderfined matches only undefined
        beBeDefined is the opposite of toBeUnderfined
        toBeTruthy matches anything that an if statement treats as true
        toBeFalsy matches anything that an if statement treats as false

*/

// toBeNull

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy

test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual

test(" User should be mrKhun object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "mrkhun",
    lastName: "codeCamp",
  });
});

// Less than and greater than

test("Should be under 1000", () => {
  const load1 = 500;
  const load2 = 500;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

// Regex

test("There is no I in team", () => {
  expect("tems").not.toMatch(/I/);
});

//Arrays

test("Array string or value should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
// Promise

// test("User fetched name should be Leanne Graham", () => {
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });
//

// Async Await

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
