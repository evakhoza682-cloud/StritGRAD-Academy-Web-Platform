import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function Popia() {
  return (
    <div>
      <SEO title="POPIA Compliance" description="StritGRAD Academy NPC POPIA (Protection of Personal Information Act) compliance statement." path="/popia" />
      <PageHeader eyebrow="Legal" title="POPIA Compliance" />
      <div className="max-w-3xl mx-auto px-6 py-14 text-graytxt leading-relaxed space-y-4">
        <p>StritGRAD Academy NPC is committed to full compliance with South Africa's Protection of Personal Information Act (POPIA), Act 4 of 2013.</p>
        <h3 className="text-navy font-bold text-lg">Lawful Processing</h3>
        <p>We only collect and process personal information for specific, explicitly defined and legitimate purposes related to our programmes, partnerships and operations, and with the necessary consent where required.</p>
        <h3 className="text-navy font-bold text-lg">Information Officer</h3>
        <p>Our appointed Information Officer can be contacted at popia@stritgradacademy.org.za for any queries, complaints or requests relating to the processing of your personal information.</p>
        <h3 className="text-navy font-bold text-lg">Data Retention</h3>
        <p>We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.</p>
        <h3 className="text-navy font-bold text-lg">Your Rights Under POPIA</h3>
        <p>You have the right to access, correct, delete or object to the processing of your personal information, and to lodge a complaint with the Information Regulator of South Africa.</p>
        <p className="text-sm text-graytxt/70">Last updated: August 2026</p>
      </div>
    </div>
  )
}
