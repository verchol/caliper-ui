APP_CONFIG = {
    urls: {
        'allResults': 'http://localhost:8080/api/reports',
        'dataHist': 'http://localhost:3000/hist',
        'dataLine': 'http://localhost:3000/line'
    },
    sort: {
        column: 'collection_start',
        direction: 'DESC'
    },
    columnMetadata: [
        {
            columnName: 'id',
            locked: false,
            visible: false,
            displayName: 'ID'
        },{
            columnName: 'sensor_id',
            columnType: 'txtfilter',
            locked: false,
            visible: true,
            displayName: 'Sensor ID'
        },{
            columnName: 'collection_id',
            columnType: 'txtfilter',
            locked: false,
            visible: true,
            displayName: 'Collection ID'
        },{
            columnName: 'task_name',
            columnType: 'txtfilter',
            locked: false,
            visible: true,
            displayName: 'Task Name'
        },{
            columnName: 'collection_start',
            locked: false,
            visible: true,
            displayName: 'Collected'
        },{
            columnName: 'created',
            locked: false,
            visible: false,
            displayName: 'Created'
        },{
            columnName: 'last_modified',
            locked: false,
            visible: false,
            displayName: 'Last Modified'
        },{
            columnName: 'eggs',
            columnType: 'comparator',
            locked: false,
            visible: true,
            displayName: 'Eggs',
            defaultValue: 3
        },{
            columnName: 'bacon',
            columnType: 'comparator',
            locked: false,
            visible: true,
            displayName: 'Bacon',
            defaultValue: 26
        },{
            columnName: 'num_biscuits',
            columnType: 'comparator',
            locked: false,
            visible: true,
            displayName: 'Biscuits',
            defaultValue: 1
        },{
            columnName: 'is_monkey',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Monkey'
        },{
            columnName: 'is_gorilla',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Gorilla'
        },{
            columnName: 'is_lemur',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Lemur'
        },{
            columnName: 'is_orangutan',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is an Orangutan'
        },{
            columnName: 'is_gibbon',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Gibbon'
        },{
            columnName: 'is_human',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Human'
        },{
            columnName: 'is_chimpanzee',
            columnType: 'criteria',
            locked: false,
            visible: true,
            displayName: 'Is a Chimpanzee'
        },{
            columnName: 'pk',
            locked: false,
            visible: false,
            displayName: 'PK'
        }
    ]
};
