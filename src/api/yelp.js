import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -fi2SgGvGaQ3EeL98Ei02qU3xy8e6LIcXGX-7N4Ac1RPYyL402KQiJRfxSJ0GRGcxEPOkP0TlbEqEFaVG9jrt87AGv1cfkbwej8NxO0m2c5zjAaVIy8RbcuVfQKuY3Yx'
    }
})

