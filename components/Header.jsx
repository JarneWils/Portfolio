import Link from "next/link";
import { Button } from "./ui/button";

//components//
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jarne <span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*pc navigatie & hire me*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />   
                    <link href="/contact"/>
                    <Button className="xl:opacity-0">Hire me</Button> 
                </div>

                {/*gsm navigatie*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>   
    )
};

export default Header;