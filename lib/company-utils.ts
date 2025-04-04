import type { CompanyData, CompanyInfo, Order, OrderItem } from "./types"

// This would typically come from an API or database
// Using the provided GitHub gist data structure
const companiesData: Record<string, CompanyData> = {
  daraz: {
    name: "Daraz",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Daraz_Logo.png/800px-Daraz_Logo.png",
    orders: [
      {
        id: 1001,
        customerName: "John Doe",
        orderDate: "2023-04-15",
        status: "Delivered",
        total: 125.99,
        items: [
          { id: 1, name: "Smartphone", quantity: 1, price: 99.99 },
          { id: 2, name: "Phone Case", quantity: 1, price: 15.99 },
          { id: 3, name: "Screen Protector", quantity: 1, price: 10.01 },
        ],
      },
      {
        id: 1002,
        customerName: "Jane Smith",
        orderDate: "2023-04-16",
        status: "Processing",
        total: 59.97,
        items: [{ id: 4, name: "T-shirt", quantity: 3, price: 19.99 }],
      },
      {
        id: 1003,
        customerName: "Bob Johnson",
        orderDate: "2023-04-17",
        status: "Pending",
        total: 249.99,
        items: [{ id: 5, name: "Laptop", quantity: 1, price: 249.99 }],
      },
      {
        id: 1004,
        customerName: "Alice Brown",
        orderDate: "2023-04-18",
        status: "Delivered",
        total: 35.98,
        items: [{ id: 6, name: "Book", quantity: 2, price: 17.99 }],
      },
      {
        id: 1005,
        customerName: "Charlie Wilson",
        orderDate: "2023-04-19",
        status: "Cancelled",
        total: 149.99,
        items: [{ id: 7, name: "Headphones", quantity: 1, price: 149.99 }],
      },
      {
        id: 1006,
        customerName: "Diana Miller",
        orderDate: "2023-04-20",
        status: "Processing",
        total: 89.97,
        items: [{ id: 8, name: "Jeans", quantity: 3, price: 29.99 }],
      },
      {
        id: 1007,
        customerName: "Edward Davis",
        orderDate: "2023-04-21",
        status: "Delivered",
        total: 199.99,
        items: [{ id: 9, name: "Smartwatch", quantity: 1, price: 199.99 }],
      },
      {
        id: 1008,
        customerName: "Fiona Clark",
        orderDate: "2023-04-22",
        status: "Pending",
        total: 49.99,
        items: [{ id: 10, name: "Backpack", quantity: 1, price: 49.99 }],
      },
      {
        id: 1009,
        customerName: "George White",
        orderDate: "2023-04-23",
        status: "Processing",
        total: 129.99,
        items: [{ id: 11, name: "Bluetooth Speaker", quantity: 1, price: 129.99 }],
      },
      {
        id: 1010,
        customerName: "Hannah Green",
        orderDate: "2023-04-24",
        status: "Delivered",
        total: 79.99,
        items: [{ id: 12, name: "Running Shoes", quantity: 1, price: 79.99 }],
      },
      {
        id: 1011,
        customerName: "Ian Taylor",
        orderDate: "2023-04-25",
        status: "Cancelled",
        total: 299.99,
        items: [{ id: 13, name: "Tablet", quantity: 1, price: 299.99 }],
      },
      {
        id: 1012,
        customerName: "Julia Adams",
        orderDate: "2023-04-26",
        status: "Processing",
        total: 159.99,
        items: [{ id: 14, name: "Winter Jacket", quantity: 1, price: 159.99 }],
      },
    ],
  },
  foodpanda: {
    name: "FoodPanda",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Foodpanda_logo.svg/2560px-Foodpanda_logo.svg.png",
    orders: [
      {
        id: 2001,
        customerName: "Kevin Lee",
        orderDate: "2023-04-15",
        status: "Delivered",
        total: 25.99,
        items: [
          { id: 1, name: "Pizza", quantity: 1, price: 15.99 },
          { id: 2, name: "Soda", quantity: 2, price: 5.0 },
        ],
      },
      {
        id: 2002,
        customerName: "Linda Chen",
        orderDate: "2023-04-16",
        status: "Processing",
        total: 32.5,
        items: [
          { id: 3, name: "Burger Combo", quantity: 1, price: 22.5 },
          { id: 4, name: "Ice Cream", quantity: 1, price: 10.0 },
        ],
      },
      {
        id: 2003,
        customerName: "Mike Wang",
        orderDate: "2023-04-17",
        status: "Pending",
        total: 45.75,
        items: [{ id: 5, name: "Sushi Set", quantity: 1, price: 45.75 }],
      },
      {
        id: 2004,
        customerName: "Nancy Kim",
        orderDate: "2023-04-18",
        status: "Delivered",
        total: 18.99,
        items: [
          { id: 6, name: "Salad", quantity: 1, price: 12.99 },
          { id: 7, name: "Fruit Juice", quantity: 1, price: 6.0 },
        ],
      },
      {
        id: 2005,
        customerName: "Oscar Tan",
        orderDate: "2023-04-19",
        status: "Cancelled",
        total: 55.97,
        items: [{ id: 8, name: "Family Meal", quantity: 1, price: 55.97 }],
      },
      {
        id: 2006,
        customerName: "Patricia Lin",
        orderDate: "2023-04-20",
        status: "Processing",
        total: 28.5,
        items: [
          { id: 9, name: "Pasta", quantity: 1, price: 18.5 },
          { id: 10, name: "Garlic Bread", quantity: 1, price: 5.0 },
          { id: 11, name: "Tiramisu", quantity: 1, price: 5.0 },
        ],
      },
      {
        id: 2007,
        customerName: "Quincy Zhang",
        orderDate: "2023-04-21",
        status: "Delivered",
        total: 42.99,
        items: [
          { id: 12, name: "Steak", quantity: 1, price: 32.99 },
          { id: 13, name: "Mashed Potatoes", quantity: 1, price: 5.0 },
          { id: 14, name: "Soft Drink", quantity: 1, price: 5.0 },
        ],
      },
      {
        id: 2008,
        customerName: "Rachel Wu",
        orderDate: "2023-04-22",
        status: "Pending",
        total: 15.99,
        items: [
          { id: 15, name: "Sandwich", quantity: 1, price: 10.99 },
          { id: 16, name: "Chips", quantity: 1, price: 5.0 },
        ],
      },
      {
        id: 2009,
        customerName: "Steve Huang",
        orderDate: "2023-04-23",
        status: "Processing",
        total: 65.97,
        items: [{ id: 17, name: "Seafood Platter", quantity: 1, price: 65.97 }],
      },
      {
        id: 2010,
        customerName: "Tina Liu",
        orderDate: "2023-04-24",
        status: "Delivered",
        total: 22.99,
        items: [
          { id: 18, name: "Chicken Rice", quantity: 1, price: 12.99 },
          { id: 19, name: "Spring Rolls", quantity: 2, price: 5.0 },
        ],
      },
      {
        id: 2011,
        customerName: "Ulysses Chow",
        orderDate: "2023-04-25",
        status: "Cancelled",
        total: 38.5,
        items: [{ id: 20, name: "Dim Sum Set", quantity: 1, price: 38.5 }],
      },
      {
        id: 2012,
        customerName: "Victoria Yang",
        orderDate: "2023-04-26",
        status: "Processing",
        total: 29.99,
        items: [
          { id: 21, name: "Ramen", quantity: 1, price: 19.99 },
          { id: 22, name: "Gyoza", quantity: 1, price: 10.0 },
        ],
      },
    ],
  },
  amazon: {
    name: "Amazon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    orders: [
      {
        id: 3001,
        customerName: "Walter Brown",
        orderDate: "2023-04-15",
        status: "Delivered",
        total: 129.99,
        items: [{ id: 1, name: "Wireless Earbuds", quantity: 1, price: 129.99 }],
      },
      {
        id: 3002,
        customerName: "Xena Johnson",
        orderDate: "2023-04-16",
        status: "Processing",
        total: 249.97,
        items: [
          { id: 2, name: "Coffee Maker", quantity: 1, price: 199.99 },
          { id: 3, name: "Coffee Beans", quantity: 1, price: 49.98 },
        ],
      },
      {
        id: 3003,
        customerName: "Yolanda Martinez",
        orderDate: "2023-04-17",
        status: "Pending",
        total: 89.99,
        items: [{ id: 4, name: "Fitness Tracker", quantity: 1, price: 89.99 }],
      },
      {
        id: 3004,
        customerName: "Zack Thompson",
        orderDate: "2023-04-18",
        status: "Delivered",
        total: 54.97,
        items: [{ id: 5, name: "Books", quantity: 3, price: 18.99 }],
      },
      {
        id: 3005,
        customerName: "Amy Wilson",
        orderDate: "2023-04-19",
        status: "Cancelled",
        total: 1299.99,
        items: [{ id: 6, name: "Gaming Laptop", quantity: 1, price: 1299.99 }],
      },
      {
        id: 3006,
        customerName: "Brian Garcia",
        orderDate: "2023-04-20",
        status: "Processing",
        total: 159.96,
        items: [
          { id: 7, name: "Desk Lamp", quantity: 2, price: 39.99 },
          { id: 8, name: "Office Chair", quantity: 1, price: 79.98 },
        ],
      },
      {
        id: 3007,
        customerName: "Cathy Rodriguez",
        orderDate: "2023-04-21",
        status: "Delivered",
        total: 349.99,
        items: [{ id: 9, name: "Smart TV", quantity: 1, price: 349.99 }],
      },
      {
        id: 3008,
        customerName: "David Lee",
        orderDate: "2023-04-22",
        status: "Pending",
        total: 29.97,
        items: [{ id: 10, name: "Kitchen Utensils", quantity: 3, price: 9.99 }],
      },
      {
        id: 3009,
        customerName: "Emily Clark",
        orderDate: "2023-04-23",
        status: "Processing",
        total: 199.99,
        items: [{ id: 11, name: "Vacuum Cleaner", quantity: 1, price: 199.99 }],
      },
      {
        id: 3010,
        customerName: "Frank Wright",
        orderDate: "2023-04-24",
        status: "Delivered",
        total: 59.99,
        items: [{ id: 12, name: "Yoga Mat", quantity: 1, price: 59.99 }],
      },
      {
        id: 3011,
        customerName: "Grace Taylor",
        orderDate: "2023-04-25",
        status: "Cancelled",
        total: 799.99,
        items: [{ id: 13, name: "Smartphone", quantity: 1, price: 799.99 }],
      },
      {
        id: 3012,
        customerName: "Henry Martin",
        orderDate: "2023-04-26",
        status: "Processing",
        total: 129.99,
        items: [{ id: 14, name: "Air Purifier", quantity: 1, price: 129.99 }],
      },
    ],
  },
}

