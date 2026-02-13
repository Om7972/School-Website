import React from 'react'
import { Link } from 'react-router-dom'

const FeeStructure = () => {
  const feeStructure = [
    {
      grade: "Class 6-8",
      annualFee: "₹45,000",
      breakdown: {
        tuition: "₹30,000",
        library: "₹3,000",
        laboratory: "₹5,000",
        sports: "₹4,000",
        other: "₹3,000"
      },
      description: "Inclusive of tuition, library, laboratory, and sports facilities",
      installment: "Available in 2-3 installments"
    },
    {
      grade: "Class 9-10",
      annualFee: "₹50,000",
      breakdown: {
        tuition: "₹35,000",
        library: "₹3,500",
        laboratory: "₹6,000",
        sports: "₹4,000",
        other: "₹1,500"
      },
      description: "Inclusive of tuition, library, laboratory, and sports facilities",
      installment: "Available in 2-3 installments"
    },
    {
      grade: "Class 11-12",
      annualFee: "₹55,000",
      breakdown: {
        tuition: "₹40,000",
        library: "₹4,000",
        laboratory: "₹6,500",
        sports: "₹3,000",
        other: "₹1,500"
      },
      description: "Inclusive of tuition, library, laboratory, and specialized coaching",
      installment: "Available in 2-3 installments"
    }
  ]

  const additionalCharges = [
    {
      item: "Transportation",
      amount: "₹12,000 - ₹18,000",
      period: "Per Year",
      description: "Based on distance and route"
    },
    {
      item: "Meals",
      amount: "₹8,000 - ₹12,000",
      period: "Per Year",
      description: "Optional - nutritious meals and snacks"
    },
    {
      item: "Uniform",
      amount: "₹3,000 - ₹4,000",
      period: "One Time",
      description: "School uniform and sports wear"
    },
    {
      item: "Books & Stationery",
      amount: "₹5,000 - ₹7,000",
      period: "Per Year",
      description: "Textbooks and required stationery"
    }
  ]

  const scholarships = [
    {
      type: "Merit Scholarship",
      discount: "Up to 50%",
      criteria: "Based on academic performance in entrance test",
      description: "Awarded to top performing students"
    },
    {
      type: "Need-Based Scholarship",
      discount: "Up to 30%",
      criteria: "Based on family income and financial need",
      description: "Support for deserving students"
    },
    {
      type: "Sports Scholarship",
      discount: "Up to 25%",
      criteria: "Exceptional performance in sports",
      description: "For students with outstanding sports achievements"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Transparent Fee Structure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fee Structure
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transparent and affordable fee structure designed to make quality education accessible. 
              We offer flexible payment options and scholarships for meritorious students.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Annual Fee Structure</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Detailed breakdown of fees for different classes (Academic Year 2026-27)
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{fee.grade}</span>
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">{fee.annualFee}</div>
                  <p className="text-sm text-slate-600 mb-4">Per Year</p>
                  <div className="text-xs text-slate-500 mb-2">{fee.description}</div>
                  <div className="text-xs text-blue-600 font-medium">{fee.installment}</div>
                </div>
                
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="text-sm font-semibold text-slate-800 mb-4">Fee Breakdown:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Tuition Fee</span>
                      <span className="font-medium text-slate-800">{fee.breakdown.tuition}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Library</span>
                      <span className="font-medium text-slate-800">{fee.breakdown.library}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Laboratory</span>
                      <span className="font-medium text-slate-800">{fee.breakdown.laboratory}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Sports</span>
                      <span className="font-medium text-slate-800">{fee.breakdown.sports}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Other Charges</span>
                      <span className="font-medium text-slate-800">{fee.breakdown.other}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Charges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Additional Charges</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Optional services and additional charges (if applicable)
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCharges.map((charge, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{charge.item}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">{charge.amount}</div>
                <div className="text-sm text-slate-600 mb-2">{charge.period}</div>
                <p className="text-sm text-slate-600">{charge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer various scholarships and financial aid options to support deserving students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
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

      {/* Payment Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Payment Information</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Flexible payment options to make education affordable for all families.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Payment Methods</h3>
                <p className="text-slate-600 text-sm">Cash, Cheque, Bank Transfer, Online Payment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Installment Plans</h3>
                <p className="text-slate-600 text-sm">Annual fees can be paid in 2-3 installments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fee Security</h3>
                <p className="text-slate-600 text-sm">Secure payment gateway for online transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For detailed fee information and payment plans, please contact our admissions office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions-ay-2026"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              For fee-related queries, contact:{" "}
              <a href="tel:+1234567890" className="underline hover:text-white">+91-XXXXXXXXXX</a> or{" "}
              <a href="mailto:fees@narayana.edu" className="underline hover:text-white">fees@narayana.edu</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeeStructure

