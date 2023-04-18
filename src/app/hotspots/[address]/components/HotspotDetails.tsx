"use client"

import { HotspottyIcon } from "@/components/icons/HotspottyIcon"
import Link from "next/link"
import { useParams } from "next/navigation"

export const HotspotDetails = () => {
  const { address } = useParams()
  return (
    <div className="flex-column justify-between text-zinc-800 dark:text-slate-100 sm:items-center">
      <p>
        The Helium explorer no longer provides hotspot specific data. We instead
        encourage you to try one of the following third-party providers:
      </p>
      <ul className="p-4">
        <li>
          <Link
            href={`https://app.hotspotty.net/devices/${address}/status`}
            className="flex gap-2"
            target="_"
          >
            <HotspottyIcon className="h-6 w-6 text-[#9546ea]" /> Hotspotty
          </Link>
        </li>
      </ul>
      <p className="text-xs">
        Are you a third-party provider and want to be added to the list? Please
        submit a PR to our{" "}
        <Link
          href="https://github.com/helium/network-explorer"
          className="text-violet-300"
          target="_"
        >
          public repo
        </Link>
      </p>
    </div>
  )
}
