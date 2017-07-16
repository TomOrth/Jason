/**
* Function to create and define an entity
*/
function create(object, payload) {
    var entity = Reflect.construct(object, []);
    for(key in payload) {
        Reflect.defineProperty(entity, key, {value: payload[key]});
    }
    return entity;
}

module.exports = {
    single: function(object, name) {
        return function(req, res, next) {
            var entity = create(object, JSON.parse(req.body.entity));
            req.body[name] = entity;
            next();
        }
    },
    array: function(object, name) {
        return function(req, res, next) {
            var entities = [];
            var array = JSON.parse(req.body.entity);
            for(var i = 0; i < array.length; ++i) {
                entities.push(create(object, array[i]));
            }
            req.body[name] = entities;
            next();
        }
    }
}
