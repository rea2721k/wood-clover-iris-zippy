import { createRoot } from "react-dom/client";
import { Desktop } from "@/components/desktop/Desktop";
import { useSetup } from "@/lib/setup-store";
import "./portable.css";

function boot() {
  const mode = (window as Window & { __SENSLAB_MODE__?: string }).__SENSLAB_MODE__;
  if (mode === "setup") {
    useSetup.setState({
      installed: false,
      appOpen: false,
      appMin: false,
      setupOpen: true,
      setupMin: false,
      setupMode: "install",
      wizard: false,
      step: 0,
      busy: false,
    });
    return;
  }
  if (mode === "app") {
    useSetup.setState({
      installed: true,
      appOpen: true,
      appMin: false,
      setupOpen: false,
      setupMin: false,
    });
  }
}

boot();
useSetup.persist.onFinishHydration(boot);

createRoot(document.getElementById("root")!).render(<Desktop />);
