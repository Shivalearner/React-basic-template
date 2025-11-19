// Importing Icons from React
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

// Creating li object redirect using Map()
const navLink = [
  {
    name: "Home",
    icon: <FaHome />,
    href: "/Home",
  },
  {
    name: "About",
    icon: <FaInfoCircle />,
    href: "/About",
  },
  {
    name: "Services",
    icon: <FaServicestack />,
    href: "/Services",
  },
  {
    name: "Contact",
    icon: <FaEnvelope />,
    href: "/Contact",
  },
];
function Navbar() {
  return (
    <nav className="w-full bg-white border-b-2 border-cyan-600 text-black p-4">
      <div className=" max-w-7xl flex justify-between items-center mx-auto  ">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <ul className="flex gap-6 ">
          {navLink.map((link,index) => (
            <li key={index}>
              <a
                className="flex items-center gap-1.5 hover:text-blue-600 font-semibold"
                href={link.href}
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
