describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([4, 3, 2, 1])).toEqual([4], [3], [2], [1])
  });
});
