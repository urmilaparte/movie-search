

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container text-center">
        <h4 className="mb-3 fw-bold">🎬 OhO</h4>

        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <a href="#" className="text-white text-decoration-none small">About</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#" className="text-white text-decoration-none small">Contact</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#" className="text-white text-decoration-none small">Privacy</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="#" className="text-white text-decoration-none small">Terms</a>
          </li>
        </ul>

        <p className="mb-1 small text-secondary">© 2025 OhO. All rights reserved.</p>
        <p className="mb-0 small text-secondary">
          Made with <span className="text-danger">❤️</span> by <strong>UP</strong>
        </p>
      </div>
    </footer>
  );
}
