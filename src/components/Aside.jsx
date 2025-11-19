import { FaBook, FaReact, FaCss3 } from "react-icons/fa";
const Aside = () => {
  const links = [
    {
      name: "Vite Documentation",
      icon: <FaBook/>,
      href: "#",
    },
    {
      name: "React Docs",
      icon: <FaReact/>,
      href: "#",
    },
    {
        name:"Tailwind Docs",
        icon:<FaCss3/>,
        href:"#"
    },
  ];
  return (
    <>
      <aside className="bg-black/20 p-6 m-4 rounded-lg">
        <h2 className=" text-2xl font-bold mb-2">Related Links</h2>
        <ul >
         {links.map((link)=>(<li><a className="mb-2 text-blue-500 flex items-center gap-2" href={link.href}>{link.icon}{link.name}</a></li>))}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
