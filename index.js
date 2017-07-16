/**
 * Function to create and define an entity
 * @param object The class to be created
 * @param payload The JSON object to parse
 * @return The newly created object
 */
function create(object, payload) {
    var entity = Reflect.construct(object, []);
    for(key in payload) {
        Reflect.defineProperty(entity, key, {value: payload[key]});
    }
    return entity;
}

module.exports = {
    /**
     * Function to use when you wish to create one object
     * @param object The class to be created
     * @param payload The JSON object to parse
     */
    single: function(object, name) {
        return function(req, res, next) {
            var entity = create(object, JSON.parse(req.body.entity));
            req.body[name] = entity;
            next();
        }
    },
 
    /**
     * Function to use when you wish to create multiple objects
     * @param object The class to be created
     * @param payload The JSON object to parse
     */
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
