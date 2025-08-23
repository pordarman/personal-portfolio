import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Bu bileşen, route (yol) her değiştiğinde sayfanın en üstüne scroll yapar.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Yumuşak kaydırma efekti için
    });
  }, [pathname]); // Sadece pathname değiştiğinde bu effect"i tekrar çalıştır.

  return null; // Bu bileşen arayüzde herhangi bir şey render etmez.
}

export default ScrollToTop;
