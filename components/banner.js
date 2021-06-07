export default function Banner({ title }) {
  return (
    <section
      className="banner-1 bg_img"
      style={{
        backgroundImage:
          "url(https://careasi.org/static/media/banner-1.201706a5.jpg)",
      }}
    >
      <div className="container">
        <div className="banner-content cl-white">
          <h1 className="title">{title}</h1>
          <p></p>
        </div>
      </div>
    </section>
  );
}
