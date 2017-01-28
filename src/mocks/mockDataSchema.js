const schema = {
    'type': 'object',
    'properties': {
        'hist': {
            'type': 'array',
            'minItems': 100,
            'maxItems': 100,
            'items': {
                'type': 'object',
                'properties': {
                    'x': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 0
                    },
                    'y': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 0
                    }
                }
            },
            'required': ['x', 'y']
        },
        'line': {
            'type': 'array',
            'minItems': 100,
            'maxItems': 100,
            'items': {
                'type': 'object',
                'properties': {
                    'x': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 0
                    },
                    'y': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 0
                    }
                }
            },
            'required': ['x', 'y']
        },
        'search': {
            'type': 'array',
            'minItems': 100,
            'maxItems': 100,
            'items': {
                'type': 'object',
                'properties': {
                    'pk': {
                        'type': 'number',
                        'unique': true,
                        'minimum': 1
                    },
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
                    'isMonkey': {
                        'type': 'boolean'
                    },
                    'isGorilla': {
                        'type': 'boolean'
                    },
                    'isLemur': {
                        'type': 'boolean'
                    },
                    'isOrangutan': {
                        'type': 'boolean'
                    },
                    'isGibbon': {
                        'type': 'boolean'
                    },
                    'isHuman': {
                        'type': 'boolean'
                    },
                    'isChimpanzee': {
                        'type': 'boolean'
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
                'required': ['pk', 'requirementId', 'productId', 'taskName', 'date', 'frames', 'biscuits', 'isMonkey', 'isGorilla', 'isLemur', 'isOrangutan', 'isGibbon', 'isHuman', 'isChimpanzee', 'email', 'address', 'city', 'state', 'zipCode', 'latitude', 'longitude', 'company', 'product', 'phone', 'account']
            }
        }
    },
    'required': ['search', 'dataHist', 'dataLine']
};

module.exports = schema;
