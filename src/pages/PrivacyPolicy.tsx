// src/pages/PrivacyPolicy.tsx
const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="bg-white py-16 px-4">
      <div className="max-w-4xl font-sans mx-auto">
        {/* Title Card */} 
        <section className="space-y-8 shadow-lg p-8 w-full bg-white rounded-2xl mb-12">
          <div className=" shadow-lg p-8 bg-white rounded-2xl mb-12">
            <h1 className="text-4xl font-bold font-poppins text-center text-[#093057] mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">
              Last updated: <time dateTime={new Date().toISOString()}>{lastUpdated}</time>
            </p>
          </div>

          {/* Sections */}
          {/* Intro */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold font-sans text-[#093057] mb-4 border-l-4 border-[#df8811] pl-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes our policies and procedures on the
              collection, use and disclosure of your information when you use
              the Service and tells you about your privacy rights and how the
              law protects you. We use your personal data to provide and
              improve the Service. By using the Service, you agree to the
              collection and use of information in accordance with this
              Privacy Policy.
            </p>
          </div>

          {/* Interpretation & Definitions */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#093057] mb-6 border-l-4 border-[#df8811] pl-4">
              Interpretation &amp; Definitions
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-medium text-[#093057] mb-2">
                Interpretation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The words of which the initial letter is capitalized have meanings
                defined under the following conditions. The following definitions
                shall have the same meaning regardless of whether they appear in
                singular or plural.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#093057] mb-2">
                Definitions
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  { term: "Account", def: "means a unique account created for you to access our Service or parts of our Service." },
                  { term: "Affiliate", def: "means an entity that controls, is controlled by or is under common control with a party." },
                  { term: "Company", def: '("the Company", "We", "Us" or "Our") refers to St Paul Thomas Academy, 625-10205 MARAGUA.' },
                  { term: "Cookies", def: "are small files placed on your device by a website, containing your browsing history details." },
                  { term: "Device", def: "means any device that can access the Service such as a computer, cellphone, or tablet." },
                  { term: "Personal Data", def: "is any information that relates to an identified or identifiable individual." },
                  { term: "Service", def: "refers to the Website." },
                  { term: "Service Provider", def: "means any natural or legal person who processes the data on behalf of the Company." },
                  { term: "Usage Data", def: "refers to data collected automatically from the Service or its infrastructure." },
                  {
                    term: "Website",
                    def: (
                      <>
                        refers to St Paul Thomas Academy, accessible from{" "}
                        <a
                          href="https://stpaulthomasacademy.co.ke/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#df8811] hover:underline"
                        >
                          https://stpaulthomasacademy.co.ke/
                        </a>.
                      </>
                    ),
                  },
                  { term: "You", def: "means the individual accessing or using the Service, or the company or legal entity represented." },
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <span className="text-[#df8811] text-lg mt-1">🔸</span>
                    <span>
                      <strong className="text-[#df8811]">{item.term}</strong>{" "}
                      {item.def}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use of Your Data */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#093057] mb-4 border-l-4 border-[#df8811] pl-4">
              Use of Your Personal Data
            </h2>
            <p className="text-gray-700 mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "To provide and maintain our Service.",
                "To manage your Account and registration.",
                "For the performance of a contract for products, items or services you have purchased.",
                "To contact you by email, telephone calls, SMS, or push notifications.",
                "To provide you with news, special offers and general information about similar goods or services.",
                "To manage your requests and customer support.",
                "For business transfers such as mergers or asset sales.",
                "For other purposes like data analysis, identifying usage trends and improving our Service.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#df8811] text-lg mt-1">🔹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Retention & Security */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#093057] mb-4 border-l-4 border-[#df8811] pl-4">
              Retention, Transfer &amp; Deletion
            </h2>
            <p className="text-gray-700 mb-4">
              We retain your Personal Data only as long as necessary and in
              compliance with legal obligations. Your information may be
              processed at our operating offices or other locations where the
              parties involved are located.
            </p>
            <h3 className="text-xl font-medium text-[#093057] mb-2">
              Delete Your Personal Data
            </h3>
            <p className="text-gray-700">
              You have the right to delete or request deletion of Personal Data
              we have collected about you. You may update, amend, or delete
              your information by signing in to your Account or contacting us
              directly.
            </p>
          </div>

          {/* Disclosure & Children */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#093057] mb-4 border-l-4 border-[#df8811] pl-4">
              Disclosure &amp; Security
            </h2>
            <p className="text-gray-700 mb-4">
              We may disclose your information in good faith belief that such
              action is necessary to comply with legal obligations, protect our
              rights, prevent wrongdoing, or protect Users.
            </p>
            <h3 className="text-xl font-medium text-[#093057] mb-2">
              Security
            </h3>
            <p className="text-gray-700 mb-4">
              While we strive to use commercially acceptable means to protect
              your Personal Data, no method of transmission or electronic storage
              is 100% secure.
            </p>
            <h3 className="text-xl font-medium text-[#093057] mb-2">
              Children’s Privacy
            </h3>
            <p className="text-gray-700">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </div>

          {/* Changes & Contact */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#093057] mb-4 border-l-4 border-[#df8811] pl-4">
              Changes &amp; Contact
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this policy from time to time. We will notify you of
              any changes by posting the new Privacy Policy on this page and
              updating the “Last updated” date.
            </p>
            <h3 className="text-xl font-medium text-[#093057] mb-2">
              Contact Us
            </h3>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, you can
              contact us by email:{" "}
              <a
                href="mailto:admissions@stpaulthomasacademy.ac.ke"
                className="text-[#df8811] hover:underline"
              >
                admissions@stpaulthomasacademy.ac.ke
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
