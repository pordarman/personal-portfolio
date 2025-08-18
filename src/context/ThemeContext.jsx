import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Context"i oluşturuyoruz.
const ThemeContext = createContext();

// 2. Provider bileşenini oluşturuyoruz. Bu, uygulamamızı sarmalayacak.
export function ThemeProvider({ children }) {
  // "theme" state"i, localStorage"dan gelen değeri veya sistem tercihini kullanır.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Eğer kullanıcının daha önceden kaydettiği bir tema varsa onu kullan
    if (savedTheme) {
      return savedTheme;
    }
    // Yoksa, kullanıcının işletim sisteminin tema tercihini kontrol et
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // Hiçbiri yoksa varsayılan olarak "light" kullan
    return "light";
  });

  // Tema değiştiğinde çalışacak olan effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Kullanıcının tercihini tarayıcı hafızasına kaydediyoruz.
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provider, alt bileşenlere "theme" ve "toggleTheme" fonksiyonunu sağlar.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Kendi custom hook"umuzu oluşturuyoruz. Bu, context"i kullanmayı kolaylaştırır.
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
