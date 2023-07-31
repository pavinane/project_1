import Link from "next/link"


const NavBar = () => {
  return (
    <div className="bg-red-400 w-full p-3 flex justify-between items-center">
        <div className="logo bg-white w-10 h-10 rounded-full relative">
            <h2 className=" font-semibold font-sans absolute bottom-2 left-2.5">PK</h2>
        </div>
        <div className="menus flex gap-5">
            <h2>
                <Link href="/about">About</Link>
            </h2>
            <h2>Carrier</h2>
            <h2>Resume</h2>
        </div>
    </div>
  )
}

export default NavBar