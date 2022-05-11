///<reference types="cypress"/>

describe("UPDATE Request", () => {
  

  it("Update an existing post via the /posts api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Where can I learn automation testing?",
        author: "Tim Jones",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
