import * as math from '../src/sum'
test("1+2",()=>{
  expect(math.sum(1,1)).toBe(2);
})
test("-1+1",()=>{
  expect(math.sum(-1,1)).toBe(0);
})