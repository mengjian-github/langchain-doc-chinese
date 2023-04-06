(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设置和安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置和安装"}},[t._v("#")]),t._v(" 设置和安装")]),t._v(" "),a("h2",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),a("p",[t._v("要开始使用 Langchain，您需要初始化一个新的 Node.js 项目，并配置一些脚本来构建、格式化和编译您的代码。")]),t._v(" "),a("p",[t._v("如果您只想快速开始，请"),a("a",{attrs:{href:"https://github.com/domeccleston/langchain-ts-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("克隆此存储库"),a("OutboundLink")],1),t._v("，并按照 README 说明设置具有这些依赖项的模板项目。")]),t._v(" "),a("p",[t._v("如果您愿意自己设置，请继续阅读以下说明。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("要开始，请使用以下命令安装 LangChain：")]),t._v(" "),a("div",{staticClass:"language-bash npm2yarn extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" langchain\n")])])]),a("p",[t._v("我们目前支持在 Node.js 18 和 19 上使用 LangChain。前往"),a("a",{attrs:{href:"https://github.com/hwchase17/langchainjs/discussions/152",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("投票，选择我们应该支持的下一个环境。")]),t._v(" "),a("h3",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("p",[t._v("LangChain 是用 TypeScript 编写的，并为其所有公共 API 提供类型定义。")]),t._v(" "),a("h2",{attrs:{id:"加载库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载库"}},[t._v("#")]),t._v(" 加载库")]),t._v(" "),a("h3",{attrs:{id:"在-node-js-中使用-esm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-node-js-中使用-esm"}},[t._v("#")]),t._v(" 在 Node.js 中使用 ESM")]),t._v(" "),a("p",[t._v("LangChain 提供了针对 Node.js 环境的 ESM 构建。您可以使用以下语法导入它：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OpenAI "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"langchain/llms"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If you are using TypeScript in an ESM project we suggest updating your "),a("code",[t._v("tsconfig.json")]),t._v(" to include the following:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ES2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or higher")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nodenext"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"在-node-js-中使用-commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-node-js-中使用-commonjs"}},[t._v("#")]),t._v(" 在 Node.js 中使用 CommonJS")]),t._v(" "),a("p",[t._v("LangChain 提供了一个针对 Node.js 环境的 CommonJS 构建。您可以使用以下语法导入它：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OpenAI "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"langchain/llms"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"其他环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他环境"}},[t._v("#")]),t._v(" 其他环境")]),t._v(" "),a("p",[t._v("LangChain 目前仅支持基于 Node.js 的环境，包括 Vercel 无服务器函数（但不包括 Edge 函数）以及其他无服务器环境，如 AWS Lambda 和 Google Cloud Functions。")]),t._v(" "),a("p",[t._v("目前我们不支持在浏览器中运行 LangChain。我们正在关注社区对我们应该支持的其他环境的讨论和投票。请前往 "),a("a",{attrs:{href:"https://github.com/hwchase17/langchainjs/discussions/152",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 进行投票和讨论。")]),t._v(" "),a("p",[t._v("有关部署 LangChain 应用程序的更多信息，请参见 "),a("RouterLink",{attrs:{to:"/production/deployment.html"}},[t._v("部署")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"不支持-node-js-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不支持-node-js-16"}},[t._v("#")]),t._v(" 不支持：Node.js 16")]),t._v(" "),a("p",[t._v("我们不支持 Node.js 16，但如果您想在 Node.js 16 上运行 LangChain，则需要按照本节中的说明进行操作。我们不能保证这些说明将来仍然有效。")]),t._v(" "),a("p",[t._v("您需要全局提供 "),a("code",[t._v("fetch")]),t._v("，可以通过以下两种方式之一实现：")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("NODE_OPTIONS='--experimental-fetch' node ...")]),t._v(" 命令运行应用程序，或")]),t._v(" "),a("li",[t._v("安装 "),a("code",[t._v("node-fetch")]),t._v(" 并按照 "),a("a",{attrs:{href:"https://github.com/node-fetch/node-fetch#providing-global-access",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 的说明操作")])]),t._v(" "),a("p",[t._v("此外，您还需要填充 "),a("code",[t._v("unstructuredClone")]),t._v("，例如通过安装 "),a("code",[t._v("core-js")]),t._v(" 并按照 "),a("a",{attrs:{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 的说明操作。")]),t._v(" "),a("p",[t._v("如果您正在使用 Node.js 18 或 19，则无需执行任何操作。")])])}),[],!1,null,null,null);a.default=n.exports}}]);