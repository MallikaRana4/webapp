import Link from 'next/link';
//import styles from './Navbar.module.css';

export default function Navbar(){
    return(
        <nav className='bg-black text-white'>
            <div className='flex justify-between items-center h-16 mx-auto px-10'>
                <div className=''>
                    <h1>Logo</h1>
                </div>
                <div className='ml-10 flex items-baseline space-x-8'>
                    <Link href="/">Home Page</Link>
                    {/* <Link href="/about">About Page</Link> */}
                    {/* <Link href="/contactUs">Contact Us</Link> */}
                    <Link href="/state">State</Link>
                    <Link href="/stateAndProps">State and Props</Link>
                    <Link href="/userform">User Form</Link>
                    <Link href="/resources">Resources</Link>
                    <Link href="/taskTracker">Task Tracker</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </nav>
        //  <nav className={styles.navbar}>
        //     <ul className={styles.navList}>
        //         <li>
        //             <Link href="/">Home Page</Link>
        //         </li>
        //         <li>
        //             <Link href="/about">About Page</Link>
        //         </li>
        //         <li>
        //             <Link href="/services">Services</Link>
        //         </li>
        //         <li>
        //             <Link href="/contactUs">Contact Us</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}