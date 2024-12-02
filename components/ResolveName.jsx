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
import OwnableOwner from './OwnableOwner';

export default function ResolveName({ name, network, displayOwner = false }) {

    const [resolvedAddress, setResolvedAddress] = useState(false);

    const explorerPrepend = network === "mainnet" ? "" : `${network}.`;
    const etherscanLink = resolvedAddress ? `https://${explorerPrepend}etherscan.io/address/${resolvedAddress}` : "";
    const ethtoolsLink = `https://ethtools.com/ethereum-name-service/ens-whois/${name}`;

    useEffect(() => {
        async function doResolve() {
            const provider = new JsonRpcProvider(`https://${network}.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`);
            const result = await resolveName(provider, name);
            setResolvedAddress(result);
        }

        doResolve();
    }, []);

    return (
        <div className='nx-text-center'>
            <p className = "nx-text-md">
                <a href={network == "mainnet" ? ethtoolsLink : etherscanLink}>{name}</a>
            </p>
            {resolvedAddress === false ? (
            <span className="loader"></span>
            ):(
                <>
                    {resolvedAddress !== null && (
                        <>
                            <p className = "nx-text-xs">            
                                <a href={etherscanLink}>{resolvedAddress}</a>
                            </p>
                            {displayOwner && (
                                <OwnableOwner address={resolvedAddress} network={network} />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}