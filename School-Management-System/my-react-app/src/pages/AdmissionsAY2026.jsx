import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionsAY2026 = () => {
  const admissionProcess = [
    {
      step: "01",
      title: "Application Submission",
      description: "Submit the admission form along with required documents. Forms are available online and at the school office from January 15, 2025.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Document Verification",
      description: "Our admissions team will verify all submitted documents and contact you for any additional information if needed.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Interaction Session",
      description: "A friendly interaction session with the student and parents to understand expectations and answer any queries.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Admission Confirmation",
      description: "Upon successful completion of the process, admission will be confirmed and fee payment details will be shared.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const requiredDocuments = [
    "Birth Certificate",
    "Previous Academic Records",
    "Transfer Certificate (if applicable)",
    "Passport Size Photographs (4 copies)",
    "Aadhaar Card (Student & Parents)",
    "Address Proof",
    "Medical Certificate",
    "Caste Certificate (if applicable)"
  ]

  const importantDates = [
    {
      date: "15 January 2025",
      event: "Admission Applications Open",
      description: "Start submitting your applications for Academic Year 2026-27",
      status: "upcoming"
    },
    {
      date: "28 February 2025",
      event: "Last Date for Application",
      description: "Final date to submit admission applications",
      status: "upcoming"
    },
    {
      date: "15 March 2025",
      event: "Interaction Sessions",
      description: "Scheduled interaction sessions with students and parents",
      status: "upcoming"
    },
    {
      date: "1 April 2025",
      event: "Admission Confirmation",
      description: "Selected students will receive admission confirmation",
      status: "upcoming"
    }
  ]

  const eligibilityCriteria = [
    {
      grade: "Class 6",
      age: "10-11 years",
      requirement: "Completed Class 5 from recognized board"
    },
    {
      grade: "Class 7-8",
      age: "11-13 years",
      requirement: "Completed previous class from recognized board"
    },
    {
      grade: "Class 9-10",
      age: "13-15 years",
      requirement: "Completed Class 8/9 from recognized board"
    },
    {
      grade: "Class 11-12",
      age: "15-17 years",
      requirement: "Completed Class 10 from recognized board with minimum 60%"
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
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Academic Year 2026-27
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Admissions for <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">AY 2026-27</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Begin your child's educational journey with Narayana's Sec. & Higher Sec. School. 
              Experience excellence in education and holistic development for the Academic Year 2026-27.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fee-structure"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Fee Structure
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Application Period</h3>
              <p className="text-blue-100 text-lg mb-2">Starts: January 15, 2025</p>
              <p className="text-blue-100 text-lg">Ends: February 28, 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Academic Session</h3>
              <p className="text-blue-100 text-lg mb-2">Starts: April 2026</p>
              <p className="text-blue-100 text-lg">Duration: Full Academic Year</p>
            </div>
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
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 h-full text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-3">{step.step}</div>
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
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-blue-600">{date.date}</div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {date.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{date.event}</h3>
                    <p className="text-slate-600 text-sm">{date.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Eligibility Criteria</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Check the eligibility requirements for admission to different classes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{criteria.grade}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{criteria.grade}</h3>
                <p className="text-sm text-slate-600 mb-2"><strong>Age:</strong> {criteria.age}</p>
                <p className="text-sm text-slate-600">{criteria.requirement}</p>
              </div>
            ))}
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
                <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
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

      {/* CTA Section */}
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
              to="/fee-structure"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Fee Structure
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

export default AdmissionsAY2026

