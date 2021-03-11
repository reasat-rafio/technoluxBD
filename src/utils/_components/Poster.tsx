import Link from "next/link";

interface PosterProps {
   src: string;
   to: string;
}

export const Poster: React.FC<PosterProps> = ({ src, to }) => {
   return (
      <div className="my-4 relative  posterDiv">
         <Link href={to}>
            <a>
               <div className="posterImg" />
               <img src={src} alt="" />
            </a>
         </Link>
      </div>
   );
};
