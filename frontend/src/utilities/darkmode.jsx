// On page load or when changing themes, best to add inline in `head` to avoid FOUC
export default function darkMode() {
  console.log(window.matchMedia);
  console.log("reached");
  if (
    localStorage.theme !== "dark"
    // || (!('theme' in localStorage)
    //  && window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.removeItem("theme");
    document.documentElement.classList.remove("dark");
  }
}
