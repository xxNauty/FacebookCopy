import Footer from "@/app/ui/footer";
import LoginPage from "@/app/ui/loginPage";
import WelcomeInfo from "@/app/ui/welcome-info";

export default function Home() {
  return (
      <div>
          <div className="w-screen h-screen flex flex-row justify-center p-[130px]">
              <WelcomeInfo />
              <LoginPage />
          </div>
          <Footer />
      </div>
  );
}
