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
        txtfilters: [{
            name: 'requirementId',
            label: 'Requirement ID'
        }, {
            name: 'productId',
            label: 'Product Id'
        }, {
            name: 'taskName',
            label: 'Task Name'
        }],
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
    },
    columns: [
        'requirementId',
        'productId',
        'taskName',
        'date',
        'frames',
        'biscuits',
        'isMonkey',
        'isGorilla',
        'isLemur',
        'isOrangutan',
        'isGibbon',
        'isHuman',
        'isChimpanzee'
    ],
    columnMetadata: [
        {
            'columnName': 'requirementId',
            'order': 1,
            'locked': false,
            'visible': true,
            'displayName': 'Requirement ID'
        },{
            'columnName': 'productId',
            'order': 2,
            'locked': false,
            'visible': true,
            'displayName': 'Product ID'
        },{
            'columnName': 'taskName',
            'order': 3,
            'locked': false,
            'visible': true,
            'displayName': 'Task Name'
        },{
            'columnName': 'date',
            'order': 4,
            'locked': false,
            'visible': true,
            'displayName': 'Date'
        },{
            'columnName': 'frames',
            'order': 5,
            'locked': false,
            'visible': true,
            'displayName': 'Frames'
        },{
            'columnName': 'biscuits',
            'order': 6,
            'locked': false,
            'visible': true,
            'displayName': 'Biscuits'
        },{
            'columnName': 'isMonkey',
            'order': 7,
            'locked': false,
            'visible': true,
            'displayName': 'Monkey'
        },{
            'columnName': 'isGorilla',
            'order': 8,
            'locked': false,
            'visible': true,
            'displayName': 'Gorilla'
        },{
            'columnName': 'isLemur',
            'order': 9,
            'locked': false,
            'visible': true,
            'displayName': 'Lemur'
        },{
            'columnName': 'isOrangutan',
            'order': 10,
            'locked': false,
            'visible': true,
            'displayName': 'Orangutan'
        },{
            'columnName': 'isGibbon',
            'order': 11,
            'locked': false,
            'visible': true,
            'displayName': 'Gibbon'
        },{
            'columnName': 'isHuman',
            'order': 12,
            'locked': false,
            'visible': true,
            'displayName': 'Human'
        },{
            'columnName': 'isChimpanzee',
            'order': 13,
            'locked': false,
            'visible': true,
            'displayName': 'Chimpanzee'
        },{
            'columnName': 'email',
            'order': 14,
            'locked': false,
            'visible': false,
            'displayName': 'Email'
        },{
            'columnName': 'address',
            'order': 15,
            'locked': false,
            'visible': false,
            'displayName': 'Address'
        },{
            'columnName': 'city',
            'order': 16,
            'locked': false,
            'visible': false,
            'displayName': 'City'
        },{
            'columnName': 'state',
            'order': 17,
            'locked': false,
            'visible': false,
            'displayName': 'State'
        },{
            'columnName': 'zipCode',
            'order': 18,
            'locked': false,
            'visible': false,
            'displayName': 'Zip Code'
        },{
            'columnName': 'latitude',
            'order': 19,
            'locked': false,
            'visible': false,
            'displayName': 'Latitude'
        },{
            'columnName': 'longitude',
            'order': 20,
            'locked': false,
            'visible': false,
            'displayName': 'Longitude'
        },{
            'columnName': 'company',
            'order': 21,
            'locked': false,
            'visible': false,
            'displayName': 'Company'
        },{
            'columnName': 'product',
            'order': 22,
            'locked': false,
            'visible': false,
            'displayName': 'Product'
        },{
            'columnName': 'phone',
            'order': 23,
            'locked': false,
            'visible': false,
            'displayName': 'Phone'
        },{
            'columnName': 'account',
            'order': 24,
            'locked': false,
            'visible': false,
            'displayName': 'Account'
        }
    ]
};
