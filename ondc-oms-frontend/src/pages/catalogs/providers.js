import Providers from '../../components/catalogs/providers/index.js';
import authenticatedRoute from '../../components/auth/AuthenticatedRoute.js';

const ProvidersPage = () => {
    return (
        <Providers />
    )
}

export default authenticatedRoute(ProvidersPage, { pathAfterFailure: '/login' })

const data = [
    {
        "id": "api.greenreceipt.in_ONDC:RET10_24934",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:00:16.491Z"
        },
        "descriptor": {
            "name": "Suresh SuperMarket",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "Suresh SuperMarket",
            "long_desc": "Suresh SuperMarket",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24934"
                    },
                    {
                        "code": "category",
                        "value": "Beverages"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24934"
                    },
                    {
                        "code": "category",
                        "value": "Cleaning & Household"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24934"
                    },
                    {
                        "code": "category",
                        "value": "Foodgrains"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24934"
                    },
                    {
                        "code": "category",
                        "value": "Masala & Seasoning"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "24934"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "24934",
        "categories": [
            "Beverages",
            "Foodgrains",
            "Cleaning & Household",
            "Masala & Seasoning"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET10_24935",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:00:16.491Z"
        },
        "descriptor": {
            "name": "Anand SuperMart",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "Anand SuperMart",
            "long_desc": "Anand SuperMart",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24935"
                    },
                    {
                        "code": "category",
                        "value": "Foodgrains"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24935"
                    },
                    {
                        "code": "category",
                        "value": "Snacks & Branded Foods"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24935"
                    },
                    {
                        "code": "category",
                        "value": "Oil & Ghee"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "24935"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "24935",
        "categories": [
            "Snacks & Branded Foods",
            "Oil & Ghee",
            "Foodgrains"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET10_26298",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:00:16.491Z"
        },
        "descriptor": {
            "name": "demo 5K Sku",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "demo 5K Sku",
            "long_desc": "demo 5K Sku",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26298"
                    },
                    {
                        "code": "category",
                        "value": "Cheesecakes"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26298"
                    },
                    {
                        "code": "category",
                        "value": "Cookies"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "26298"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "26298",
        "categories": [
            "Cookies",
            "Cheesecakes"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET10_26299",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:00:16.491Z"
        },
        "descriptor": {
            "name": "demo 5K Sku",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "demo 5K Sku",
            "long_desc": "demo 5K Sku",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26299"
                    },
                    {
                        "code": "category",
                        "value": "Snacks & Branded Foods"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26299"
                    },
                    {
                        "code": "category",
                        "value": "Hair Care"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26299"
                    },
                    {
                        "code": "category",
                        "value": "Baverages"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26299"
                    },
                    {
                        "code": "category",
                        "value": "Bakery, Cakes & Dairy"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "26299"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "26299",
        "categories": [
            "Snacks & Branded Foods",
            "Bakery, Cakes & Dairy",
            "Baverages",
            "Hair Care"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET13_24936",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:07:33.726Z"
        },
        "descriptor": {
            "name": "The Beauty Shop",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "The Beauty Shop",
            "long_desc": "The Beauty Shop",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "category",
                        "value": "Bath & Body"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "category",
                        "value": "Skin Care"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "category",
                        "value": "Hair Care"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "category",
                        "value": "Men's Grooming"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "category",
                        "value": "Tools & Accessories"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "24936"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "24936",
        "categories": [
            "Men's Grooming",
            "Tools & Accessories",
            "Skin Care",
            "Hair Care",
            "Bath & Body"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET13_24937",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:07:33.726Z"
        },
        "descriptor": {
            "name": "The Grooming Point",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "The Grooming Point",
            "long_desc": "The Grooming Point",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24937"
                    },
                    {
                        "code": "category",
                        "value": "Bath & Body"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24937"
                    },
                    {
                        "code": "category",
                        "value": "Skin Care"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24937"
                    },
                    {
                        "code": "category",
                        "value": "Hair Care"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24937"
                    },
                    {
                        "code": "category",
                        "value": "Men's Grooming"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "24937"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "24937",
        "categories": [
            "Hair Care",
            "Men's Grooming",
            "Bath & Body",
            "Skin Care"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET14_24932",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-01T19:50:22.310Z"
        },
        "descriptor": {
            "name": "Ajay Electronics",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "Ajay Electronics",
            "long_desc": "Ajay Electronics",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "24932"
                    },
                    {
                        "code": "category",
                        "value": "Mobile Phone"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "24932"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "24932",
        "categories": [
            "Mobile Phone"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET16_26357",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-01T19:55:09.760Z"
        },
        "descriptor": {
            "name": "Bhavna Kitchen Essentials",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "Bhavna Kitchen Essentials",
            "long_desc": "Bhavna Kitchen Essentials",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26357"
                    },
                    {
                        "code": "category",
                        "value": "Cookware"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "26357"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "26357",
        "categories": [
            "Cookware"
        ]
    },
    {
        "id": "api.greenreceipt.in_ONDC:RET16_26358",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-01T19:55:09.760Z"
        },
        "descriptor": {
            "name": "Bhavna Savory Supplies",
            "symbol": "https://greenreceipt.in/images/logos/24930.png",
            "short_desc": "Bhavna Savory Supplies",
            "long_desc": "Bhavna Savory Supplies",
            "images": [
                "https://greenreceipt.in/images/logos/24930.png"
            ]
        },
        "ttl": "P1D",
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "26358"
                    },
                    {
                        "code": "category",
                        "value": "Cookware"
                    },
                    {
                        "code": "type",
                        "value": "12"
                    },
                    {
                        "code": "val",
                        "value": "IND"
                    },
                    {
                        "code": "unit",
                        "value": "country"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "All"
                    },
                    {
                        "code": "location",
                        "value": "26358"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0001"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "26358",
        "categories": [
            "Cookware"
        ]
    },
    {
        "id": "api.test.esamudaay.com/ondc/sdk/bpp/retail/esamudaay_ONDC:RET11_0635ecff-8fde-4185-8cd8-167efda42bbc",
        "descriptor": {
            "name": "Ravada Stores",
            "symbol": "https://media.esamudaay.com/user-media/es-logo-small.png",
            "short_desc": "11",
            "long_desc": "11",
            "images": [
                "https://media.esamudaay.com/user-media/es-logo-small.png"
            ]
        },
        "@ondc/org/fssai_license_no": "10722031001038",
        "ttl": "P1D",
        "time": {
            "label": "enable",
            "timestamp": "2024-07-02T06:04:08.266Z"
        },
        "tags": [
            {
                "code": "serviceability",
                "list": [
                    {
                        "code": "location",
                        "value": "75e4363f-001b-4519-ace5-28b1f448a0bb"
                    },
                    {
                        "code": "type",
                        "value": "10"
                    },
                    {
                        "code": "val",
                        "value": "100"
                    },
                    {
                        "code": "unit",
                        "value": "km"
                    },
                    {
                        "code": "category",
                        "value": "F&B"
                    }
                ]
            },
            {
                "code": "order_value",
                "list": [
                    {
                        "code": "min_value",
                        "value": "0.00"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "Order"
                    },
                    {
                        "code": "location",
                        "value": "75e4363f-001b-4519-ace5-28b1f448a0bb"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0000"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "Delivery"
                    },
                    {
                        "code": "location",
                        "value": "75e4363f-001b-4519-ace5-28b1f448a0bb"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0000"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            },
            {
                "code": "timing",
                "list": [
                    {
                        "code": "type",
                        "value": "Self-Pickup"
                    },
                    {
                        "code": "location",
                        "value": "75e4363f-001b-4519-ace5-28b1f448a0bb"
                    },
                    {
                        "code": "day_from",
                        "value": "1"
                    },
                    {
                        "code": "day_to",
                        "value": "7"
                    },
                    {
                        "code": "time_from",
                        "value": "0000"
                    },
                    {
                        "code": "time_to",
                        "value": "2359"
                    }
                ]
            }
        ],
        "local_id": "0635ecff-8fde-4185-8cd8-167efda42bbc",
        "categories": [
            "F&B"
        ]
    }
];

