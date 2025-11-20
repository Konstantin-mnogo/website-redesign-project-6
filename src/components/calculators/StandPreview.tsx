import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StandPreviewProps {
  standWidth: string;
  standHeight: string;
  standHeaderText: string;
  standFontFamily: string;
  standBgColor: string;
  pocketsA5: string;
  pocketsA4: string;
  pocketsA3: string;
  pocketsA2: string;
}

const StandPreview = ({
  standWidth,
  standHeight,
  standHeaderText,
  standFontFamily,
  standBgColor,
  pocketsA5,
  pocketsA4,
  pocketsA3,
  pocketsA2
}: StandPreviewProps) => {
  const renderStandPreview = () => {
    const width = parseFloat(standWidth) || 100;
    const height = parseFloat(standHeight) || 100;
    
    const maxDisplayWidth = 400;
    const maxDisplayHeight = 500;
    
    const scale = Math.min(
      maxDisplayWidth / width,
      maxDisplayHeight / height,
      4
    );
    
    const displayWidth = width * scale;
    const displayHeight = height * scale;
    
    const headerHeight = Math.max(displayHeight * 0.15, 30);
    const fontSize = Math.max(headerHeight * 0.5, 14);
    
    const bgColors: Record<string, string> = {
      "white": "linear-gradient(to right bottom, #ffffff, #f3f4f6)",
      "blue": "linear-gradient(to right bottom, #dbeafe, #bfdbfe)",
      "gray": "linear-gradient(to right bottom, #f3f4f6, #e5e7eb)",
      "beige": "linear-gradient(to right bottom, #fef3c7, #fde68a)"
    };
    
    const fontFamilies: Record<string, string> = {
      "sans-serif": "Arial, sans-serif",
      "serif": "Georgia, serif",
      "monospace": "Courier New, monospace"
    };
    
    const pocketSizes: Record<string, { widthMm: number; heightMm: number }> = {
      "A5": { widthMm: 148 + 16, heightMm: 210 + 8 },
      "A4": { widthMm: 210 + 16, heightMm: 297 + 8 },
      "A3": { widthMm: 297 + 16, heightMm: 420 + 8 },
      "A2": { widthMm: 420 + 16, heightMm: 594 + 8 }
    };
    
    const pockets = [];
    
    for (let i = 0; i < parseInt(pocketsA5); i++) {
      const pocket = pocketSizes["A5"];
      pockets.push({ 
        format: "A5", 
        width: (pocket.widthMm / 10) * scale,
        height: (pocket.heightMm / 10) * scale
      });
    }
    for (let i = 0; i < parseInt(pocketsA4); i++) {
      const pocket = pocketSizes["A4"];
      pockets.push({ 
        format: "A4", 
        width: (pocket.widthMm / 10) * scale,
        height: (pocket.heightMm / 10) * scale
      });
    }
    for (let i = 0; i < parseInt(pocketsA3); i++) {
      const pocket = pocketSizes["A3"];
      pockets.push({ 
        format: "A3", 
        width: (pocket.widthMm / 10) * scale,
        height: (pocket.heightMm / 10) * scale
      });
    }
    for (let i = 0; i < parseInt(pocketsA2); i++) {
      const pocket = pocketSizes["A2"];
      pockets.push({ 
        format: "A2", 
        width: (pocket.widthMm / 10) * scale,
        height: (pocket.heightMm / 10) * scale
      });
    }
    
    return (
      <div 
        className="border-4 border-primary/20 shadow-lg relative overflow-hidden"
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
          margin: "0 auto",
          background: bgColors[standBgColor]
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center text-secondary font-bold px-4"
          style={{ 
            height: `${headerHeight}px`
          }}
        >
          <div style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamilies[standFontFamily],
            textAlign: "center"
          }}>
            {standHeaderText}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap justify-center items-end gap-2">
          {pockets.map((pocket, index) => (
            <div 
              key={index}
              className="bg-white/80 border-2 border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600"
              style={{
                width: `${pocket.width}px`,
                height: `${pocket.height}px`
              }}
            >
              {pocket.format}
            </div>
          ))}
        </div>
        
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-medium text-muted-foreground">
          {standWidth}×{standHeight} см
        </div>
      </div>
    );
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Визуализация</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center min-h-[500px] p-6">
        {renderStandPreview()}
      </CardContent>
    </Card>
  );
};

export default StandPreview;
