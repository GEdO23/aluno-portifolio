import Image from "next/image";

export default function Cabecalho() {

    const cabecalhoLinks = [
        {
            "id": 1,
            "text": "Pagina inicial",
            "href": "/"
        }
        ,
        {
            "id": 2,
            "text": "Matérias",
            "href": "materias"
        }
        ,
        {
            "id": 3,
            "text": "Contato",
            "href": "contato"
        }
    ];

    return (
        <header className="w-full py-4 px-16 bg-white border-b border-black fixed top-0">
            <nav className="flex gap-16 items-center justify-between">
                <Image src={"/imgs/logo-fiap.png"} alt="Logo" width={100} height={0} className="h-8 w-28" />

                <ul className="flex flex-grow justify-between gap-8">
                    {cabecalhoLinks.map((link)=> (
                        <li key={link.id} className="flex flex-grow">
                            <a href={link.href} className="text-center flex-grow py-2 rounded-lg shadow-sm text-slate-900 bg-white hover:bg-slate-900 hover:text-white transition-colors">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                
            </nav>
        </header>
    )
}
