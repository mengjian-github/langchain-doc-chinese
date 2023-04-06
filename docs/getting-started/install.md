# 设置和安装

## 快速入门

要开始使用 Langchain，您需要初始化一个新的 Node.js 项目，并配置一些脚本来构建、格式化和编译您的代码。

如果您只想快速开始，请[克隆此存储库](https://github.com/domeccleston/langchain-ts-starter)，并按照 README 说明设置具有这些依赖项的模板项目。

如果您愿意自己设置，请继续阅读以下说明。

## 安装

要开始，请使用以下命令安装 LangChain：

```bash npm2yarn
npm install -S langchain
```

我们目前支持在 Node.js 18 和 19 上使用 LangChain。前往[此处](https://github.com/hwchase17/langchainjs/discussions/152)投票，选择我们应该支持的下一个环境。

### TypeScript

LangChain 是用 TypeScript 编写的，并为其所有公共 API 提供类型定义。

## 加载库

### 在 Node.js 中使用 ESM

LangChain 提供了针对 Node.js 环境的 ESM 构建。您可以使用以下语法导入它：

```typescript
import { OpenAI } from "langchain/llms";
```

If you are using TypeScript in an ESM project we suggest updating your `tsconfig.json` to include the following:

```json
{
  "compilerOptions": {
    ...
    "target": "ES2020", // or higher
    "module": "nodenext",
  }
}
```

### 在 Node.js 中使用 CommonJS

LangChain 提供了一个针对 Node.js 环境的 CommonJS 构建。您可以使用以下语法导入它：

```typescript
const { OpenAI } = require("langchain/llms");
```

### 其他环境

LangChain 目前仅支持基于 Node.js 的环境，包括 Vercel 无服务器函数（但不包括 Edge 函数）以及其他无服务器环境，如 AWS Lambda 和 Google Cloud Functions。

目前我们不支持在浏览器中运行 LangChain。我们正在关注社区对我们应该支持的其他环境的讨论和投票。请前往 [这里](https://github.com/hwchase17/langchainjs/discussions/152) 进行投票和讨论。

有关部署 LangChain 应用程序的更多信息，请参见 [部署](../production/deployment.md)。

## 不支持：Node.js 16

我们不支持 Node.js 16，但如果您想在 Node.js 16 上运行 LangChain，则需要按照本节中的说明进行操作。我们不能保证这些说明将来仍然有效。

您需要全局提供 `fetch`，可以通过以下两种方式之一实现：

- 使用 `NODE_OPTIONS='--experimental-fetch' node ...` 命令运行应用程序，或
- 安装 `node-fetch` 并按照 [这里](https://github.com/node-fetch/node-fetch#providing-global-access) 的说明操作

此外，您还需要填充 `unstructuredClone`，例如通过安装 `core-js` 并按照 [这里](https://github.com/zloirock/core-js) 的说明操作。

如果您正在使用 Node.js 18 或 19，则无需执行任何操作。
