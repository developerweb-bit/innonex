import Image from "next/image";
import Link from "next/link";
import map from "../../../public/map.png";

export default function Footer() {
  return (
    <footer className="bg-cover bg-center globbg text-white relative ">
      <div className="max-w-8xl mx-auto px-6 py-18 pb-5">
        {/* Top Section */}
        {/* Disclaimer */}
        <Image
          src={map}
          alt="Background"
          fill
          className="object-cover z-1"
          priority
        />

        {/* <div className="text-start py-10  flex flex-col sm:flex-row gap-10  rounded-2xl mb-10 bg-[#f4f4f4] px-6 text-black "></div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {/* Navigation */}
          <div className="pl-0 md:pl-15">
            <h4 className="text-lg font-semibold  mb-5">Quick Links</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/dedicated-remote-teams"
                  className="hover:underline"
                >
                  Dedicated Remote Teams
                </Link>
              </li>
              <li>
                <Link href="/offshore-staffing" className="hover:underline">
                  Offshore Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/business-process-outsourcing"
                  className="hover:underline"
                >
                  Business Process Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/contract-staffing" className="hover:underline">
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link href="/project-based-hiring" className="hover:underline">
                  Project-Based Hiring
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment-process-outsourcing"
                  className="hover:underline"
                >
                  Recruitment Process Outsourcing
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Office</h4>
            <p>
              Plot No. 66, Commercial AB Road, Behind C21 Mall, Scheme 54 PU4
              Indore, Madhya Pradesh 452010
            </p>
            <p className="mt-4">+91-0000 0000</p>
            <p className="mt-4">Gmail@gmail.com</p>
            <p className="mt-4">Social Media</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30  pt-6 mt-6 text-center text-sm">
          © {new Date().getFullYear()} Banebookkeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
