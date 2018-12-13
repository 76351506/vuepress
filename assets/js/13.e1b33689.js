(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{197:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("主题组件同样受到"),e("router-link",{attrs:{to:"./using-vue.html#浏览器-api-访问限制"}},[t._v("浏览器 API 访问限制")]),t._v("。")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),e("p",[t._v("这儿和开发一个正常的 Vue 应用程序是一样的。完全取决于你如何组织你的主题。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[e("code",[t._v("title")]),t._v("，"),e("code",[t._v("description")]),t._v(" 和 "),e("code",[t._v("base")]),t._v(" 从 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中的相应字段复制而来。 "),e("code",[t._v("pages")]),t._v(" 包含每个页面的元数据对象数组，包括其路径，页面标题（在 "),e("router-link",{attrs:{to:"./markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" 中显式指定或从页面上的第一个标题推断）以及该文件中的任意 YAML frontmatter 数据。")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[e("code",[t._v("lastUpdated")]),t._v(" 是该文件最后一次 git 提交的 UNIX 时间戳，更多详细信息请参考"),e("router-link",{attrs:{to:"./../default-theme-config/#最近更新"}},[t._v("最近的更新")]),t._v("。")],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"自定义主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("VuePress 使用 Vue 单个文件组件来定制主题。要使用自定义布局，请在文档根目录下创建一个 "),s("code",[this._v(".vuepress/theme")]),this._v(" 目录，然后创建一个 "),s("code",[this._v("Layout.vue")]),this._v(" 文件：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ theme\n      └─ Layout.vue\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"网站和网页元数据-site-and-page-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网站和网页元数据-site-and-page-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站和网页元数据(site and page metadata)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("对于 "),e("code",[t._v("docs")]),t._v(" 中的每个 "),e("code",[t._v(".md")]),t._v(" 文件，"),e("code",[t._v("Layout")]),t._v("组件将只被调用一次，并且整个站点和该特定页面的元数据将分别暴露为 "),e("code",[t._v("this.$site")]),t._v(" 和 "),e("code",[t._v("this.$page")]),t._v(" 属性被注入到应用程序中的每个组件里。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是这个网站的 "),s("code",[this._v("$site")]),this._v(" 值：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue-powered Static Site Generator"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是你正在查看的此页面的 "),s("code",[this._v("$page")]),this._v(" 对象：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guide/custom-themes.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"自定义主题"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/* ... */"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("如果用户在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中提供 "),e("code",[t._v("themeConfig")]),t._v("，它也可以用 "),e("code",[t._v("$site.themeConfig")]),t._v("。你可以使用它来允许用户自定义主题的行为 - 例如，指定类别和页面顺序。然后，你可以将这些数据与 "),e("code",[t._v("$site.pages")]),t._v(" 一起使用来动态构建导航链接。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后，别忘了 "),s("code",[this._v("this.$route")]),this._v(" 和 "),s("code",[this._v("this.$router")]),this._v(" 也可作为 Vue Router API 的一部分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内容摘要-content-excerpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容摘要-content-excerpt","aria-hidden":"true"}},[this._v("#")]),this._v(" 内容摘要(content excerpt)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果 markdown 文件包含一个 "),s("code",[this._v("\x3c!-- more --\x3e")]),this._v(" 注释，那么注释上方的任何内容都将被提取，然后暴露在 "),s("code",[this._v("$page.excerpt")]),this._v(" 中。如果你正在为博客创建自定义主题，可以使用此数据来渲染带有摘要信息的文章列表。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内容出口-content-outlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容出口-content-outlet","aria-hidden":"true"}},[this._v("#")]),this._v(" 内容出口(content outlet)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所渲染的当前 "),s("code",[this._v(".md")]),this._v(" 文件的编译内容将作为特殊的 "),s("code",[this._v("<Content/>")]),this._v(" 全局组件来使用。你需要将其呈现在布局的某个位置以显示页面的内容。最简单的主题可以是一个带有以下内容的 "),s("code",[this._v("Layout.vue")]),this._v(" 组件：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"应用级别的增强-app-level-enhancements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的增强-app-level-enhancements","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用级别的增强(app level enhancements)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主题可以通过在主题根文件的 "),s("code",[this._v("enhanceApp.js")]),this._v(" 文件来增强 VuePress 使用的 Vue 应用。该文件应该通过 "),s("code",[this._v("export default")]),this._v(" 命令导出一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从依赖中引用主题-using-theme-from-a-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从依赖中引用主题-using-theme-from-a-dependency","aria-hidden":"true"}},[this._v("#")]),this._v(" 从依赖中引用主题(using theme from a dependency)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主题可以在 npm 上以原始 Vue SFC 格式发布为 "),s("code",[this._v("vuepress-theme-xxx")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要使用 npm 依赖项的主题，请在 "),s("code",[this._v(".vuepress/config.js")]),this._v(" 中提供一个 "),s("code",[this._v("theme")]),this._v(" 选项：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("VuePress 将尝试定位并使用 "),s("code",[this._v("node_modules/vuepress-theme-awesome/Layout.vue")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义默认主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义默认主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义默认主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vuepress eject [targetDir]")]),this._v(" 命令会将默认主题的源代码复制到 "),s("code",[this._v(".vuepress/theme")]),this._v(" 中，来允许彻底的自定义。但是请注意，一旦你 eject，即使你升级 VuePress 版本，你这仍然是自己的主题，并且不会收到对默认主题的未来更新或错误修复。")])}],!1,null,null,null);n.options.__file="custom-themes.md";s.default=n.exports}}]);