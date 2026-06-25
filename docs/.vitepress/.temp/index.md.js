import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Coding Notes","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="coding-notes" tabindex="-1">Coding Notes <a class="header-anchor" href="#coding-notes" aria-label="Permalink to &quot;Coding Notes&quot;">​</a></h1><h2 id="algorithms" tabindex="-1">Algorithms <a class="header-anchor" href="#algorithms" aria-label="Permalink to &quot;Algorithms&quot;">​</a></h2><ul><li><a href="/coding-notes/algorithms/two-pointers/leetcode-76-minimum-window-substring">Two Pointers</a></li></ul><h2 id="recent" tabindex="-1">Recent <a class="header-anchor" href="#recent" aria-label="Permalink to &quot;Recent&quot;">​</a></h2><ul><li><a href="/coding-notes/algorithms/two-pointers/leetcode-76-minimum-window-substring">Leetcode 76 - Minimum Window Substring</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
