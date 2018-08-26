module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body);
        db.get_inventory()
            .then(response => res.sendStatus(response))
            .catch(err => console.log('Err in getAll', err));  
    },
    create: (req, res) => {
        let { productName, productUrl, productPrice } = req.body;
        const db = req.app.get('db');
        db.create_product([productName, productUrl, productPrice])
            .then(() => res.status(200))
            .catch(err => console.log('Err in create', err));
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        
        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Err in delete', err));
    },
    update: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;
        let { productName, productUrl, productPrice } = req.body;

        db.update_product([id, productName, productUrl, productPrice])
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Err in update', err));
    }
}