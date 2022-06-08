let style;
let importcode;
let code;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document.createElement("style")
      code = `@import "https://discord-theme.pages.dev/frcat.css";`
      importcode = document.createTextNode(code)
      style.appendChild(importcode)
      document.head.appendChild(style)
    },
    onRemove: async () => {
      style.remove();
    },
  },
};
