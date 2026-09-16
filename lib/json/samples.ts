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
  xml: {
    "bookstore": {
      "book": [
        {
          "category": "COOKING",
          "title": "Everyday Italian",
          "author": "Giada De Laurentiis",
          "year": 2005,
          "price": 30.00
        },
        {
          "category": "CHILDREN",
          "title": "Harry Potter",
          "author": "J K. Rowling",
          "year": 2005,
          "price": 29.99
        }
      ]
    }
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
  sql: [
    {
      "id": 101,
      "username": "johndoe",
      "email": "john@example.com",
      "isActive": true,
      "age": 28
    },
    {
      "id": 102,
      "username": "janedoe",
      "email": "jane@example.com",
      "isActive": false,
      "age": 32
    }
  ]
};
