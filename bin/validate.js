/**
 * Created by june on 2017/3/16.
 */
const typeOf = (obj, type) => {
    if (Array.isArray(type)) {
        return type.some(item => {
            return typeOf(obj, item);
        })
    }
    return Object.prototype.toString.call(obj).toLowerCase().slice(8, -1) == type;
};


module.exports = function (config) {
    if (!typeOf(config.server.port, 'number')) {
        return `config.server.port must be number`;
    }

    if (!typeOf(config.server.viewRoot, ['string', 'array'])) {
        return `config.server.viewRoot must be string or array`;
    }

    if (!typeOf(config.server.syncData, 'string')) {
        return `config.server.viewRoot must be string`;
    }

    if (!typeOf(config.server.asyncData, 'string')) {
        return `config.server.viewRoot must be string`;
    }

    return true;
};