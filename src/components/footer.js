import Link from 'next/link';

export default function footer() {
    return (
        <footer className="bg-clack-900 text-white dark:text-white">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-2">Your Brand</h3>
                    <p className="text-sm text-gray-400">
                        Building amazing web experiences with modern technologies.
                        We create beautiful, functional, and user-friendly applications.
                    </p>
                    <div classNaame="flex space-x-4 mt-4">
                        <a href="#"><i class="fab fa-facebook text-xl"></i></a>
                        <a href="#"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="#"><i class="fab fa-github text-xl"></i></a>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href=""></Link><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Contact</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li>123 Main Street</li>
                        <li>City, State 12345</li>
                        <li>Phone: (555) 123-4567</li>
                        <li>Email: hello@yourbrand.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-500">
                <p>© 2025 Your Brand. All rights reserved.</p>
                <div class="mt-2 space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}