// import the index... function from our
// main program file (index.js)

var index = require('../index');

describe("A program to implement a crypto square cypher", () => {

  it("can remove all punctuation from some text", () => {
    expect(index.toNormalize("Egad! Watson, t'is this; no punctuation?..."))
      .toBe("EgadWatsontisthisnopunctuation");
  });

  it("can convert letters to lowercase", () => {
    expect(index.toLower("HelloWorld"))
      .toBe("helloworld");
    expect(index.toLower("IS MY Test Working?"))
      .toBe("is my test working?");
  })

  it("can count the characters in a string", () => {
    expect(index.toCount("teststring"))
      .toBe(10);
    expect(index.toCount("abunchofstuff"))
      .toBe(13);

  })

  
});