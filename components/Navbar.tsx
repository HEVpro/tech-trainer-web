import {
    faBars,
    faCircleXmark,
    faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export const Navbar = () => {
    //TExt cases
    // dani_valer snake case
    // daniValero camel case
    // dani-valero kebab case

    const [menu, setMenu] = useState<boolean>(false);

    const letras = [
        "Project",
        "Methodology",
        "Technologies",
        "Communication",
        "Pricing",
    ];

    const handleMenu = () => {
        if (!menu) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    };
    console.log(menu);

    return (
        <nav className="flex items-center justify-between bg-secondary-grey w-full p-2 h-24 lg:justify-evenly">
            <div className="w-16 h-12">
                <FontAwesomeIcon className="w-16 h-12" icon={faCoffee}/>
            </div>
            <div className="flex justify-evenly w-2/3">
                {letras.map((letra) => (
                    <div
                        key={letra}
                        className="hidden lg:flex items-center justify-center rounded-lg w-32 h-10 bg-secondary-black"
                    >
                        <a href="#" className="text-primary">
                            {letra}
                        </a>
                    </div>
                ))}
            </div>
            <div className="mr-14">
                <button className="hidden lg:block bg-accent text-secondary-black h-10 w-32 rounded-xl">
                    <a href="#">Contact</a>
                </button>
            </div>
            <div className="">
                <button
                    className="flex items-center w-12 h-12 lg:hidden"
                    onClick={() => handleMenu()}
                >
                    {menu ? (
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars}/>
                    )}
                </button>
            </div>
        </nav>
    );
};
