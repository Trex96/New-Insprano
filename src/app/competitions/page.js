'use client'

import { SplineSceneBasic } from '@/components/ui/code.demo.js'

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Competitions
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our interactive 3D competitions and challenges.
          </p>
        </div>
        
        <SplineSceneBasic />
      </div>
    </main>
  )
}