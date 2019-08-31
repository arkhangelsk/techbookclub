export const imports = {
  'haskell.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "haskell" */ 'haskell.mdx'
    ),
}
