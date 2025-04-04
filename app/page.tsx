"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import OrderTable from "@/components/order-table"
import CompanyLogo from "@/components/company-logo"
import CompanySelector from "@/components/company-selector"
import { getCompanyData } from "@/lib/company-utils"
import type { CompanyData } from "@/lib/types"

export default function Home() {
  const router = useRouter()
  const [companyData, setCompanyData] = useState<CompanyData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true)
        const companyName = getCompanyNameFromUrl()
        console.log("🚀 ~ fetchCompanyData ~ companyName:", companyName)

        if (!companyName) {
          setLoading(false)
          return
        }

        const data = await getCompanyData(companyName)
        if (data) {
          setCompanyData(data)
        } else {
          const dummyData = {
            name: companyName,
            logoUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(companyName)}&background=random&color=fff&size=128`,
            orders: [],
          }
          setCompanyData(dummyData)
        }
      } catch (err) {
        setError("Failed to load company data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanyData()
  }, [])

  const getCompanyNameFromUrl = (): string | null => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname

      if (hostname === "localhost" || hostname === "127.0.0.1") {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get("company")
      } else {

        // this implementation is for localhost only
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get("company")

        // in a website on which the subdomain is defined
        // const parts = hostname.split(".")
        // if (parts.length >= 3) {
        //   return parts[0]
        // }
      }
    }
    return null
  }

  const handleSelectCompany = (companyName: string) => {
    window.location.href=(`/?company=${companyName}`)
    // router.refresh()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!companyData) {
    return <CompanySelector onSelectCompany={handleSelectCompany} />
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center">
              <CompanyLogo logoUrl={companyData.logoUrl} companyName={companyData.name} />
              <h1 className="text-3xl font-bold text-gray-800 mt-4 md:mt-0 md:ml-6 capitalize">{companyData.name}</h1>
            </div>
            
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Order Management Dashboard</h2>
          <p className="text-gray-500">Manage and track all orders for {companyData.name}</p>
        </div>

        <OrderTable orders={companyData.orders} companyName={companyData.name} />
      </div>
    </main>
  )
}

