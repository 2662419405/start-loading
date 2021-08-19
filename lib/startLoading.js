'use strict';

/**
 * @param {Promise}
 */
const startLoading = async (fetchPromise) => {
    if (!fetchPromise) return false;
    console.log(fetchPromise)
    return new Promise(resolve => {
        fetchPromise.then(res => {
            console.log(11)
        })
    })
}

module.exports = startLoading;

module.exports.default = startLoading;