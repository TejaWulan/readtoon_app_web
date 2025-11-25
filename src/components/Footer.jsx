import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-body-tertiary shadow-sm text-black-300 pt-10 pb-6 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-[#66c7ff]  mb-2">MacaToon</h1>
          <p className="text-sm leading-relaxed">
            Platform membaca komik dan manhwa terbaik untuk penggemar cerita visual.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-[#66c7ff] font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#66c7ff]">Home</a></li>
            <li><a href="#" className="hover:text-[#66c7ff]">Genres</a></li>
            <li><a href="#" className="hover:text-[#66c7ff]">Top Comics</a></li>
            <li><a href="#" className="hover:text-[#66c7ff]">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-[#66c7ff] font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#66c7ff]"><FaFacebookF /></a>
            <a href="https://www.instagram.com/tejawulan05/?hl=id" className="hover:text-[#66c7ff]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#66c7ff]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#66c7ff]"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="w-full text-center text-sm text-black-300 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MacaToon — All rights reserved.
      </div>
    </footer>
  );
}
