import { useEffect } from 'react'

const DESKBOLIC_SCRIPT_ID = 'deskbolic-widget-script'
const DESKBOLIC_SCRIPT_SRC =
  'https://widget.deskbolic.com/w/952f1d40-77df-412d-8f2c-4ea36561b133/ac1c7f37-8b88-49c5-8faf-04ad1fb235fb/embed.js'

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
