import Image from "next/image"

interface CompanyLogoProps {
  logoUrl: string
  companyName: string
}

export default function CompanyLogo({ logoUrl, companyName }: CompanyLogoProps) {
  return (
    <div className="flex items-center">
      <div className="relative h-16 w-40">
        <Image
          src={logoUrl || "/placeholder.svg"}
          alt={`${companyName} logo`}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  )
}

