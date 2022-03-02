// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     disable: !isProduction
//   }
// })

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], // Replace `jsx?` with `tsx?`
}
