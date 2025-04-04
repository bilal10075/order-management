"use client"

import type React from "react"

import { useState } from "react"
import { addCompany } from "@/lib/company-utils"

export default function OnboardingPage() {
  const [companyName, setCompanyName] = useState("")
  const [logoUrl, setLogoUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!companyName || !logoUrl) {
      setMessage({ text: "Please fill in all fields", type: "error" })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      const success = await addCompany(companyName, logoUrl)

      if (success) {
        setMessage({
          text: `Company "${companyName}" added successfully! Access at ${companyName.toLowerCase()}.ordermade.com`,
          type: "success",
        })
        setCompanyName("")
        setLogoUrl("")
      } else {
        setMessage({
          text: `Company "${companyName}" already exists`,
          type: "error",
        })
      }
    } catch (error) {
      setMessage({
        text: "An error occurred while adding the company",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">OrderMade Platform</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Add New Company</h1>
            <p className="mt-2 text-gray-500">
              Fill in the details below to onboard a new company to the OrderMade platform.
            </p>

            {message && (
              <div
                className={`mt-4 p-3 rounded ${
                  message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Amazon"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">
                  Logo URL
                </label>
                <input
                  type="text"
                  id="logoUrl"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://example.com/logo.png"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Adding..." : "Add Company"}
                </button>
              </div>
            </form>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-md font-medium text-gray-900">How to access the company dashboard</h2>
              <p className="mt-2 text-sm text-gray-500">After adding a company, it can be accessed at:</p>
              <code className="mt-1 block text-sm bg-gray-100 p-2 rounded">[company-name].ordermade.com</code>
              <p className="mt-2 text-sm text-gray-500">For local development, use:</p>
              <code className="mt-1 block text-sm bg-gray-100 p-2 rounded">localhost:3000?company=[company-name]</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

