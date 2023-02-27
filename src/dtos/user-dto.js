module.exports = class UserDto {
    _id;
    email;
    name;

    constructor(model) {
        this.email = model.email;
        this._id = model._id;
        this.name = model.name;
    }
};
