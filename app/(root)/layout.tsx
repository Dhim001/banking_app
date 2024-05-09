import { Children } from "react"

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  )
}

export default layout