import "./StudioLink.css";


function StudioLink() {
  return (
    <a
      href="https://daovez.com"
      className="studio-link"
      aria-label="Ir a Daovez Studio Web"
    >
      <img
        src="/logo2.png"
        alt="Daovez Studio"
        className="studio-footer-logo"
      />
    </a>
  );
}


export default StudioLink;