"use client"

import { AccountProvider } from "@helium/helium-react-hooks"
import { IOT_MINT, MOBILE_MINT } from "@helium/spl-utils"
import { Connection } from "@solana/web3.js"
import { HntInfo } from "./HntInfo"
import { SubDaoInfo } from "./SubDaoInfo"

export const Stats = () => {
  const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC!)

  return (
    <AccountProvider
      extendConnection={false}
      commitment="confirmed"
      connection={connection}
    >
      <div className="overflow-y-auto">
        <HntInfo />
        <SubDaoInfo sDaoMint={MOBILE_MINT} />
        <SubDaoInfo sDaoMint={IOT_MINT} />
      </div>
    </AccountProvider>
  )
}
