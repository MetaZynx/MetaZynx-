import { Metadata } from 'next';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog & Insights — MetaZynx',
  description: "Expert insights on SEO, performance marketing, social media ads, influencer marketing and digital strategy from MetaZynx's team.",
  alternates: {
    canonical: 'https://www.metazynx.com/blog',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-primary-bg flex flex-col">
      <BlogContent />
    </main>
  );
}
