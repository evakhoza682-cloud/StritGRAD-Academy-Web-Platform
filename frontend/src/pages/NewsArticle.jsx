import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Rocket } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { newsItems } from '../utils/content.js'
import NotFound from './NotFound.jsx'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsItems.find((n) => n.slug === slug)
  if (!article) return <NotFound />

  return (
    <div>
      <SEO title={article.title} description={article.excerpt} path={`/news/${slug}`} />
      <div className="h-80 md:h-96 bg-navy-50">
        {article.image ? (
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="eager" />
        ) : (
          <ImageBlock icon={Rocket} tone="navy" />
        )}
      </div>
      <article className="max-w-3xl mx-auto px-6 py-14">
        <Link to="/news" className="inline-flex items-center gap-2 text-gold-700 font-semibold text-sm mb-6 hover:text-navy transition">
          <ArrowLeft size={16} /> Back to News
        </Link>
        <p className="text-xs text-gold-700 font-semibold uppercase tracking-wide mb-3">{article.category}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">{article.title}</h1>
        <p className="text-graytxt text-sm mb-8">{new Date(article.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="text-graytxt leading-relaxed text-lg">{article.body}</p>
      </article>
    </div>
  )
}
