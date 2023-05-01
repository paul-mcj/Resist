// assets
import Image from "next/image";

// next
import Link from "next/link";

const MainNavigation = () => {
     return (
          <header>
               <nav>
                    <Link href="/">
                         <Image
                              src="/assets/logo_200x200.png"
                              alt="other"
                              width={100}
                              height={100}
                         />
                    </Link>
                    <ul>
                         <li>
                              <Link href="/buy">Buy</Link>
                         </li>
                         <li>
                              <Link href="/sell">Sell</Link>
                         </li>
                    </ul>
               </nav>
          </header>
     );
};
export default MainNavigation;
