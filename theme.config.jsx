export default {
  logo: (
    <>
      <img src="images/logo-black.png" alt="Unruggable logo" style={{"width":"30px", marginRight: "5px"}} />
      <span>Gateway Documentation</span>
    </>
  ),
  project: {
    link: 'https://github.com/unruggable-labs/evmgateway-v2/'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Gateway Documentation',
    }
  }
  // ... other theme options
}