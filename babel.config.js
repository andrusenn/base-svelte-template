module.exports = function (api) {
    api.cache(true);

    const presets = [["@babel/env", { targets: "ie 9, safari 5" }]];

    return {
        presets,
    };
};
