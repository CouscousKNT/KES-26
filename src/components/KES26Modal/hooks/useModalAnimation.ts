import { useState, useEffect } from "react";

export function useModalAnimation(open: boolean) {
  const [visible, setVisible] = useState(open);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => setAnimating(true));
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 280);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return { visible, animating };
}
