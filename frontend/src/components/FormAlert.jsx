import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function FormAlert({ type, message }) {
  if (!message) return null
  const isSuccess = type === 'success'
  return (
    <div className={`flex items-start gap-2 rounded-md px-4 py-3 text-sm mb-6 ${
      isSuccess ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
    }`}>
      {isSuccess ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
      <span>{message}</span>
    </div>
  )
}
