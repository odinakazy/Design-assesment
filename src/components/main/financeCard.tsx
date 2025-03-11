import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { Menu, Sun, Moon } from "lucide-react";
import Rectangleimg from "../../assets/rectangle.png";
import Rectangleimg2 from "../../assets/Rectangle2.png";
import Revenueimg from "../../assets/Revenue.png";
import Financeimg from "../../assets/Finance.png";
import Groupimg from "../../assets/Group.png";
import { useState } from "react";

export default function FinanceCard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={cn(
        "relative min-h-screen flex items-center justify-center transition-colors",
        darkMode ? "bg-black text-white" : "bg-[#FAFAFA] text-black"
      )}
    >
      <img
        className="absolute top-[-4rem] right-0"
        src={Rectangleimg}
        alt="rectangle image"
      />
      <div
        className={
          " flex items-center justify-center  p-6 transition-colors mt-16"
        }
      >
        <Card
          className={cn(
            " relative max-w-4xl w-full border-none p-10 transition-colors",
            darkMode ? "bg-[#1D1D1D]" : "bg-[#ffffff]"
          )}
        >
          <div className="flex justify-between px-6 items-center">
            <div className="flex gap-4">
              <FiTwitter className="text-green-400 text-xl" />

              <FaFacebook className="text-green-400 text-xl" />
              <FiInstagram className="text-green-400 text-xl" />
              <button className="hidden" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <Sun className="text-yellow-400 w-6 h-6" />
                ) : (
                  <Moon className="text-gray-600 w-6 h-6" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <img src={Groupimg} alt="groupimage" />
              <img src={Financeimg} alt="financeimage" />
            </div>
            <div>
              <Menu className="text-green-400 w-6 h-6" />
            </div>
          </div>

          <CardContent className="flex flex-row items-center mb-14  ">
            <div className="flex-1">
              <h2 className="text-[2rem] font-bold">Mutual Investment</h2>
              <p className="mt-2 text-[#767676] ">
                At Finance we care about your future. We help you invest the way
                you want. So you can relax, have fun and let your fund grow.
              </p>
              <Button className="mt-12 mb-5 bg-green-500 hover:bg-green-600 text-white rounded-xl">
                Learn more
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img className="w-72 h-auto" src={Revenueimg} alt="Revenueimg" />
            </div>
          </CardContent>
          <img
            className="absolute bottom-0 left-0 w-72 h-auto"
            src={Rectangleimg2}
            alt="rectangle image"
          />
        </Card>
      </div>
    </div>
  );
}
