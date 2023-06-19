import AboutComp from "@/src/components/AboutComp/AboutComp";
import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";

export default async function AboutPage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <AboutComp session={session} />
    </main>
  );
}
