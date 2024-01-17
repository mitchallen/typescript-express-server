const assert = require('assert');
const axios = require('axios');
const { setWorldConstructor, Given, When, Then } = require('@cucumber/cucumber');

const PORT = process.env.PORT || 3000;
const TEST_PORT = process.env.TEST_PORT || PORT;

setWorldConstructor(function (options) {
    function createWorld() {
        const serviceUrl = `http://localhost:${TEST_PORT}`
        const headers = {
            'accept': 'application/json',
            'x-api-key': 'demo-key'
        }
        let root = {}
        return {
            serviceUrl,
            headers,
            root,
        }
    }
    this.world = createWorld();
})

Given('the server is running', async function () {
    // Service must be already running on expected port
    const response = await axios.get(this.world.serviceUrl);
    assert.strictEqual(response.status, 200);
});

When('the root endpoint is requested', async function () {
    this.world.root.response = await axios.get(this.world.serviceUrl);
})

Then('the response contains a version property',  async function () {
    const response = this.world.root.response;
    assert.ok(response.data.version)
})
