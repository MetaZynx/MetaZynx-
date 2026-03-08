import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col pt-32">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-20 w-full">
        <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-brand-navy mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-secondary-text font-sans max-w-none">
          <p>Last updated: March 8, 2026</p>
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">1. Introduction</h2>
          <p>Welcome to MetaZynx. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          
          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">2. The Data We Collect About You</h2>
          <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
