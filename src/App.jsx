import { useState } from 'react'
import heroImg from './assets/hero.png'
import DeskbolicWidget from './DeskbolicWidget'
import './App.css'

const DEFAULT_WIDGET_URL =
  'https://widget.deskbolic.com/w/20848216-f418-4142-908b-e551bd0bd467/07119e89-487c-4034-9799-d49ec986fac4/embed.js'
const STORAGE_KEY = 'deskbolic-widget-url'

function getInitialWidgetUrl() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_WIDGET_URL
}

function extractWidgetUrl(value) {
  const trimmedValue = value.trim()
  const srcMatch = trimmedValue.match(/\bsrc=(["'])(?<src>.*?)\1/i)
  return srcMatch?.groups?.src || trimmedValue
}

function App() {
  const [widgetUrl, setWidgetUrl] = useState(getInitialWidgetUrl)
  const [draftWidgetUrl, setDraftWidgetUrl] = useState(widgetUrl)
  const [urlError, setUrlError] = useState('')

  function handleWidgetSubmit(event) {
    event.preventDefault()

    const nextUrl = extractWidgetUrl(draftWidgetUrl)

    try {
      const parsedUrl = new URL(nextUrl)

      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Unsupported protocol')
      }

      localStorage.setItem(STORAGE_KEY, parsedUrl.href)
      setWidgetUrl(parsedUrl.href)
      setDraftWidgetUrl(parsedUrl.href)
      setUrlError('')
    } catch {
      setUrlError('Enter a valid widget script URL.')
    }
  }

  function handleResetWidgetUrl() {
    localStorage.removeItem(STORAGE_KEY)
    setWidgetUrl(DEFAULT_WIDGET_URL)
    setDraftWidgetUrl(DEFAULT_WIDGET_URL)
    setUrlError('')
  }

  return (
    <main className="home">
      <DeskbolicWidget url={widgetUrl} />
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

      <section className="widget-settings" aria-labelledby="widget-settings-title">
        <div>
          <p className="eyebrow">Widget source</p>
          <h2 id="widget-settings-title">Change the Deskbolic widget URL.</h2>
        </div>
        <form className="widget-form" onSubmit={handleWidgetSubmit}>
          <label htmlFor="widget-url">Widget URL</label>
          <div className="widget-url-row">
            <input
              id="widget-url"
              type="text"
              value={draftWidgetUrl}
              onChange={(event) => setDraftWidgetUrl(event.target.value)}
              placeholder="https://widget.deskbolic.com/w/.../embed.js"
            />
            <button type="submit">Apply</button>
            <button type="button" onClick={handleResetWidgetUrl}>
              Reset
            </button>
          </div>
          {urlError ? <p className="field-error">{urlError}</p> : null}
          <p className="current-widget-url">{widgetUrl}</p>
        </form>
      </section>
    </main>
  )
}

export default App
