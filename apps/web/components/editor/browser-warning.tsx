"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { isUsingOPFS } from "@/lib/storage";

export function BrowserWarning() {
  const [showWarning, setShowWarning] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("browser-warning-dismissed");
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    async function checkSupport() {
      const opfsSupported = await isUsingOPFS();
      setShowWarning(!opfsSupported);
    }

    checkSupport();
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("browser-warning-dismissed", "true");
    setDismissed(true);
  };

  if (!showWarning || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-2xl animate-in fade-in slide-in-from-top-2 duration-300">
      <Alert variant="destructive" className="shadow-lg border-2">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle className="flex items-center justify-between pr-8">
          浏览器仅部分受支持
        </AlertTitle>
        <AlertDescription>
          <p className="mb-2">
            此浏览器不支持源私有文件系统（OPFS），项目将使用 IndexedDB 保存，性能可能受到影响。
          </p>
          <p className="mt-2 text-xs">
            建议使用支持 OPFS 的最新版 Chrome、Edge 或 Safari，并退出无痕浏览模式。
          </p>
        </AlertDescription>
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="关闭警告"
        >
          <X className="h-4 w-4" />
        </button>
      </Alert>
    </div>
  );
}