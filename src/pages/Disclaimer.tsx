// src/pages/Disclaimer.tsx

export default function Disclaimer() {
  // Format date like "July 24, 2025"
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="bg-[#161e2e]/80  text-white  py-16 px-4">
      <div className="max-w-4xl font-sans mx-auto">
        {/* Title Card */} 
        <section className="space-y-8 shadow-lg p-8 w-full bg-[#161e2e] rounded-2xl mb-12">
          <div className=" shadow-lg p-8 bg-white/30 rounded-2xl mb-12">
            <h1 className="text-4xl font-bold font-poppins text-center text-[#df8811] mb-2">Disclaimer</h1>
            <p className="text-sm text-[#df8811]">
              Last updated: <time dateTime={new Date().toISOString()}>{lastUpdated}</time>
            </p>
          </div>
      {/* Dynamic Last Updated */}
      <p className="text-sm  mb-8">Last updated: {lastUpdated}</p>

      {/* Body with Tailwind Typography */}
      <article className="prose prose-lg ">
        <h2 className="text-[#df8811]">1. Limitation of Liability</h2>
        <p>
          St Paul Thomas Academy makes every effort to ensure the accuracy and reliability of the information provided on this website. However, we cannot guarantee that all information is error-free, complete, or current. St Paul Thomas Academy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the information provided on this website.
        </p>

        <h2 className="text-[#df8811]">2. Accuracy of Information</h2>
        <p>
          The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>

        <h2 className="text-[#df8811]">3. No Professional Advice</h2>
        <p>
          The information provided on this website is not intended to be a substitute for professional advice. Visitors to this website should not act upon the information provided without seeking professional guidance. St Paul Thomas Academy does not provide any professional or legal advice through this website.
        </p>

        <h2 className="text-[#df8811]">4. Third-party Content</h2>
        <p>
          This website may contain links or references to third-party websites, products, or services. These links are provided for convenience only and do not imply endorsement or approval by St Paul Thomas Academy. We have no control over the content or actions of these third-party websites and shall not be responsible for any damages or losses arising from their use.
        </p>

        <h2 className="text-[#df8811]">5. Copyright and Intellectual Property</h2>
        <p>
          All content and materials on this website, including but not limited to text, graphics, logos, images, audio clips, and video clips, are the property of St Paul Thomas Academy or its content suppliers and are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, or distribution of any materials from this website is strictly prohibited.
        </p>

        <h2 className="text-[#df8811]">6. Modification of Terms</h2>
        <p>
          St Paul Thomas Academy reserves the right to modify, update, or amend the terms of this disclaimer at any time without prior notice. By continuing to use this website, you agree to be bound by the most current version of the disclaimer.
        </p>

        <p>
          By using this website, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer. If you do not agree with any part of this disclaimer, please do not use this website.
        </p>
      </article>
      </section>
      </div>
    </main>
    
  );
}
