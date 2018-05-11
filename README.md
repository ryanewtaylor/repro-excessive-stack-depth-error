# Excessive Stack Depth Error Reproduction

This repo reproduces an excessive stack depth error when using TypeScript,
Immutable, Webpack, ts-loader, and `yarn link`.

## Getting Started

### Environment (Prerequisites)

* Windows 10
* Node v8.5.0
* Yarn v1.6.0

### To Reproduce

Open a command window at this repo's location and run

```powershell
cd lib
yarn install
yarn build
yarn link

cd ..\app
yarn install
yarn link "lib"
yarn buildWithTsLoader
```

Alternatively, to confirm this is a ts-loader issue compile `app` with
awesome-typescript-loader.

```powershell
yarn buildWithAtLoader
```

Or, compile `app` without any bundling (just TypeScript).

```powershell
yarn buildWithTsc
```
