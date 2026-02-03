import { Card, NewsletterForm } from './ui'

export default function NewsletterCard({
  title = 'Newsletter',
  description = 'Recibe lo mejor de UX fomo en tu correo.',
  buttonText = 'Suscribir',
  showConsent = false,
  variant = 'highlighted'
}) {
  return (
    <Card variant={variant}>
      <NewsletterForm
        title={title}
        description={description}
        buttonText={buttonText}
        showConsent={showConsent}
      />
    </Card>
  )
}
