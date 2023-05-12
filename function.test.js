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

test("Should be under 1899");
