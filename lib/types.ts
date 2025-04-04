export interface Order {
  id: number
  customerName: string
  orderDate: string
  status: "Pending" | "Processing" | "Delivered" | "Cancelled"
  total: number
  items: OrderItem[]
}

export interface OrderItem {
  id: number
  name: string
  quantity: number
  price: number
}

export interface CompanyData {
  name: string
  logoUrl: string
  orders: Order[]
}

export interface CompanyInfo {
  name: string
  logoUrl: string
  orderCount: number
}

