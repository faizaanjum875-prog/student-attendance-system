test("sample test", () => {
  expect(2 + 2).toBe(4);
});

test("string test", () => {
  expect("Faiza").toBe("Faiza");
});

test("array test", () => {
  expect([1,2,3]).toContain(2);
});

test("boolean test", () => {
  expect(true).toBe(true);
});

test("null test", () => {
  expect(null).toBeNull();
});