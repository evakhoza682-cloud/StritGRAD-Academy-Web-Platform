import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function PrivacyPolicy() {
  return (
    <div>
      <SEO title="Privacy Policy" description="StritGRAD Academy NPC privacy policy." path="/privacy-policy" />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="max-w-3xl mx-auto px-6 py-14 prose prose-navy text-graytxt leading-relaxed space-y-4">
        <p>StritGRAD Academy NPC ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, store and protect your personal information when you interact with our website, programmes and services.</p>
        <h3 className="text-navy font-bold text-lg">Information We Collect</h3>
        <p>We collect information you provide directly to us, such as your name, email address, phone number, and any details submitted through our forms (contact, volunteer, donation, partnership and programme applications).</p>
        <h3 className="text-navy font-bold text-lg">How We Use Your Information</h3>
        <p>We use your information to respond to enquiries, process donations and applications, deliver programme services, communicate updates, and improve our services. We do not sell your personal information to third parties.</p>
        <h3 className="text-navy font-bold text-lg">Data Security</h3>
        <p>We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, loss or misuse.</p>
        <h3 className="text-navy font-bold text-lg">Your Rights</h3>
        <p>You have the right to access, correct or request deletion of your personal information at any time by contacting us at info@stritgradacademy.org.za.</p>
        <p className="text-sm text-graytxt/70">Last updated: August 2026</p>
      </div>
    </div>
  )
}
