const schema = {
    'type': 'object',
    'properties': {
        'reports': {
            'type': 'array',
            'minItems': 100,
            'maxItems': 100,
            'items': {
                'type': 'object',
                'properties': {
                    'id': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    },
                    'name': {
                        'type': 'string',
                        'faker': 'system.fileName'
                    },
                    'date': {
                        'type': 'date',
                        'faker': 'date.recent',
                    },
                    'email': {
                        'type': 'string',
                        'faker': 'internet.email',
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
                required: ['id', 'name', 'date', 'email', 'address', 'city', 'state', 'zipCode', 'latitude', 'longitude', 'company', 'product', 'phone', 'account']
            }
        }
    },
    required: ['reports']
};

module.exports = schema;
