import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sapphire Meditec</h3>
            <p className="text-gray-400">
              Delivering Healthcare Solutions
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>Rajbaug Society, Sr. No. 25,</p>
              <p>Shop No. 17, 1st Floor,</p>
              <p>Balaji Nagar, Dhankawadi,</p>
              <p>Pune 43</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p>Phone: 9764980190</p>
              <p>Alt: 9422514755</p>
              <p>Email: sapphiremeditecpune@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sapphire Meditec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
