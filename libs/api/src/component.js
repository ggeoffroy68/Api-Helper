const {ConditionToRespond} = require('./helper/response');

const Interface = require('./helper/interface');
const DefaultInterface = new Interface('DefaultInterface', 'find', 'findOne', 'create', 'update', 'delete');

class Controller {
    constructor(service) {
        Interface.checkImplements(service, DefaultInterface);
        this.service = service;
    }
0
    get(req, res) {
        this.service.find(req, (err, docs) => {
            const responses = [
                new ConditionToRespond(err, 500, err),
                new ConditionToRespond(true, 200, docs)
            ];
            ConditionToRespond.findResponse(res, responses);
        });
    }

    getOne(req, res) {
        this.service.findOne(req, (err, doc) => {
            const responses = [
                new ConditionToRespond(err, 500, err),
                new ConditionToRespond(true, 200, doc)
            ];
            ConditionToRespond.findResponse(res, responses);
        });
    }

    post(req, res) {
        this.service.create(req, (err, doc) => {
            const responses = [
                new ConditionToRespond(err, 500, err),
                new ConditionToRespond(true, 204, doc)
            ];
            ConditionToRespond.findResponse(res, responses);
        });
    }

    #idMiddleware(successfull, id, req, callback) {
        if (id && id !== "null" && id !== "undefined")
            successfull.bind(this.service)(req, callback);
        else
            callback(undefined, undefined);
    }

    patch(req, res) {
        this.#idMiddleware(this.service.update, req.params.id, req, (err, doc) => {
            const responses = [
                new ConditionToRespond(err, 500, err),
                new ConditionToRespond(!doc, 404, new Error('Not found.')),
                new ConditionToRespond(true, 204, doc)
            ];
            ConditionToRespond.findResponse(res, responses);
        });
    }

    delete(req, res) {
        this.#idMiddleware(this.service.delete, req.params.id, req, (err, doc) => {
            const responses = [
                new ConditionToRespond(err, 500, err),
                new ConditionToRespond(!doc, 404, new Error('Not found.')),
                new ConditionToRespond(true, 204, doc)
            ];
            ConditionToRespond.findResponse(res, responses);
        });
    }
}

module.exports = {Controller, DefaultInterface};
