const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    
    it("Should return false if input was not provided", () => {
        const expected = false;
        const actual = substitution("message");
        expect(actual).to.equal(expected);
      });

    it("Should return false if alphabet was not provided", () => {
        const expected = false;
        const actual = substitution("message");
        expect(actual).to.equal(expected);
      });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
      const expected = false;
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaqaaaaa");
      expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = substitution("message", "plmoknij");
        expect(actual).to.equal(expected);
    });

    it("should return false if duplicate values found in the given alphabet", () => {
        const expected = false;
        const actual = substitution("message", "abcdefghijklmnopqrstuvwxyy");
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces in the message", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("Decoding", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

});
