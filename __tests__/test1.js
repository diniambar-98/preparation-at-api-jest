import * as endpoint from '../endpoint/endpoint.js';
import {data} from '../data/data.js';
import * as schema from '../schema/schema.js'

const { matchers } = require('jest-json-schema');

expect.extend(matchers);



describe('reqres',() => {
    test('get method', async () => {
        const resp = await endpoint.get();
        console.log(resp.body);
        expect(resp.status).toEqual(200)
        expect(resp.body.page).toEqual(2)
        expect(resp.body).toMatchSchema(schema.schemaTest);
        expect(resp.body).toMatchSnapshot()
    });

    // test('post method', async () => {
    //     const resp = await endpoint.post(data);
    //     console.log(resp.body);
    // });
});