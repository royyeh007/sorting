describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts single item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles multiple items', function(){
    expect( bubbleSort([3, 1, 4, 2]) ).toEqual( [1, 2, 3, 4] );
  });

  it('handles arrays with multiple digits', function(){
    expect( bubbleSort([8, 13, 4, 20]) ).toEqual( [4, 8, 13, 20] );
  });


  beforeAll(function () {
    spyOn('swap').and.callThrough();
  });

  it('uses a counter', function(){
    bubbleSort([3, 6, 2, 1]);
    expect(swap.calls.count().toEqual(5))
  });
});
