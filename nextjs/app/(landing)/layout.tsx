import { Footer } from '@/components/landing/Footer';
import { Navbar } from '@/components/landing/Navbar';
import { createClient } from '@/utils/supabase/server';

export default async function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
}
