import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MetaZynx',
  description: 'Read the MetaZynx Terms of Service to understand the rules and guidelines for using our digital marketing services.',
  alternates: {
    canonical: 'https://www.metazynx.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
