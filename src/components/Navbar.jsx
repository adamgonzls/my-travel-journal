import planetIcon from "../img/icon-planet.svg"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={planetIcon} className="navbar__logo" alt="earth icon" />
      <h1 className="navbar__title">my travel journal.</h1>
    </nav>
  )
}