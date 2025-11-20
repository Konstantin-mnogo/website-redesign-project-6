import { useState } from "react";
import { Button } from "@/components/ui/button";
import BannerCalculator from "@/components/BannerCalculator";
import StandCalculator from "@/components/calculators/StandCalculator";
import SignageCalculator from "@/components/calculators/SignageCalculator";
import StandPreview from "@/components/calculators/StandPreview";
import Icon from "@/components/ui/icon";

const CalculatorSection = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>("stand");

  const [standWidth, setStandWidth] = useState<string>("");
  const [standHeight, setStandHeight] = useState<string>("");
  const [standThickness, setStandThickness] = useState<string>("3");
  const [standPrinting, setStandPrinting] = useState<string>("interior");
  const [standHeaderText, setStandHeaderText] = useState<string>("ИНФОРМАЦИЯ");
  const [standFontFamily, setStandFontFamily] = useState<string>("sans-serif");
  const [standBgColor, setStandBgColor] = useState<string>("white");
  const [pocketsA5, setPocketsA5] = useState<string>("");
  const [pocketsA4, setPocketsA4] = useState<string>("");
  const [pocketsA3, setPocketsA3] = useState<string>("");
  const [pocketsA2, setPocketsA2] = useState<string>("");

  const [signageWidth, setSignageWidth] = useState<string>("");
  const [signageHeight, setSignageHeight] = useState<string>("");
  const [signageType, setSignageType] = useState<string>("световой-короб");
  const [signageMaterial, setSignageMaterial] = useState<string>("акрил");
  const [signageLighting, setSignageLighting] = useState<boolean>(true);
  const [signageInstallation, setSignageInstallation] = useState<boolean>(true);

  const calculateStandPrice = () => {
    const width = parseFloat(standWidth) / 100;
    const height = parseFloat(standHeight) / 100;
    
    if (!width || !height || width <= 0 || height <= 0) return 0;
    
    const area = width * height;
    
    const thicknessPrices: Record<string, number> = {
      "3": 1200,
      "5": 1800,
      "10": 2500
    };
    
    const printingPrices: Record<string, number> = {
      "interior": 800,
      "exterior": 1200,
      "laminated": 1500
    };
    
    const pocketPrices: Record<string, number> = {
      "A5": 150,
      "A4": 200,
      "A3": 300,
      "A2": 400
    };
    
    let price = area * thicknessPrices[standThickness];
    
    price += area * printingPrices[standPrinting];
    
    price += (parseInt(pocketsA5) || 0) * pocketPrices["A5"];
    price += (parseInt(pocketsA4) || 0) * pocketPrices["A4"];
    price += (parseInt(pocketsA3) || 0) * pocketPrices["A3"];
    price += (parseInt(pocketsA2) || 0) * pocketPrices["A2"];
    
    return Math.round(price);
  };

  const calculateSignagePrice = () => {
    const width = parseFloat(signageWidth);
    const height = parseFloat(signageHeight);
    
    if (!width || !height || width <= 0 || height <= 0) return 0;
    
    const area = width * height;
    const pricePerSqm = 15000;
    
    const materialCoefficients: Record<string, number> = {
      "акрил": 1.0,
      "композит": 1.2,
      "пвх": 0.8,
      "металл": 1.5
    };
    
    const typeCoefficients: Record<string, number> = {
      "световой-короб": 1.0,
      "объемные-буквы": 1.3,
      "плоская-вывеска": 0.7,
      "неоновая": 1.8
    };
    
    let price = area * pricePerSqm;
    
    price *= materialCoefficients[signageMaterial] || 1.0;
    price *= typeCoefficients[signageType] || 1.0;
    
    if (signageLighting) price += area * 2000;
    if (signageInstallation) price += area * 1500;
    
    return Math.round(price);
  };

  return (
    <>
      <section id="calculator" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Калькуляторы</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Выберите тип калькулятора для расчёта стоимости
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <Button 
                  size="lg"
                  variant={selectedCalculator === "banner" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("banner")}
                  className="gap-2 w-full sm:w-auto"
                >
                  <Icon name="Image" size={20} />
                  Баннеры
                </Button>
                <Button 
                  size="lg"
                  variant={selectedCalculator === "stand" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("stand")}
                  className="gap-2 w-full sm:w-auto"
                >
                  <Icon name="Clipboard" size={20} />
                  Инфостенды
                </Button>
                <Button 
                  size="lg"
                  variant={selectedCalculator === "signage" ? "default" : "outline"}
                  onClick={() => setSelectedCalculator("signage")}
                  className="gap-2 w-full sm:w-auto"
                >
                  <Icon name="Store" size={20} />
                  Вывески
                </Button>
              </div>
            </div>
            
            {selectedCalculator === "stand" && (
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <StandCalculator
                  standWidth={standWidth}
                  setStandWidth={setStandWidth}
                  standHeight={standHeight}
                  setStandHeight={setStandHeight}
                  standThickness={standThickness}
                  setStandThickness={setStandThickness}
                  standPrinting={standPrinting}
                  setStandPrinting={setStandPrinting}
                  standHeaderText={standHeaderText}
                  setStandHeaderText={setStandHeaderText}
                  standFontFamily={standFontFamily}
                  setStandFontFamily={setStandFontFamily}
                  standBgColor={standBgColor}
                  setStandBgColor={setStandBgColor}
                  pocketsA5={pocketsA5}
                  setPocketsA5={setPocketsA5}
                  pocketsA4={pocketsA4}
                  setPocketsA4={setPocketsA4}
                  pocketsA3={pocketsA3}
                  setPocketsA3={setPocketsA3}
                  pocketsA2={pocketsA2}
                  setPocketsA2={setPocketsA2}
                  calculateStandPrice={calculateStandPrice}
                />
                <StandPreview
                  standWidth={standWidth}
                  standHeight={standHeight}
                  standHeaderText={standHeaderText}
                  standFontFamily={standFontFamily}
                  standBgColor={standBgColor}
                  pocketsA5={pocketsA5}
                  pocketsA4={pocketsA4}
                  pocketsA3={pocketsA3}
                  pocketsA2={pocketsA2}
                />
              </div>
            )}
            
            {selectedCalculator === "signage" && (
              <SignageCalculator
                signageWidth={signageWidth}
                setSignageWidth={setSignageWidth}
                signageHeight={signageHeight}
                setSignageHeight={setSignageHeight}
                signageType={signageType}
                setSignageType={setSignageType}
                signageMaterial={signageMaterial}
                setSignageMaterial={setSignageMaterial}
                signageLighting={signageLighting}
                setSignageLighting={setSignageLighting}
                signageInstallation={signageInstallation}
                setSignageInstallation={setSignageInstallation}
                calculateSignagePrice={calculateSignagePrice}
              />
            )}
            
            {selectedCalculator === "banner" && <BannerCalculator />}
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorSection;