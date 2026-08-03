import { useEffect } from 'react'

const DESKBOLIC_SCRIPT_ID = 'deskbolic-widget-script'
const DESKBOLIC_SCRIPT_SRC =
  'https://widget.deskbolic.com/w/20848216-f418-4142-908b-e551bd0bd467/07119e89-487c-4034-9799-d49ec986fac4/embed.js'

function DeskbolicWidget() {
  useEffect(() => {
    if (document.getElementById(DESKBOLIC_SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = DESKBOLIC_SCRIPT_ID
    script.src = DESKBOLIC_SCRIPT_SRC
    script.async = true
    script.setAttribute('data-locale', 'en')
    script.setAttribute('data-position', 'right')

    document.body.appendChild(script)
  }, [])

  return null
}

export default DeskbolicWidget
