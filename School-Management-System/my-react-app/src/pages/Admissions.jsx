import React from 'react'
import { Link } from 'react-router-dom'

const Admissions = () => {
  const admissionProcess = [
    {
      step: "01",
      title: "Application Submission",
      description: "Submit the admission form along with required documents. Forms are available online and at the school office."
    },
    {
      step: "02",
      title: "Document Verification",
      description: "Our admissions team will verify all submitted documents and contact you for any additional information if needed."
    },
    {
      step: "03",
      title: "Interaction Session",
      description: "A friendly interaction session with the student and parents to understand expectations and answer any queries."
    },
    {
      step: "04",
      title: "Admission Confirmation",
      description: "Upon successful completion of the process, admission will be confirmed and fee payment details will be shared."
    }
  ]

  const requiredDocuments = [
    "Birth Certificate",
    "Previous Academic Records",
    "Transfer Certificate (if applicable)",
    "Passport Size Photographs",
    "Aadhaar Card (Student & Parents)",
    "Address Proof",
    "Medical Certificate"
  ]

  const feeStructure = [
    {
      grade: "Class 6-8",
      annualFee: "₹45,000",
      description: "Inclusive of tuition, library, laboratory, and sports facilities"
    },
    {
      grade: "Class 9-10",
      annualFee: "₹50,000",
      description: "Inclusive of tuition, library, laboratory, and sports facilities"
    },
    {
      grade: "Class 11-12",
      annualFee: "₹55,000",
      description: "Inclusive of tuition, library, laboratory, and specialized coaching"
    }
  ]

  const importantDates = [
    {
      date: "15 January 2025",
      event: "Admission Applications Open",
      description: "Start submitting your applications for Academic Year 2026-27"
    },
    {
      date: "28 February 2025",
      event: "Last Date for Application",
      description: "Final date to submit admission applications"
    },
    {
      date: "15 March 2025",
      event: "Interaction Sessions",
      description: "Scheduled interaction sessions with students and parents"
    },
    {
      date: "1 April 2025",
      event: "Admission Confirmation",
      description: "Selected students will receive admission confirmation"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Admissions for <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">AY 2026-27</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Begin your child's educational journey with Narayana's Sec. & Higher Sec. School. 
              Experience excellence in education and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Admission Process</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our streamlined admission process ensures a smooth and hassle-free experience for parents and students.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full">
                    <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                  {index < admissionProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Important Dates</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mark these important dates in your calendar for Academic Year 2026-27 admissions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {importantDates.map((date, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-blue-600 mb-1">{date.date}</div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{date.event}</h3>
                    <p className="text-slate-600 text-sm">{date.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee-structure" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Fee Structure</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transparent and affordable fee structure designed to make quality education accessible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{fee.grade}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{fee.annualFee}</div>
                <p className="text-slate-600 text-sm">{fee.description}</p>
                <div className="mt-6 text-xs text-slate-500">
                  * Additional charges may apply for transportation, meals, and optional programs
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Fee Payment Information</h4>
                <p className="text-slate-600 text-sm">
                  Fees can be paid annually or in installments. We offer flexible payment options and scholarships 
                  for meritorious students. Please contact the admissions office for detailed fee structure and payment plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Required Documents</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Please ensure you have the following documents ready when applying for admission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards quality education and a bright future for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/why-narayana"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              For any queries regarding admissions, please contact us at{" "}
              <a href="tel:+1234567890" className="underline hover:text-white">+91-XXXXXXXXXX</a> or{" "}
              <a href="mailto:admissions@narayana.edu" className="underline hover:text-white">admissions@narayana.edu</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions

