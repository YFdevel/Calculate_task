const func=require("../func");
const add=func.add;
const substract=func.substract;
const multiply=func.multiply;
const divide=func.divide;



describe("Функция add()",()=>{
    it("Должна возвращать 9 при аргументах (3,6)",()=>{
        expect(add(3,6)).toBe(9);
    });
    it('Должна возвращать null при аргументах (null, 6)', () => {
        expect(add(null, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (undefined, 6)', () => {
        expect(add(undefined, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (NaN, 6)', () => {
        expect(add(NaN, 6)).toBeNull();
    });

});
describe("Функция substract()",()=>{
    it("Должна возвращать 2 при аргументах (6,3)",()=>{
        expect(substract(6,3)).toBe(3);
    });
    it('Должна возвращать null при аргументах (null, 6)', () => {
        expect(substract(null, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (undefined, 6)', () => {
        expect(substract(undefined, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (NaN, 6)', () => {
        expect(substract(NaN, 6)).toBeNull();
    });
});
describe("Функция multiply()",()=>{
    it("Должна возвращать 9 при аргументах (3,3)",()=>{
        expect(multiply(3,3)).toBe(9);
    });
    it('Должна возвращать null при аргументах (null, 6)', () => {
        expect(multiply(null, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (undefined, 6)', () => {
        expect(multiply(undefined, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (NaN, 6)', () => {
        expect(multiply(NaN, 6)).toBeNull();
    });
});
describe("Функция divide()",()=>{
    it("Должна возвращать 4 при аргументах (12,3)",()=>{
        expect(divide(12,3)).toBe(4);
    });
    it('Должна возвращать null при аргументах (null, 6)', () => {
        expect(divide(null, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (undefined, 6)', () => {
        expect(divide(undefined, 6)).toBeNull();
    });
    it('Должна возвращать null при аргументах (NaN, 6)', () => {
        expect(divide(NaN, 6)).toBeNull();
    });
});
