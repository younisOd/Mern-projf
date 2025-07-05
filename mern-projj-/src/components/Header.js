import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag, FaSearch, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Header() {
  return (
    <header  className="h-[15vh] bg-[url('https://static.wixstatic.com/media/84770f_e2414b51861b44239ca93821cb1f359b~mv2_d_5249_2889_s_4_2.jpg')] bg-cover bg-top text-white"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-2 border-b border-white/20">
        <FaSearch className="w-5 h-5 cursor-pointer" />
        <div className="flex items-center gap-4">
          <FaUser className="w-4 h-4" />
          <span className="text-sm">Log In</span>
          <FaShoppingBag className="w-4 h-4" />
          <span className="text-sm">1</span>
        </div>
      </div>

      {/* Middle Nav */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-white/20">
        <nav className="flex gap-5 text-sm">
          <Link to="/teas" className="hover:underline">Teas</Link>
          <Link to="/extras" className="hover:underline">Extras</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <h1 className="text-lg tracking-widest font-medium">BLOOM'S TEA</h1>

        <div className="flex gap-4">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
        </div>
      </div>
    </header>
  );
}