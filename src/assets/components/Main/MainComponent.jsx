import CarouselComponent from "../Card/CarouselComponent";
import posts from "../../data/posts";

const MainComponent = () => {

  return (
    <main
      className="container-fluid"
      style={{
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {posts.map(
          (post) =>
            post.published === true && (
              <CarouselComponent
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
              />
            )
        )}
      </div>
    </main>
  );
};

export default MainComponent;


