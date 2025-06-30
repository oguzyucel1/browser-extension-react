export function Header ({children}: {children: React.ReactNode}) 
{
return <header className="mt-10">{children}</header>
}

export function Main ({children} : {children: React.ReactNode}) 
{
return <main >{children}</main>
}