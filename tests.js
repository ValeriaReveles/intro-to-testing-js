// Unit tests for the helloWorld function
 describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return the string when called', function() {
        expect(typeof sayHello("")).toBe("string");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, World!" when executed', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});


describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return boolean value of true when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return boolean value of true when executed', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return value of true when executed', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return value of true when executed', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return value of false when executed', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return value of false when executed', function() {
        expect(isEven("string")).toBe(false);
    });
    it('should return value of false when executed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return value of false when executed', function() {
        expect(isEven()).toBe(false);
    });
});


describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('input a vowel, it should return value of true when executed', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('input a vowel, it should return value of true when executed', function() {
        expect(isVowel("A")).toBe(true);
     });
    it('input string, it should return value of false when executed', function() {
        expect(isVowel("y")).toBe(true);
    });
    it('input number, it should return value of false when executed', function() {
        expect(isVowel(Number)).toBe(true);
    });
    it('input undefined, it should return value of false when executed', function() {
        expect(isVowel()).toBe(true);
    });
});

describe('addFunction', function() {
    it('should be a defined function', function () {
        expect(typeof addFunction).toBe('function');
    });
    it('should return the sum of inputs when executed', function() {
        expect(addFunction(2, 3)).toBe(5);
    });
    it('should return the sum of inputs when executed', function() {
        expect(addFunction(-3, -9)).toBe(-12);
    });
    it('should return the sum of inputs when executed', function() {
        expect(addFunction(5, 6)).toBe(11);
    });
    it('should return string "Not a Number" if inputs are strings when executed', function() {
        expect(addFunction('string', 'string')).toBe("Not a Number");
    });
});