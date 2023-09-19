/**
 * https://ladle.dev/docs/config
 */
export default {
  stories: ".ladle/stories/**.stories.{js,jsx,ts,tsx}",
  outDir: ".ladle/dist",
  addons: {
    mode: {
      enabled: false,
    },
    theme: {
      enabled: false,
    },
    rtl: {
      enabled: false,
    },
  },
};
