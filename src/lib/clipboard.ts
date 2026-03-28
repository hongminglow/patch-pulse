export async function copyText(text: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return true
  }

  if (typeof document === 'undefined') {
    return false
  }

  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', 'true')
  field.style.position = 'absolute'
  field.style.left = '-9999px'
  document.body.appendChild(field)
  field.select()

  const copied = document.execCommand('copy')
  document.body.removeChild(field)
  return copied
}
