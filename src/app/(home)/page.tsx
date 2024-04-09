import {
  FAQ,
  Featured,
  HealthcareFuture,
  HealtcareBenefits,
  HeroSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <HealtcareBenefits />
      <HealthcareFuture />
      <FAQ />
    </main>
  );
}
