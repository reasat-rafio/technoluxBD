interface PosterProps {
   src: string;
}

export const Poster: React.FC<PosterProps> = ({ src }) => {
   return (
      <div className="my-4 relative  posterDiv">
         <a href="">
            <div className="posterImg" />
            <img src={src} alt="" />
         </a>
      </div>
   );
};