// Get company data by name
export async function getCompanyData(companyName: string): Promise<CompanyData | null> {
  // Simulate API call with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedCompanyName = companyName.toLowerCase()

      // If company exists in our predefined list, return that data
      if (companiesData[normalizedCompanyName]) {
        resolve(companiesData[normalizedCompanyName])
        return
      }

      // If company doesn't exist, generate dummy data
      const dummyData: CompanyData = {
        name: companyName,
        logoUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(companyName)}&background=random&color=fff&size=128`,
        orders: generateDummyOrders(12), // Generate 12 dummy orders
      }

      resolve(dummyData)
    }, 300)
  })
}

// Get all companies for the selector
export async function getAllCompanies(): Promise<CompanyInfo[]> {
  // Simulate API call with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const companies: CompanyInfo[] = Object.entries(companiesData).map(([key, data]) => ({
        name: data.name,
        logoUrl: data.logoUrl,
        orderCount: data.orders.length,
      }))

      resolve(companies)
    }, 300)
  })
}

// Helper function to generate dummy orders
function generateDummyOrders(count: number): Order[] {
  const statuses: Array<"Pending" | "Processing" | "Delivered" | "Cancelled"> = [
    "Pending",
    "Processing",
    "Delivered",
    "Cancelled",
  ]

  const customerFirstNames = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "David",
    "Sarah",
    "Robert",
    "Lisa",
    "William",
    "Jessica",
    "James",
    "Jennifer",
    "Thomas",
    "Amanda",
    "Charles",
    "Elizabeth",
  ]

  const customerLastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Miller",
    "Davis",
    "Garcia",
    "Rodriguez",
    "Wilson",
    "Martinez",
    "Anderson",
    "Taylor",
    "Thomas",
    "Hernandez",
    "Moore",
  ]

  const productNames = [
    "Smartphone",
    "Laptop",
    "Headphones",
    "Tablet",
    "Smart Watch",
    "Camera",
    "Bluetooth Speaker",
    "Gaming Console",
    "Monitor",
    "Keyboard",
    "Mouse",
    "External Hard Drive",
    "Printer",
    "Router",
    "Fitness Tracker",
    "Drone",
  ]

  const orders: Order[] = []

  for (let i = 1; i <= count; i++) {
    const orderDate = new Date()
    orderDate.setDate(orderDate.getDate() - Math.floor(Math.random() * 30)) // Random date within last 30 days

    const randomFirstName = customerFirstNames[Math.floor(Math.random() * customerFirstNames.length)]
    const randomLastName = customerLastNames[Math.floor(Math.random() * customerLastNames.length)]
    const customerName = `${randomFirstName} ${randomLastName}`

    const status = statuses[Math.floor(Math.random() * statuses.length)]

    const itemCount = Math.floor(Math.random() * 3) + 1 // 1-3 items per order
    const items: OrderItem[] = []
    let total = 0

    for (let j = 1; j <= itemCount; j++) {
      const productName = productNames[Math.floor(Math.random() * productNames.length)]
      const quantity = Math.floor(Math.random() * 3) + 1 // 1-3 quantity
      const price = Number.parseFloat((Math.random() * 100 + 10).toFixed(2)) // Random price between 10 and 110

      items.push({
        id: j,
        name: productName,
        quantity,
        price,
      })

      total += quantity * price
    }

    orders.push({
      id: 1000 + i,
      customerName,
      orderDate: orderDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      status,
      total: Number.parseFloat(total.toFixed(2)),
      items,
    })
  }

  return orders
}

// Function to add a new company
export async function addCompany(companyName: string, logoUrl: string, orders: any[] = []): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedCompanyName = companyName.toLowerCase()

      // Check if company already exists
      if (companiesData[normalizedCompanyName]) {
        resolve(false)
        return
      }

      // Add new company
      companiesData[normalizedCompanyName] = {
        name: companyName,
        logoUrl,
        orders: orders.length > 0 ? orders : generateDummyOrders(12),
      }

      resolve(true)
    }, 300)
  })
}

