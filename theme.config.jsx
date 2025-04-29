import LightDarkImage from './components/LightDarkImage'

export default {
  logo: (
    <>
      <LightDarkImage 
        light = "/images/logo-black.png" 
        dark = "/images/logo-white.png" 
        alt = "Unruggable Logo"
        style={{"width":"30px", marginRight: "5px"}} />
      <span>Gateway Documentation</span>
    </>
  ),
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/images/logo-black.png"/>
    </>
  ),
  project: {
    link: 'https://github.com/unruggable-labs/unruggable-gateways/'
  },
  chat: {
    link: 'https://discord.gg/QtrHVK3U8c'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Gateway Documentation',
    }
  },
  docsRepositoryBase: 'https://github.com/unruggable-labs/unruggable-gateways-documentation/blob/main/',
  sidebar: {
    defaultMenuCollapsed: false,
    toggleButton: true,
    forcedNavOrder: true, // This ensures that files not listed in _meta.json are not displayed.
  },
  // ... other theme options
}