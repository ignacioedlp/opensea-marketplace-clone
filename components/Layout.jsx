import { Adver } from './index.js'

export default function Layout({ children }) {
  return (
    <>
      <Adver />
      <main>{children}</main>
    </>
  )
}
