const schema = {
    'type': 'object',
    'properties': {
        'search': {
            'type': 'array',
            'minItems': 100,
            'maxItems': 100,
            'items': {
                'type': 'object',
                'properties': {
                    'requirementId': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    },
                    'productId': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    },
                    'taskName': {
                        'type': 'string',
                        'faker': 'system.fileName'
                    },
                    'date': {
                        'type': 'string',
                        'faker': 'date.recent'
                    },
                    'frames': {
                        'type': 'number',
                        'faker': 'random.number'
                    },
                    'biscuits': {
                        'type': 'number',
                        'faker': 'random.number'
                    },
                    'error': {
                        'type': 'string',
                        'chance': {
                            'pickone': [
                                [
                                    'Monkey',
                                    'Gorilla',
                                    'Lemur',
                                    'Orangutan',
                                    'Gibbon',
                                    'Human',
                                    'Chimpanzee'
                                ]
                            ]
                        }
                    },
                    'email': {
                        'type': 'string',
                        'faker': 'internet.email'
                    },
                    'address': {
                        'type': 'string',
                        'faker': 'address.streetAddress'
                    },
                    'city': {
                        'type': 'string',
                        'faker': 'address.city'
                    },
                    'state': {
                        'type': 'string',
                        'faker': 'address.state'
                    },
                    'zipCode': {
                        'type': 'number',
                        'faker': 'address.zipCode'
                    },
                    'latitude': {
                        'type': 'number',
                        'faker': 'address.latitude'
                    },
                    'longitude': {
                        'type': 'number',
                        'faker': 'address.longitude'
                    },
                    'company': {
                        'type': 'string',
                        'faker': 'company.companyName'
                    },
                    'product': {
                        'type': 'string',
                        'faker': 'commerce.productName'
                    },
                    'phone': {
                        'type': 'string',
                        'faker': 'phone.phoneNumber'
                    },
                    'account': {
                        'type': 'string',
                        'faker': 'finance.accountName'
                    }
                },
                'required': ['requirementId', 'productId', 'taskName', 'date', 'frames', 'biscuits', 'error', 'email', 'address', 'city', 'state', 'zipCode', 'latitude', 'longitude', 'company', 'product', 'phone', 'account']
            }
        }
    },
    'required': ['search']
};

module.exports = schema;
