// Update tab title
export const updateTitle = (title) => (document.title = title);

// Update tab icon (GitHub avatars accept a `s` size param)
export const updateFavicon = (url) => {
  if (!url) return;
  const icon =
    document.querySelector("link[rel='icon']") ??
    document.head.appendChild(
      Object.assign(document.createElement("link"), { rel: "icon" })
    );
  icon.type = "image/png";
  icon.href = `${url}${url.includes("?") ? "&" : "?"}s=64`;

  const appleIcon = document.querySelector("link[rel='apple-touch-icon']");
  if (appleIcon) {
    appleIcon.href = `${url}${url.includes("?") ? "&" : "?"}s=192`;
  }
};

// Theme
export const getStoredTheme = () => localStorage.getItem("theme");

export const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const setTheme = (theme) => {
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

// Contact Form
export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};
