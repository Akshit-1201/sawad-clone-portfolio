import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingResumeButton = () => {
  const handleDownload = () => {
    // Replace with actual resume URL
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleDownload}
        className="group h-14 w-14 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90"
        aria-label="Download Resume"
      >
        <FileDown className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-background text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Download Resume
      </div>
    </div>
  );
};
