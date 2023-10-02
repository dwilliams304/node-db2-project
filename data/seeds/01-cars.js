// STRETCH
const cars = [
    {
        vin: '1234567891234',
        make: 'kia',
        model: 'stinger',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1234567891235',
        make: 'volkswagen',
        model: 'golf',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1234567891236',
        make: 'honda',
        model: 'civic',
        mileage: 250000,
        title: 'salvage',
        transmission: 'automatic'
    },
]



exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
}