"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getAllCompanies } from "@/lib/company-utils"
import type { CompanyInfo } from "@/lib/types"

interface CompanySelectorProps {
  onSelectCompany: (companyName: string) => void
}

export default function CompanySelector({ onSelectCompany }: CompanySelectorProps) {
  const [companies, setCompanies] = useState<CompanyInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true)
        const companiesData = await getAllCompanies()
        setCompanies(companiesData)
      } catch (error) {
        console.error("Failed to fetch companies:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  const filteredCompanies = companies.filter((company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">OrderMade Platform</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select a company to view their order management dashboard
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search for a company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Companies</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCompanies.slice(0, 3).map((company) => (
                  <div
                    key={company.name}
                    className="bg-white overflow-hidden shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    onClick={() => onSelectCompany(company.name.toLowerCase())}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center h-32 mb-4">
                        <div className="relative h-24 w-48">
                          <Image
                            src={company.logoUrl || "/placeholder.svg"}
                            alt={`${company.name} logo`}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 text-center">{company.name}</h3>
                      <p className="mt-2 text-sm text-gray-500 text-center">{company.orderCount} orders</p>
                      <div className="mt-4 flex justify-center">
                        <button
                          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectCompany(company.name.toLowerCase())
                          }}
                        >
                          Select Company
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">All Companies</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredCompanies.map((company) => (
                  <div
                    key={company.name}
                    className="bg-white overflow-hidden shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    onClick={() => onSelectCompany(company.name.toLowerCase())}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-center h-20 mb-3">
                        <div className="relative h-16 w-32">
                          <Image
                            src={company.logoUrl || "/placeholder.svg"}
                            alt={`${company.name} logo`}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 text-center">{company.name}</h3>
                      <div className="mt-3 flex justify-center">
                        <button
                          className="w-full inline-flex justify-center items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectCompany(company.name.toLowerCase())
                          }}
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-white overflow-hidden shadow-md rounded-lg border-2 border-dashed border-gray-300">
                  <div className="p-4">
                    <div className="flex items-center justify-center h-20 mb-3">
                      <svg
                        className="h-10 w-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 text-center">Add New</h3>
                    <div className="mt-3 flex justify-center">
                      <a
                        href="/onboarding"
                        className="w-full inline-flex justify-center items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        Onboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">How to Access Companies</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Instructions for accessing company dashboards</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Production Environment</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <code className="bg-gray-100 px-2 py-1 rounded">companyname.ordermade.com</code>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Local Development</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <code className="bg-gray-100 px-2 py-1 rounded">localhost:3000?company=companyname</code>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

