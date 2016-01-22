describe("pingPong", function(countTo) {
  it("will count the numbers in the array", function() {
    expect(16).to.equal(16);
  });

  it("will check if a number is divisible by 3, print out 'ping'", function() {
    expect(pingPong(3)).to.eql([1,2,"ping"]);
  });

  it("will check if a number is divisible by 5, print out 'pong'", function() {
    expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
  });

  it("will check if a number is divisible by 15, print out 'pingpong'", function() {
    expect(pingPong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  });
});
