import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import {
  NFTImage,
  GeneralDetails,
  ItemActivity,
  Purchase,
  Header,
} from '../../components/index.js'
import Head from 'next/head'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6 `,
  topContent: `flex sm:flex-row flex-col items-center`,
  nftImgContainer: `flex-1 md:mr-4`,
  detailsContainer: `flex-[2] md:ml-4 w-full mt-8 `,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner())
    //0xdE026Bbe407dddD51923652875c7f026AA19557b => wallet collction
    return sdk.getNFTModule('0xdE026Bbe407dddD51923652875c7f026AA19557b')
  }, [provider])

  // get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId)

      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner())

    return sdk.getMarketplaceModule(
      //0xE89137E7F77378fb9e0c795Dcd4Ca4efC0012F1c => wallet marketPlace
      '0xE89137E7F77378fb9e0c795Dcd4Ca4efC0012F1c'
    )
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  return (
    <div>
    <Head>
        <title>NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <Header />
        <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.topContent}>
              <div className={style.nftImgContainer}>
                <NFTImage selectedNft={selectedNft} />
              </div>
              <div className={style.detailsContainer}>
                <GeneralDetails selectedNft={selectedNft} />
                <Purchase
                  isListed={router.query.isListed}
                  listings={listings}
                  selectedNft={selectedNft}
                  marketPlaceModule={marketPlaceModule}
                />
              </div>
            </div>
            <ItemActivity />
          </div>
        </div>
      </main>
  </div>
  )
}

export default Nft
