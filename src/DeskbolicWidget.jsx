import { useEffect } from 'react'

const DESKBOLIC_SCRIPT_ID = 'deskbolic-widget-script'
const DESKBOLIC_ELEMENT_IDS = ['deskbolic-widget-container', 'deskbolic-bubble']

function DeskbolicWidget({ url }) {
  useEffect(() => {
    if (!url) return

    document.getElementById(DESKBOLIC_SCRIPT_ID)?.remove()
    DESKBOLIC_ELEMENT_IDS.forEach((id) => document.getElementById(id)?.remove())

    const script = document.createElement('script')
    script.id = DESKBOLIC_SCRIPT_ID
    script.src = url
    script.async = true
    script.setAttribute('data-locale', 'en')
    script.setAttribute('data-position', 'right')

    document.body.appendChild(script)

    return () => {
      script.remove()
      DESKBOLIC_ELEMENT_IDS.forEach((id) => document.getElementById(id)?.remove())
    }
  }, [url])

  return null
}

export default DeskbolicWidget
