define(function() {

    var config = {
        paths: {
            FAOSTAT_THEME: 'faostat-theme',
            faostat_theme: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            },
            jsonEditor: {
                deps: ['jquery', 'bootstrap']
            }
        }
    };

    return config;

});