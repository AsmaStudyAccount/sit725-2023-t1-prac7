var expect = require("chai").expect;
var request = require("supertest");
var app = require("../server"); // Adjust the path as needed

describe("GET /api/cards", function () {
  it("responds with JSON containing a list of cards", function (done) {
    request(app)
      .get("/api/cards")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.an("array"); // Assuming the response is an array
        // Add more assertions here based on your expected response
        done();
      });
  });
});
