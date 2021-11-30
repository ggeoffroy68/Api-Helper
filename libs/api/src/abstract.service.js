class Service {
    find(req, callback) {
        callback("Abstract method called: find");
    }

    findOne(req, callback) {
        callback("Abstract method called: findOne");
    }

    create(req, callback) {
        callback("Abstract method called: create");
    }

    update(req, callback) {
        callback("Abstract method called: update");
    }

    delete(req, callback) {
        callback("Abstract method called: delete");
    }
}

module.exports = Service
