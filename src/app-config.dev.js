APP_CONFIG = {
    urls: {
        'allResults': 'http://localhost:3000/search'
    },
    params: {
        page: '_page',
        count: '_limit',
        sort: '_sort',
        order: '_order',
        requirementId: 'requirementId_like',
        productId: 'productId_like',
        taskName: 'taskName_like'
    },
    form: {
        criteria: [{
            name: 'isMonkey',
            label: 'Is a Monkey'
        }, {
            name: 'isGorilla',
            label: 'Is a Gorilla'
        }, {
            name: 'isLemur',
            label: 'Is a Lemur'
        }, {
            name: 'isOrangutan',
            label: 'Is an Orangutan'
        }, {
            name: 'isGibbon',
            label: 'Is a Gibbon'
        }, {
            name: 'isHuman',
            label: 'Is a Human'
        }, {
            name: 'isChimpanzee',
            label: 'Is a Chimpanzee'
        }]
    }
};
