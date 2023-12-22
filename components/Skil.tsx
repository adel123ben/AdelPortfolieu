import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skil = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0, scale: 1 }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1.5, // Ajustez la valeur de l'échelle selon vos besoins
        }}
        src="https://melvynx.com/icons/react-rainbow.svg"
        className="rounded-full border border-gray-500 h-[35px] transition duration-300 ease-in-out object-cover filter group-hover:grayscale"
      />

      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:text-white">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-rose-500">80%</p>
        </div>
      </div>
    </div>
  );
};

export default Skil;
