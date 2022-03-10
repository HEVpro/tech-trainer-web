import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {

  const letras = ["Project", "Methodology", "Technologies", "Communication", "Pricing"];

  return (
    <nav className="flex items-center justify-evenly bg-[#C4C4C4] w-full p-2 h-24">
          <div className="flex items-center justify-center w-16 h-12">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
        <div className="flex justify-center space-x-5 content-center">
          {letras.map(letra => (
              <div key={letra} className="flex items-center justify-center rounded-lg w-32 h-10 bg-secondary-black">
                <a
                    href="#"
                    className="text-primary"
                >
                  {letra}
                </a>
              </div>
              ))}
        </div>
        <div className="mr-14">
          <button className="bg-accent text-secondary-black h-10 w-32 rounded-xl">
            <a href="#">Contact</a>
          </button>
        </div>
    </nav>
  );
};
