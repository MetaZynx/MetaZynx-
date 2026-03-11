import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MetaZynx',
  description: 'Read the MetaZynx Privacy Policy to understand how we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://www.metazynx.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
