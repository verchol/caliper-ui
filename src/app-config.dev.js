APP_CONFIG = {
    urls: {
        'allResults': 'http://localhost:3000/search',
        'dataHist': 'http://localhost:3000/hist',
        'dataLine': 'http://localhost:3000/line'
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
    columnMetadata: [
        {
            columnName: 'requirementId',
            columnType: 'txtfilter',
            order: 1,
            locked: false,
            visible: true,
            displayName: 'Requirement ID'
        },{
            columnName: 'productId',
            columnType: 'txtfilter',
            order: 2,
            locked: false,
            visible: true,
            displayName: 'Product ID'
        },{
            columnName: 'taskName',
            columnType: 'txtfilter',
            order: 3,
            locked: false,
            visible: true,
            displayName: 'Task Name'
        },{
            columnName: 'date',
            order: 4,
            locked: false,
            visible: true,
            displayName: 'Date'
        },{
            columnName: 'eggs',
            columnType: 'comparator',
            order: 5,
            locked: false,
            visible: true,
            displayName: 'Eggs',
            defaultValue: 3
        },{
            columnName: 'bacon',
            columnType: 'comparator',
            order: 6,
            locked: false,
            visible: true,
            displayName: 'Bacon',
            defaultValue: 26
        },{
            columnName: 'biscuits',
            columnType: 'comparator',
            order: 7,
            locked: false,
            visible: true,
            displayName: 'Biscuits',
            defaultValue: 1
        },{
            columnName: 'isMonkey',
            columnType: 'criteria',
            order: 8,
            locked: false,
            visible: true,
            displayName: 'Is a Monkey'
        },{
            columnName: 'isGorilla',
            columnType: 'criteria',
            order: 9,
            locked: false,
            visible: true,
            displayName: 'Is a Gorilla'
        },{
            columnName: 'isLemur',
            columnType: 'criteria',
            order: 10,
            locked: false,
            visible: true,
            displayName: 'Is a Lemur'
        },{
            columnName: 'isOrangutan',
            columnType: 'criteria',
            order: 11,
            locked: false,
            visible: true,
            displayName: 'Is an Orangutan'
        },{
            columnName: 'isGibbon',
            columnType: 'criteria',
            order: 12,
            locked: false,
            visible: true,
            displayName: 'Is a Gibbon'
        },{
            columnName: 'isHuman',
            columnType: 'criteria',
            order: 13,
            locked: false,
            visible: true,
            displayName: 'Is a Human'
        },{
            columnName: 'isChimpanzee',
            columnType: 'criteria',
            order: 14,
            locked: false,
            visible: true,
            displayName: 'Is a Chimpanzee'
        },{
            columnName: 'email',
            order: 15,
            locked: false,
            visible: false,
            displayName: 'Email'
        },{
            columnName: 'address',
            order: 16,
            locked: false,
            visible: false,
            displayName: 'Address'
        },{
            columnName: 'city',
            order: 17,
            locked: false,
            visible: false,
            displayName: 'City'
        },{
            columnName: 'state',
            order: 18,
            locked: false,
            visible: false,
            displayName: 'State'
        },{
            columnName: 'zipCode',
            order: 19,
            locked: false,
            visible: false,
            displayName: 'Zip Code'
        },{
            columnName: 'latitude',
            order: 20,
            locked: false,
            visible: false,
            displayName: 'Latitude'
        },{
            columnName: 'longitude',
            order: 21,
            locked: false,
            visible: false,
            displayName: 'Longitude'
        },{
            columnName: 'company',
            order: 22,
            locked: false,
            visible: false,
            displayName: 'Company'
        },{
            columnName: 'product',
            order: 23,
            locked: false,
            visible: false,
            displayName: 'Product'
        },{
            columnName: 'phone',
            order: 24,
            locked: false,
            visible: false,
            displayName: 'Phone'
        },{
            columnName: 'account',
            order: 25,
            locked: false,
            visible: false,
            displayName: 'Account'
        }
    ]
};
