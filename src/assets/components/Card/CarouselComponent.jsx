import c from "./Carousel.module.css";

const CardComponent = ({title, image, content, tags}) => {
  return (
    <div className={c.cardWrapper}>
        <div className={c.card}>
            <div className={c.cardImg}>
                {image === '' && <img src="https://placehold.co/600x400" alt={`immagine di ${title}`}/>}
            </div>
            <div className={c.cardBody}>
                <h2 className={c.cardTitle}>
                    {title}
                </h2>
                <p style={{
                    fontSize: "1.3rem",
                    padding: "10px 0px"
                }}>
                    {content}
                </p>
                <div>
                    {tags.map((tag, index) => (
                        <span key={index} className={`tag ${tag} badge fs-5 mx-2 text-light`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardComponent;