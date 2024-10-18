// components/MethodPartial.js
const MethodPartial = ({ description, js, solidity }) => {
  return (
    <table style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px', width: '100%' }}>
      <tbody>
        <tr>
          <td colSpan={2} style = {{padding:'10px', background: '#FFF5EE', borderBottom: '1px'}}>{description}</td>
        </tr>
        <tr>
          <th className = "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600">Javascript</th>
          <th className = "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600">Solidity</th>
        </tr>
        <tr>
          <td className = "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600" style={{ width: '50%' }}>
            <code class="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10" dir="ltr">{js}</code>
          </td>
          <td className = "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600" style={{ width: '50%' }}>
            {solidity ? (
              <code class="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10" dir="ltr">{solidity}</code>
            ) : ("N/A")}
          </td>
        </tr>
      </tbody>        
    </table>
  );
};

export default MethodPartial;