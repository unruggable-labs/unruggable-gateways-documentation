async function resolveName(provider, name, chainId = 60) {

    try {
    	const resolver = await provider.getResolver(name);
	    const address = await resolver.getAddress(chainId);

	    return address;

    } catch (e) {

        return null;
    }
}

import { useState, useEffect } from 'react';
import { JsonRpcProvider } from 'ethers';

export default function ResolveName({ name, network }) {
  const [resolvedAddress, setResolvedAddress] = useState(false);

  useEffect(() => {
    async function doResolve() {
        const provider = new JsonRpcProvider(`https://${network}.infura.io/v3/6a3931a773b843bbaeae62c92932a575`);
        const result = await resolveName(provider, name);
        setResolvedAddress(result);
    }

    doResolve();
  }, []);

  return (
    <div className='nx-text-center'>
        <p className = "nx-text-md">
            <a href={`https://ethtools.com/ethereum-name-service/ens-whois/${name}`}>{name}</a>
        </p>
        {resolvedAddress === false ? (
            <span class="loader"></span>
        ):(
            <p className = "nx-text-xs">            
                <a href={`https://etherscan.io/address/${resolvedAddress}`}>{resolvedAddress}</a>
            </p>
        )}
    </div>
  );
}