# NutriLife

NutriLife is a website for a nutritionist, providing personalized nutrition plans, health mentorship, corporate wellness programs, and more. The website is built using React and Tailwind CSS, and it is powered by Vite for development and build processes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/NutriLife.git
cd NutriLife
npm install
```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the website at `http://localhost:5173`.

To build the project for production, run:

```sh
npm run build
```

To preview the production build, run:

```sh
npm run serve
```

## Scripts

- `build-css`: Compiles Tailwind CSS from `src/styles.css` to `public/styles.css`.
- `dev`: Starts the Vite development server.
- `build`: Builds the project for production.
- `serve`: Previews the production build.

## Project Structure

```
.gitignore
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
assets/
  AngelLazov.jpg
public/
  styles.css
src/
  App.tsx
  main.tsx
  styles.css
  components/
    AboutSection.tsx
    BookingModal.tsx
    ContactSection.tsx
    Footer.tsx
    Header.tsx
    HeroSection.tsx
    ServiceSection.tsx
    TestimonialsSection.tsx
```

## Dependencies

- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `accepts`: Content negotiation library.
- `anymatch`: Utility for matching file paths.
- `apache-crypt`: Apache-style password encryption.
- `apache-md5`: Apache-style MD5 password hashing.
- `arr-diff`: Array difference utility.
- `arr-flatten`: Array flattening utility.
- `arr-union`: Array union utility.
- `array-unique`: Array uniqueness utility.
- `assign-symbols`: Utility for assigning symbols.
- `async-each`: Asynchronous each utility.
- `atob`: Base64 decoding utility.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `base`: Base class for creating modular JavaScript libraries.
- `basic-auth`: Basic authentication utility.
- `batch`: Batch processing utility.
- `bcryptjs`: Library for hashing passwords.
- `binary-extensions`: List of binary file extensions.
- `braces`: Brace expansion utility.
- `browserslist`: Library to share target browsers between different front-end tools.
- `cache-base`: Base class for creating cache libraries.
- `caniuse-lite`: Smaller version of caniuse-db.
- `chokidar`: File watcher.
- `class-utils`: Utility for working with JavaScript classes.
- `collection-visit`: Utility for visiting items in a collection.
- `colors`: Utility for colorizing console output.
- `component-emitter`: Event emitter component.
- `connect`: Middleware framework for Node.js.
- `convert-source-map`: Utility for converting source maps.
- `copy-descriptor`: Utility for copying property descriptors.
- `core-util-is`: Utility for checking types.
- `cors`: Middleware for enabling CORS.
- `csstype`: TypeScript definitions for CSS.
- `debug`: Debugging utility.
- `decode-uri-component`: Utility for decoding URI components.
- `define-property`: Utility for defining properties.
- `depd`: Deprecation utility.
- `destroy`: Utility for destroying streams.
- `detect-libc`: Utility for detecting libc.
- `duplexer`: Duplex stream utility.
- `echarts`: Charting library.
- `ee-first`: Utility for handling first events.
- `electron-to-chromium`: Utility for mapping Electron versions to Chromium versions.
- `encodeurl`: Utility for encoding URLs.
- `enhanced-resolve`: Enhanced resolver for webpack.
- `esbuild`: JavaScript bundler and minifier.
- `escalade`: Utility for climbing up directories.
- `escape-html`: Utility for escaping HTML.
- `etag`: Utility for generating ETags.
- `event-stream`: Utility for working with event streams.
- `expand-brackets`: Utility for expanding brackets.
- `extend-shallow`: Utility for shallow extending objects.
- `extglob`: Extended globbing utility.
- `faye-websocket`: WebSocket client and server.
- `fill-range`: Utility for filling ranges.
- `finalhandler`: Final handler for HTTP servers.
- `for-in`: Utility for iterating over object properties.
- `fraction.js`: Library for working with fractions.
- `fragment-cache`: Cache for storing fragments.
- `fresh`: Utility for checking freshness of HTTP responses.
- `from`: Utility for creating readable streams.
- `function-bind`: Utility for binding functions.
- `gensync`: Generator-based async/await utility.
- `get-value`: Utility for getting values from objects.
- `glob-parent`: Utility for getting parent directories of glob patterns.
- `globals`: List of global variables.
- `graceful-fs`: Drop-in replacement for Node.js fs module with more features.
- `has-value`: Utility for checking if a value exists.
- `has-values`: Utility for checking if multiple values exist.
- `hasown`: Utility for checking if an object has its own property.
- `http-auth`: HTTP authentication library.
- `http-errors`: Utility for creating HTTP errors.
- `http-parser-js`: HTTP parser in JavaScript.
- `inherits`: Utility for inheriting prototypes.
- `is-accessor-descriptor`: Utility for checking if a property descriptor is an accessor descriptor.
- `is-binary-path`: Utility for checking if a path is binary.
- `is-buffer`: Utility for checking if a value is a buffer.
- `is-data-descriptor`: Utility for checking if a property descriptor is a data descriptor.
- `is-descriptor`: Utility for checking if a value is a descriptor.
- `is-extendable`: Utility for checking if a value is extendable.
- `is-extglob`: Utility for checking if a value is an extended glob pattern.
- `is-glob`: Utility for checking if a value is a glob pattern.
- `is-number`: Utility for checking if a value is a number.
- `is-plain-object`: Utility for checking if a value is a plain object.
- `is-windows`: Utility for checking if the platform is Windows.
- `is-wsl`: Utility for checking if the platform is WSL.
- `isarray`: Utility for checking if a value is an array.
- `isobject`: Utility for checking if a value is an object.
- `jiti`: JavaScript interpreter and transformer.
- `js-tokens`: Utility for tokenizing JavaScript.
- `jsesc`: Utility for escaping JavaScript strings.
- `json5`: JSON5 parser and serializer.
- `kind-of`: Utility for checking the type of a value.
- `lightningcss`: CSS parser and transformer.
- `lightningcss-win32-x64-msvc`: LightningCSS binary for Windows.
- `lru-cache`: Least Recently Used cache.
- `map-cache`: Cache for storing key-value pairs.
- `map-stream`: Utility for mapping streams.
- `map-visit`: Utility for visiting items in a map.
- `micromatch`: Glob matching utility.
- `mime-db`: Database of MIME types.
- `mime-types`: Utility for working with MIME types.
- `mixin-deep`: Utility for deep mixing objects.
- `morgan`: HTTP request logger.
- `ms`: Utility for converting time strings to milliseconds.
- `nanoid`: Unique ID generator.
- `nanomatch`: Fast and minimal glob matcher.
- `negotiator`: Content negotiation library.
- `node-releases`: Data about Node.js releases.
- `normalize-path`: Utility for normalizing file paths.
- `normalize-range`: Utility for normalizing numeric ranges.
- `object-assign`: Utility for assigning properties to objects.
- `object-copy`: Utility for copying objects.
- `object-visit`: Utility for visiting items in an object.
- `object.pick`: Utility for picking properties from objects.
- `on-finished`: Utility for handling finished events.
- `on-headers`: Utility for handling headers events.
- `opn`: Utility for opening files and URLs.
- `parseurl`: Utility for parsing URLs.
- `pascalcase`: Utility for converting strings to PascalCase.
- `path-dirname`: Utility for getting the directory name of a path.
- `path-is-absolute`: Utility for checking if a path is absolute.
- `pause-stream`: Utility for pausing streams.
- `picocolors`: Utility for colorizing console output.
- `posix-character-classes`: POSIX character classes for regular expressions.
- `postcss-value-parser`: Utility for parsing CSS values.
- `process-nextick-args`: Utility for processing next tick arguments.
- `proxy-middleware`: Middleware for proxying HTTP requests.
- `range-parser`: Utility for parsing HTTP range headers.
- `react`: React library.
- `react-dom`: React DOM library.
- `react-refresh`: React Fast Refresh library.
- `readable-stream`: Utility for working with readable streams.
- `readdirp`: Utility for reading directories recursively.
- `regex-not`: Utility for creating regular expressions that match everything except a given pattern.
- `remove-trailing-separator`: Utility for removing trailing separators from file paths.
- `repeat-element`: Utility for repeating elements.
- `repeat-string`: Utility for repeating strings.
- `resolve-url`: Utility for resolving URLs.
- `ret`: Regular expression token parser.
- `rollup`: JavaScript module bundler.
- `safe-buffer`: Safe buffer implementation.
- `safe-regex`: Utility for checking if a regular expression is safe.
- `scheduler`: React scheduler.
- `semver`: Semantic versioning library.
- `send`: Utility for sending HTTP responses.
- `serve-index`: Middleware for serving directory indexes.
- `set-value`: Utility for setting values in objects.
- `setprototypeof`: Utility for setting the prototype of an object.
- `snapdragon`: Parser and compiler for creating custom DSLs.
- `snapdragon-node`: Utility for working with snapdragon nodes.
- `snapdragon-util`: Utility for working with snapdragon utilities.
- `source-map`: Utility for working with source maps.
- `source-map-js`: JavaScript implementation of source maps.
- `source-map-resolve`: Utility for resolving source maps.
- `source-map-url`: Utility for working with source map URLs.
- `split`: Utility for splitting streams.
- `split-string`: Utility for splitting strings.
- `static-extend`: Utility for extending static properties.
- `statuses`: Utility for working with HTTP statuses.
- `stream-combiner`: Utility for combining streams.
- `string_decoder`: Utility for decoding strings.
- `swiper`: Swiper library for creating sliders.
- `tapable`: Utility for creating tapable hooks.
- `through`: Utility for working with through streams.
- `to-object-path`: Utility for converting strings to object paths.
- `to-regex`: Utility for converting strings to regular expressions.
- `to-regex-range`: Utility for converting ranges to regular expressions.
- `toidentifier`: Utility for converting strings to identifiers.
- `tslib`: TypeScript library.
- `union-value`: Utility for setting union values in objects.
- `unix-crypt-td-js`: Unix crypt implementation in JavaScript.
- `unpipe`: Utility for unpiping streams.
- `unset-value`: Utility for unsetting values in objects.
- `upath`: Utility for working with file paths.
- `update-browserslist-db`: Utility for updating browserslist database.
- `urix`: Utility for converting Windows file paths to Unix file paths.
- `use`: Utility for using plugins.
- `util-deprecate`: Utility for deprecating functions.
- `utils-merge`: Utility for merging objects.
- `uuid`: UUID generator.
- `vary`: Utility for working with HTTP Vary headers.
- `websocket-driver`: WebSocket driver.
- `websocket-extensions`: WebSocket extensions.
- `yallist`: Utility for working with linked lists.
- `zrender`: Rendering library.

## Dev Dependencies

- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `postcss`: PostCSS library.
- `postcss-cli`: PostCSS CLI.
- `tailwindcss`: Tailwind CSS framework.
- `vite`: Vite build tool.
