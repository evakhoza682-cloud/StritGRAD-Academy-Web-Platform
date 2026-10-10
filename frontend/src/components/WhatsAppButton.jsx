import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '27848164163'
  const message = encodeURIComponent("Hi StritGRAD Academy! I'd like to find out more about your programmes.")
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-cardHover flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="text-white" size={28} fill="white" />
    </a>
  )
}
