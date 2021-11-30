class ConditionToRespond {
    constructor(condition, code, data = undefined) {
        this.condition = condition;
        this.code = code;
        this.data = data;
    }

    match() {
        return this.condition;
    }

    respond(res) {
        return res.status(this.code).json(this.data);
    }

    static findResponse(res, array = []) {
        for (let item of array)
            if (item.match())
                return item.respond(res);
        return undefined;
    }

}

module.exports = {ConditionToRespond};
