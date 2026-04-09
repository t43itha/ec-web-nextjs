import type { Metadata } from 'next';
import ClientAbout from './ClientAbout';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'About Eugene Chauffeurs | London Premium Chauffeur Service',
  description: 'Meet the team behind London\'s most trusted luxury chauffeur service. TfL licensed, professionally trained chauffeurs delivering exceptional executive transport.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <ClientAbout />;
}
