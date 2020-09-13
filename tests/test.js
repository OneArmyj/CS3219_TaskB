// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var guitarists = require('../dummy/guitarists');

// Configure chai. an assertion library for node and browser, can be paired with any JS testing framework (like Mocha)
chai.use(chaiHttp);
chai.should(); // use Should Assertion style

// Test POST request to add guitarist
describe("POST", () => {
    // POST Slash into DB
    it('should add Slash from Guns N Roses', (done) => {
        chai.request(app)
            .post('/api/guitarists')
            .send(guitarists[0])
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal("New guitarist added!");
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[0].name);
                result.body.data.guitar.should.equal(guitarists[0].guitar);
                result.body.data.band.should.equal(guitarists[0].band);
                result.body.data.age.should.equal(guitarists[0].age);
                done();
            });
    });
    // POST Robben Ford into DB
    it('should add Robben Ford from L.A Express', (done) => {
        chai.request(app)
            .post('/api/guitarists')
            .send(guitarists[1])
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal("New guitarist added!");
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[1].name);
                result.body.data.guitar.should.equal(guitarists[1].guitar);
                result.body.data.band.should.equal(guitarists[1].band);
                result.body.data.age.should.equal(guitarists[1].age);
                done();
            });
    });
    // POST David Gilmour into DB
    it('should add David Gilmour from Pink Floyd', (done) => {
        chai.request(app)
            .post('/api/guitarists')
            .send(guitarists[2])
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal("New guitarist added!");
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[2].name);
                result.body.data.guitar.should.equal(guitarists[2].guitar);
                result.body.data.band.should.equal(guitarists[2].band);
                result.body.data.age.should.equal(guitarists[2].age);
                done();
            });

    });
});

// Test GET requests to retrieve all guitarists information or individual information based on their name
describe('GET', () => {
    // GET all guitarists information
    it ('should get all guitarists information', (done) => {
        chai.request(app)
            .get('/api/guitarists')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal("Guitarists information retrieved successfully");
                result.body.data.length.should.equal(3);
                done();
            });
    });
    // GET Slash's information
    it ('should get Slash\'s information', (done) => {
        chai.request(app)
            .get('/api/guitarists/Slash')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal(guitarists[0].name + ' details loading..');
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[0].name);
                result.body.data.guitar.should.equal(guitarists[0].guitar);
                result.body.data.band.should.equal(guitarists[0].band);
                result.body.data.age.should.equal(guitarists[0].age);
                done();
            });
    });
    // GET Robben Ford's information, %20 is URL encoding for space
    it ('should get Robben Ford\'s information', (done) => {
        chai.request(app)
            .get('/api/guitarists/Robben%20Ford')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal(guitarists[1].name + ' details loading..');
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[1].name);
                result.body.data.guitar.should.equal(guitarists[1].guitar);
                result.body.data.band.should.equal(guitarists[1].band);
                result.body.data.age.should.equal(guitarists[1].age);
                done();
            });
    });
    // GET David Gilmour's information
    it ('should get David Gilmour\'s information', (done) => {
        chai.request(app)
            .get('/api/guitarists/David%20Gilmour')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal(guitarists[2].name + ' details loading..');
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[2].name);
                result.body.data.guitar.should.equal(guitarists[2].guitar);
                result.body.data.band.should.equal(guitarists[2].band);
                result.body.data.age.should.equal(guitarists[2].age);
                done();
            });
    });
});

// Test PUT to edit Slash's information to John Frusciante (guitarists[3])
describe('PUT', () => {
    it('edit Slash\'s information', (done) => {
        chai.request(app)
            .put('/api/guitarists/Slash')
            .send(guitarists[3])
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal('Slash information edited');
                result.body.data.should.have.property('name');
                result.body.data.should.have.property('guitar');
                result.body.data.should.have.property('band');
                result.body.data.should.have.property('age');
                result.body.data.name.should.equal(guitarists[3].name);
                result.body.data.guitar.should.equal(guitarists[3].guitar);
                result.body.data.band.should.equal(guitarists[3].band);
                result.body.data.age.should.equal(guitarists[3].age);
                done();
            });
    }) 
    // // GET Slash's information (SHOULD FAIL)
    // it ('should get Slash\'s information', (done) => {
    //     chai.request(app)
    //         .get('/api/guitarists/Slash')
    //         .end((error, result) => {
    //             result.should.have.status(404);
    //             done();
    //         });
    // });
    // // GET John Frusciante's information (SHOULD PASS)
    // it ('should get John Frusciante\'s information', (done) => {
    //     chai.request(app)
    //         .get('/api/guitarists/John Frusciante')
    //         .end((error, result) => {
    //             result.should.have.status(200);
    //             result.body.data.should.have.property('name');
    //             result.body.data.should.have.property('guitar');
    //             result.body.data.should.have.property('band');
    //             result.body.data.should.have.property('age');
    //             result.body.data.name.should.equal(guitarists[3].name);
    //             result.body.data.guitar.should.equal(guitarists[3].guitar);
    //             result.body.data.band.should.equal(guitarists[3].band);
    //             result.body.data.age.should.equal(guitarists[3].age);
    //             done();
    //         });
    // });
})

// Test DELETE to remove guitarists informations
describe('DELETE', () => {
    it('should delete John Frusciante', (done) => {
        chai.request(app)
        .delete('/api/guitarists/John%20Frusciante')
        .end((error, result) => {
            result.should.have.status(200);
            result.body.message.should.equal('John Frusciante deleted');
            done();
        });
    });
    it('should delete Robben Ford', (done) => {
        chai.request(app)
            .delete('/api/guitarists/Robben%20Ford')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal('Robben Ford deleted');
                done();
        });
    });
    it('should delete David Gilmour', (done) => {
        chai.request(app)
            .delete('/api/guitarists/David%20Gilmour')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal('David Gilmour deleted');
                done();
        });
    });
    it ('verify empty list of guitarists', (done) => {
        chai.request(app)
            .get('/api/guitarists')
            .end((error, result) => {
                result.should.have.status(200);
                result.body.message.should.equal("Guitarists information retrieved successfully");
                result.body.data.length.should.equal(0);
                done();
            });
    });
});