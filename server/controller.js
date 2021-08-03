const houses = require('./db.json');
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body;
        let newHouse = {
            id,
            address,
            price,
            imageURL
        };
        id++;
        houses.push(newHouse);
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(house => house.id === +req.params.id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = houses.findIndex(element => element.id === +id);
        if(houses[index].price <= 0 && type === 'minus') {
            res.status(400).send('Cannot go below 0');
        } else if(houses[index].price <= 9999 && type === 'minus') {
            houses[index].price = 0;
            res.status(200).send(houses);
        }
        else if (type === 'plus') {
            houses[index].price += 10000;
            res.status(200).send(houses);
        } else if (type === 'minus') {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        } else {
            res.status(400).send('Unknown error occured');
        }
    }
};