import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, File, Info } from "lucide-react";

const Header = () => {
  return (
    <section className="flex flex-col p-8 bg-secondary h-screen w-[15%] text-white">
      <div className="flex items-center text-center">
        <Image src="/assets/images/navbar/py.png" alt="" width={0} height={0} className="w-8 h-8 mr-2"></Image>
        <Link href="/"><h1 className="text-xl text-yellow-300"><span className="text-blue-300">Py</span>Challenges</h1></Link>
      </div>
      <div className="mb-12 mt-12">
        <h3 className="text-gray-500 mb-4">Général</h3>
        <Link
          href="/dashboard"
          className="text-gray-400 transition duration-300 ml-4 flex gap-2 mb-4 hover:text-white"
        >
          <LayoutDashboard />
          Tableau de bord
        </Link>
        <Link
          href="/support"
          className="text-gray-400 transition duration-300 ml-4 flex gap-2 hover:text-white"
        >
          <File />
          Documents
        </Link>
      </div>
      <div className="mb-12">
        <h3 className="text-gray-500 mb-4">Aide</h3>
        <Link
          href="https://discord.com/developers/docs/intro"
          target="_blank"
          className="text-gray-400 transition duration-300 ml-4 flex gap-2 hover:text-white"
        >
          <Info />
          Aide Discord
        </Link>
      </div>
    </section>
  );
};

export { Header };
