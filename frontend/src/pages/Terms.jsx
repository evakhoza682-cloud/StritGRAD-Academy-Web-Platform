import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function Terms() {
  return (
    <div>
      <SEO title="Terms & Conditions" description="StritGRAD Academy NPC website terms and conditions of use." path="/terms" />
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <div className="max-w-3xl mx-auto px-6 py-14 text-graytxt leading-relaxed space-y-4">
        <p>By accessing and using this website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website.</p>
        <h3 className="text-navy font-bold text-lg">Use of Content</h3>
        <p>All content on this website, including text, graphics, logos and images, is the property of StritGRAD Academy NPC unless otherwise stated, and may not be reproduced without written permission.</p>
        <h3 className="text-navy font-bold text-lg">Donations</h3>
        <p>All donations made through this website are processed via secure third-party payment providers. Donations are generally non-refundable except where required by law.</p>
        <h3 className="text-navy font-bold text-lg">Programme Applications</h3>
        <p>Submission of a programme application does not guarantee acceptance. Selection is based on programme criteria and available capacity.</p>
        <h3 className="text-navy font-bold text-lg">Limitation of Liability</h3>
        <p>StritGRAD Academy NPC makes reasonable efforts to ensure information on this website is accurate but does not guarantee completeness or accuracy at all times.</p>
        <p className="text-sm text-graytxt/70">Last updated: August 2026</p>
      </div>
    </div>
  )
}
