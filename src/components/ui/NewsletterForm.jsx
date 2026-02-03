import * as Checkbox from '@radix-ui/react-checkbox'
import * as Label from '@radix-ui/react-label'

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

export default function NewsletterForm({ 
  title = 'Newsletter', 
  description = 'Recibe lo mejor de UX fomo en tu correo.',
  buttonText = 'Suscribir',
  showConsent = false 
}) {
  return (
    <div>
      {title && <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>}
      {description && <p className="text-xs text-gray-600 mb-4">{description}</p>}
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
        />
        {showConsent && (
          <div className="flex items-start">
            <Checkbox.Root 
              id="newsletterConsent"
              className="mt-1 h-4 w-4 flex items-center justify-center bg-white border border-gray-300 rounded data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
            >
              <Checkbox.Indicator className="text-white">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root htmlFor="newsletterConsent" className="ml-2 text-xs text-gray-600 cursor-pointer">
              Acepto recibir comunicaciones y he leído la{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                política de privacidad
              </a>
            </Label.Root>
          </div>
        )}
        <button
          type="submit"
          className="w-full btn-primary px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}
