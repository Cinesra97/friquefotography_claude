import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="fbrand">Frique Fotography</div>
      <p style={{ color: "var(--mist-dim)", maxWidth: "46ch" }}>
        Sign up with your email address to receive news and updates.
      </p>
      <form className="signup" action="#" method="post">
        <input type="email" placeholder="Email Address" aria-label="Email Address" />
        <button type="submit">Sign Up</button>
      </form>
      <div className="foot-links">
        <a href="https://www.instagram.com/friquefotography/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="mailto:friquefotography@gmail.com">Email</a>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
