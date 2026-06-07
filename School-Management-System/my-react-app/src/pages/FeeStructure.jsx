import React from 'react'
import { Link } from 'react-router-dom'

const ANNUAL_FEE = 20000

const accentStyles = [
  { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', ring: 'ring-violet-200', text: 'text-violet-600', badge: 'bg-violet-100 text-violet-700' },
  { gradient: 'from-blue-500 to-cyan-600', bg: 'bg-blue-50', ring: 'ring-blue-200', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', ring: 'ring-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  { gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', ring: 'ring-amber-200', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  { gradient: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', ring: 'ring-rose-200', text: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  { gradient: 'from-indigo-500 to-blue-600', bg: 'bg-indigo-50', ring: 'ring-indigo-200', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
]

const feeCards = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    subtitle: 'Early Learning Foundation',
    grades: ['Nursery', 'LKG', 'UKG'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Play-based learning', 'Safe & nurturing environment', 'Activity-based curriculum'],
  },
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `class-${i + 1}`,
    title: `Class ${i + 1}`,
    subtitle: i < 5 ? 'Primary Section' : i < 8 ? 'Middle Section' : i < 10 ? 'Secondary Section' : 'Senior Secondary',
    grades: [`Class ${i + 1}`],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Tuition & academics', 'Library & lab access', 'Sports & co-curricular'],
  })),
]

const additionalCharges = [
  { item: 'Transportation', amount: '₹12,000 - ₹18,000', period: 'Per Year', description: 'Based on distance and route' },
  { item: 'Meals', amount: '₹8,000 - ₹12,000', period: 'Per Year', description: 'Optional — nutritious meals and snacks' },
  { item: 'Uniform', amount: '₹3,000 - ₹4,000', period: 'One Time', description: 'School uniform and sports wear' },
  { item: 'Books & Stationery', amount: '₹5,000 - ₹7,000', period: 'Per Year', description: 'Textbooks and required stationery' },
]

const scholarships = [
  { type: 'Merit Scholarship', discount: 'Up to 50%', criteria: 'Based on academic performance in entrance test', description: 'Awarded to top performing students' },
  { type: 'Need-Based Scholarship', discount: 'Up to 30%', criteria: 'Based on family income and financial need', description: 'Support for deserving students' },
  { type: 'Sports Scholarship', discount: 'Up to 25%', criteria: 'Exceptional performance in sports', description: 'For students with outstanding sports achievements' },
]

const formatFee = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

const FeeStructure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            Academic Year 2026–27
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Fee Structure</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent and affordable annual fees — ₹20,000 per class. Flexible payment options and scholarships available.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Annual Fee Structure</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nursery through Class 12 — one clear annual fee per grade level
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeCards.map((card, index) => {
              const style = accentStyles[index % accentStyles.length]
              const isPrePrimary = card.id === 'pre-primary'

              return (
                <div
                  key={card.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ${style.ring} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`h-2 bg-gradient-to-r ${style.gradient}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.gradient} text-white flex items-center justify-center shadow-lg`}>
                        {card.icon}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
                        {card.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-1">{card.title}</h3>

                    {isPrePrimary ? (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.grades.map((grade) => (
                          <span
                            key={grade}
                            className={`text-sm font-medium px-3 py-1 rounded-lg ${style.bg} ${style.text}`}
                          >
                            {grade}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className={`text-sm font-medium mb-4 ${style.text}`}>{card.grades[0]}</p>
                    )}

                    <div className="mb-5">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-slate-900">{formatFee(ANNUAL_FEE)}</span>
                        <span className="text-sm text-slate-500">/ year</span>
                      </div>
                      {isPrePrimary && (
                        <p className="text-xs text-slate-500 mt-1">₹20,000 each for Nursery, LKG & UKG</p>
                      )}
                    </div>

                    <ul className="space-y-2 mb-5">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className={`w-4 h-4 flex-shrink-0 ${style.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className={`text-xs font-medium text-center py-2 rounded-lg ${style.bg} ${style.text}`}>
                      Payable in 2–3 installments
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Additional Charges</h2>
            <p className="text-lg text-slate-600">Optional services (if applicable)</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCharges.map((charge) => (
              <div key={charge.item} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{charge.item}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">{charge.amount}</div>
                <div className="text-sm text-slate-600 mb-2">{charge.period}</div>
                <p className="text-sm text-slate-600">{charge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Scholarships & Financial Aid</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship) => (
              <div key={scholarship.type} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">{scholarship.type}</h3>
                <div className="text-3xl font-bold text-green-600 mb-3 text-center">{scholarship.discount}</div>
                <p className="text-sm text-slate-600 mb-2 text-center"><strong>Criteria:</strong> {scholarship.criteria}</p>
                <p className="text-sm text-slate-600 text-center">{scholarship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-8">
            For detailed fee information and payment plans, contact our admissions office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions-ay-2026"
              className="inline-flex items-center justify-center min-h-[48px] bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeeStructure
