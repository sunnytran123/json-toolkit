export const sampleData = {
  ts: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    roles: ["admin", "editor"],
    isActive: true,
    profile: {
      age: 30,
      city: "New York"
    },
    history: [
      { loginId: "abc", date: "2023-01-01" },
      { loginId: "xyz", date: "2023-01-02" }
    ]
  },
  formatter: {
    "user": {
      "id": 101,
      "name": "Alex Carter",
      "email": "alex@example.com",
      "roles": ["admin", "editor"],
      "isActive": true,
      "settings": {
        "notifications": false,
        "theme": "dark"
      }
    }
  },
  validator: {
    "product": {
      "id": "prod_123",
      "name": "Mechanical Keyboard",
      "price": 149.99,
      "inStock": true,
      "tags": ["electronics", "peripherals", "office"]
    }
  },
  minifier: {
    "company": "Tech Innovators Inc.",
    "founded": 2020,
    "employees": [
      {
        "name": "Sarah Lee",
        "position": "CEO"
      },
      {
        "name": "James Doe",
        "position": "CTO"
      }
    ],
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "USA"
    }
  },
  treeViewer: {
    "id": "proj_999",
    "name": "Website Redesign",
    "details": {
      "budget": 50000,
      "deadline": "2024-12-31",
      "status": "In Progress"
    },
    "team": [
      {
        "role": "Designer",
        "members": [
          {"name": "Alice", "level": "Senior"},
          {"name": "Bob", "level": "Junior"}
        ]
      },
      {
        "role": "Developer",
        "members": [
          {"name": "Charlie", "level": "Lead"},
          {"name": "Diana", "level": "Mid"}
        ]
      }
    ]
  },
  sorter: {
    "zebra": 1,
    "apple": 2,
    "user": {
      "lastName": "Smith",
      "firstName": "John",
      "age": 30
    },
    "banana": 3
  },
  csv: [
    {
      "id": 1,
      "name": "Alice Johnson",
      "department": "Engineering",
      "salary": 120000
    },
    {
      "id": 2,
      "name": "Bob Williams",
      "department": "Marketing",
      "salary": 95000
    },
    {
      "id": 3,
      "name": "Charlie Davis",
      "department": "Sales",
      "salary": 105000
    }
  ],
  statistics: {
    "datasetId": "ds_445",
    "metadata": {
      "createdAt": "2023-10-01T10:00:00Z",
      "updatedAt": "2023-10-05T14:30:00Z",
      "author": "Data Team"
    },
    "records": [
      { "id": 1, "value": 100 },
      { "id": 2, "value": 200 },
      { "id": 3, "value": 300 }
    ],
    "config": {
      "retries": 3,
      "timeoutMs": 5000,
      "features": {
        "enableCache": true,
        "enableLogging": false
      }
    }
  }
};
