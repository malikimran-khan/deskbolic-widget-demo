import heroImg from './assets/hero.png'
import DeskbolicWidget from './DeskbolicWidget'
import './App.css'

function App() {
  return (
    <>
      <main className="home">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="/">
            Deskbolic Demo
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#support">Support</a>
          </div>
        </nav>

        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Widget preview page</p>
            <h1>Simple support experience for every visitor.</h1>
            <p className="intro">
              This home page is set up to test the embedded Deskbolic widget.
              Open the launcher in the bottom-right corner and start a chat.
            </p>
            <div className="actions" aria-label="Page actions">
              <a className="primary-action" href="#support">
                Check support options
              </a>
              <a className="secondary-action" href="#services">
                View services
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Support dashboard preview">
            <img src={heroImg} alt="" />
            <div className="message-card">
              <span className="status-dot"></span>
              <div>
                <strong>Live widget ready</strong>
                <p>Ask questions, request help, or leave a message.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <p className="eyebrow">What visitors can do</p>
            <h2 id="services-title">Fast answers without leaving the page.</h2>
          </div>
          <article>
            <span>01</span>
            <h3>Ask a question</h3>
            <p>Let visitors reach your team as soon as they need help.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Share context</h3>
            <p>Collect details so every conversation starts with clarity.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Follow up later</h3>
            <p>Support requests can continue after the first visit.</p>
          </article>
        </section>

        <section className="support-band" id="support">
          <div>
            <p className="eyebrow">Try it now</p>
            <h2>Use the chat button in the bottom-right corner.</h2>
          </div>
          <p>
            The widget script is already embedded on this page, so the launcher
            should appear automatically when the app loads.
          </p>
        </section>
      </main>
      <DeskbolicWidget />
    </>
  )
}

export default App
