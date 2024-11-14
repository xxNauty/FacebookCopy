import Footer from "../../common/footer";
import WelcomeInfo from "./welcome-info";
import LoginBox from "./loginBox";

export default function Page() {
  return (
      <>
          <div className="w-screen h-screen pb-[130px] pt-[10px] lg:pt-[130px] flex justify-center items-start lg:items-center">
              <div className="max-h-[60vh] lg:h-full max-w-[80vw] flex justify-start lg:justify-evenly flex-col lg:flex-row">
                  <WelcomeInfo />
                  <LoginBox />
              </div>
          </div>
          <Footer isFixed={true} />
      </>
  );
}
