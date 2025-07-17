import { cn } from "@/lib/utils"

// Custom skeleton components for different sections
export function NavbarSkeleton() {
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-center w-full px-4 py-3 md:px-[13px] md:py-0 md:h-[59px]">
        <div className="flex items-center justify-between w-full max-w-[1440px]">
          <div className="flex items-center h-[45.09px]">
            <div className="w-8 h-8 md:w-[47px] md:h-10 bg-gray-200 rounded animate-pulse" />
            <div className="ml-2 md:ml-[11px] w-32 md:w-48 h-6 md:h-8 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
            ))}
            <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center gap-16 md:gap-20 py-16 md:py-24 lg:py-32 w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="w-full max-w-4xl h-24 md:h-32 bg-gray-200 rounded animate-pulse" />
        <div className="w-full max-w-3xl h-12 md:h-16 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        <div className="w-[281px] h-[50px] bg-gray-200 rounded-[26.85px] animate-pulse" />
        <div className="w-[237px] h-[50px] bg-gray-200 rounded-[26.85px] animate-pulse" />
      </div>
      <div className="flex items-center gap-4">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="w-[39px] h-[39px] bg-gray-200 rounded-full animate-pulse" />
        ))}
      </div>
    </div>
  )
}

export function ReviewsSkeleton() {
  return (
    <div className="w-full bg-[#323232] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <div className="w-full max-w-2xl h-12 md:h-16 bg-gray-600 rounded animate-pulse" />
          <div className="w-full max-w-lg h-8 bg-gray-600 rounded animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="min-w-[300px] bg-gray-600 rounded-[14px] h-64 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductsSkeleton() {
  return (
    <div className="flex flex-col items-center gap-16 w-full px-4 py-16">
      <div className="w-full max-w-md h-16 bg-gray-200 rounded animate-pulse" />
      <div className="w-full bg-[#323232] py-16 px-4">
        <div className="flex flex-col gap-16 max-w-[1189px] mx-auto">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center gap-12 w-full">
              <div className="w-full max-w-md lg:w-[548px] h-[200px] md:h-[280px] lg:h-[346px] bg-gray-600 rounded animate-pulse" />
              <div className="flex flex-col gap-6 w-full lg:w-[458px]">
                <div className="w-full h-12 md:h-16 bg-gray-600 rounded animate-pulse" />
                <div className="w-full h-8 md:h-12 bg-gray-600 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PartnershipSkeleton() {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="w-full max-w-md h-12 bg-gray-200 rounded animate-pulse mx-auto" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="w-full h-32 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="w-full h-12 bg-gray-200 rounded animate-pulse" />
            ))}
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FooterSkeleton() {
  return (
    <div className="w-full bg-[#323232] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-32 h-6 bg-gray-600 rounded animate-pulse" />
              {Array(4).fill(0).map((_, j) => (
                <div key={j} className="w-24 h-4 bg-gray-600 rounded animate-pulse" />
              ))}
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-gray-600" />
        <div className="w-48 h-4 bg-gray-600 rounded animate-pulse mx-auto" />
      </div>
    </div>
  )
}