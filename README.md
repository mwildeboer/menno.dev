# Welcome! 👋

This is the source for my personal page. [https://menno.dev](https://menno.dev)

1.  Install:

    ```
    pnpm i
    ```

2.  Develop:

    ```
    pnpm dev
    ```

3.  Build

    ```
    pnpm build
    ```

To resize updated versions of the fonts:

1. `pip install fonttools`
2. `pip install brotli`
3. `pyftsubset InterVariable.ttf --output-file=mySmallerFont.woff2 --unicodes="U+0020-007E" --layout-features="ccmp,locl,mark,mkmk,kern" --flavor="woff2"`
